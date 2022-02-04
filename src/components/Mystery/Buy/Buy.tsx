import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Warraper,
  MysteryContainer,
  Image,
  DetContainer,
  Head,
  Button,
  ImgContainer,
  Pattern,
} from "../StyledMystery";

import {
  Auction,
  Content,
  Custominput,
  Detail,
  Input,
  Inputcontent,
  Space,
  Value,
} from "./StyledBuy";

import BoxImg from "../../../assets/Box.png";
import { useEthContext } from "../../../context/EthereumContext";
import Menubar from "../../../layouts/Menubar";
import Connect from "../Connect/Connect";
import { getContract } from "../../../hooks/getContract";
import { PaymentAcceptorABI } from "../../../contract/PaymentAcceptorABI";
import { Erc20ABI } from "../../../contract/Erc20ABI";
import { IWhitelistABI } from "../../../contract/IWhitelistABI";
import { IWhitelistCounterABI } from "../../../contract/IWhitelistCounterABI";
import { PaymentAcceptorFcfsAbi } from "../../../contract/PaymentAcceptorFcfsAbi";
import { ethers } from "ethers";
import { toast } from "react-toastify";
import Saleend from "../Saleend/Saleend";

export const saleConfig = [
  {
    chainId: 80001,
    whitelistAddress: "0x1c8D6daEd52972C089e549EDC5B52A4958Be9fDf",
    paymentAcceptorAddress: "0x3582644D7f03a7774aC53056fD2BB58325a32547",
    currency: "0xfe4F5145f6e09952a5ba9e956ED0C25e3Fa4c7F1",
    price: 1,
    isFcfs: false,
    endDate: new Date("01-22-2022"),
  },
];

export const paymentAcceptors = [
  "0x3582644D7f03a7774aC53056fD2BB58325a32547",
  "0x70D88753ca56423C5aF5087FD421D65EC12c45ca",
];

export default function Buy() {
  const [amount, setAmount] = useState(0);
  const [remainingBuys, setRemainingBuys] = useState<number>(0);
  const [totalBoxes, setTotalBoxes] = useState(0);
  const [balance, setBalance] = useState("0");
  const [currentTime, setCurrentTime] = useState(new Date());
  const { web3, provider, chainId, currentAcc } = useEthContext();
  const isInvalidBuy =
    !web3 || !currentAcc || (chainId !== 137 && chainId !== 80001);
  const sale = saleConfig.find((t) => t.chainId === chainId);
  const [whitelisted, setWhitelisted] = useState(false);
  const ended = !sale
    ? true
    : sale!.endDate < currentTime || (sale!.isFcfs && remainingBuys === 0);
  useEffect(() => {
    try {
      updateWhitelist();
      updateRemainingBuys();
      updateTotalBoxes();
      updateBalance();
    } catch {}
    const timer = setInterval(() => {
      if (!isInvalidBuy) {
        updateRemainingBuys();
        updateTotalBoxes();
        updateBalance();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [chainId, web3, currentAcc]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [currentAcc]);

  if (isInvalidBuy) {
    return <Connect />;
  }

  if (!sale) {
    return <Connect />;
  }
  const paymentAcceptorContract = sale.isFcfs
    ? getContract(web3, PaymentAcceptorFcfsAbi, sale.paymentAcceptorAddress)
    : getContract(web3, PaymentAcceptorABI, sale.paymentAcceptorAddress);
  const erc20Contract = getContract(web3, Erc20ABI, sale.currency);
  const whitelistContract = sale.isFcfs
    ? getContract(web3, IWhitelistABI, sale.whitelistAddress)
    : getContract(web3, IWhitelistCounterABI, sale.whitelistAddress);
  const paymentAcceptorContracts = paymentAcceptors.map((t) =>
    getContract(web3, PaymentAcceptorABI, t)
  );
  const updateRemainingBuys = async function () {
    const remainingBuys = (
      sale.isFcfs        
          ? await paymentAcceptorContract.methods._cap().call()
        : await whitelistContract.methods.getCount(currentAcc).call()
    ).toString();
    setRemainingBuys(
      remainingBuys == null ? remainingBuys : Number(remainingBuys)
    );
  };

  const updateWhitelist = async function() {
    setWhitelisted(await whitelistContract.methods
      .isWhiteListed(currentAcc)
      .call());
  }
  const updateTotalBoxes = async function () {
    let sum = 0;
    for (const paymentAcceptor of paymentAcceptorContracts) {
      sum =
        sum +
        Number(await paymentAcceptor.methods.purchases(currentAcc).call());
    }
    setTotalBoxes(sum);
  };

  const updateBalance = async function () {
    const decimals = await erc20Contract.methods.decimals().call();
    const balance = await erc20Contract.methods.balanceOf(currentAcc).call();
    const balanceEth = ethers.utils.formatUnits(balance, decimals);
    setBalance(balanceEth.toString());
  };

  const buyNow = async function () {
    const paused = await paymentAcceptorContract.methods.paused().call();
    if (paused) {
      toast("Sale has ended.", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }

    const decimals = await erc20Contract.methods.decimals().call();
    if (!whitelisted || amount <= 0 || (remainingBuys ?? 0) < amount) {
      toast("Invalid amount.", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }
    if (Number(balance) < amount * sale.price) {
      toast("Not enough balance.", {
        type: "error",
        position: "bottom-center",
      });
      return;
    }
    try {
      const gasPriceWei = (
        Number(await web3!.eth.getGasPrice()) * 1.2
      ).toString();
      const totalAmount = ethers.utils.parseUnits(
        (amount * Number(sale.price)).toString(),
        decimals
      );
      const totalAmountApproved = await erc20Contract.methods
        .allowance(currentAcc, paymentAcceptorContract._address)
        .call();
      if (totalAmountApproved < totalAmount) {
        await erc20Contract.methods
          .approve(
            paymentAcceptorContract._address,
            ethers.utils.parseUnits("1000000000", Number(decimals))
          )
          .send({
            from: currentAcc,
            gasPrice: gasPriceWei,
          });
      }
      await paymentAcceptorContract.methods
        .pay(amount)
        .send({ from: currentAcc });
      toast("Success you have purchased " + amount + " boxes.", {
        type: "success",
        position: "bottom-center",
      });
    } catch (exception: any) {
      toast("Error buying box", {
        type: "error",
        position: "bottom-center",
      });
    }
  };

  const getCountdownData = () => {
    const date_future = sale.endDate.valueOf();
    const date_now = currentTime.valueOf();
    let seconds = Math.floor((date_future - date_now) / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    hours = hours - days * 24;
    minutes = minutes - days * 24 * 60 - hours * 60;
    seconds = seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    return {
      hours,
      minutes,
      seconds,
    };
  };
  const getBuyText = () => {
    if (!whitelisted) {
      return (
        <Detail style={{ color: "red", marginTop: "1rem" }}>
          Not in whitelist!
        </Detail>
      );
    }
    return (
      <Detail style={{ marginTop: "1rem" }}>
        You Can Buy <a style={{ color: boxColor }}>{remainingBuys}</a> Boxes
      </Detail>
    );
  };

  const countdownData = getCountdownData();
  const boxColor = (remainingBuys ?? 0) > 0 ? "green" : "red";

  const getSaleEndsIn = () => {
    if (ended) {
      return (<Fragment>Sale Ended</Fragment>);
    }
    return (
      <Fragment>
        {countdownData.hours}h {countdownData.minutes}m {countdownData.seconds}s
      </Fragment>
    );
  };
  return (
    <React.Fragment>
      <Menubar />
      <Warraper>
        <Pattern />
        <Container>
          <MysteryContainer>
            <ImgContainer>
              <Image src={BoxImg}></Image>
            </ImgContainer>

            <DetContainer>
              <Head>mystery box sale</Head>
              <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Content>

              {getBuyText()}
              <Auction>
                <Space>
                  <Detail>Sale ends in</Detail>
                  <Detail>
                    {getSaleEndsIn()}
                  </Detail>
                </Space>
                <Space>
                  <Value>Price Per Box</Value>
                  <Value>{sale.price.toString()} USDC</Value>
                </Space>
                <Space>
                  <Value>My Total Boxes</Value>
                  <Value>{totalBoxes.toString()} MBOX</Value>
                </Space>
                <Space>
                  <Value>Wallet Balance</Value>
                  <Value>{balance.toString()} USDC</Value>
                </Space>
                <Space>
                  {!ended ? (
                    <>
                      <Custominput>
                        <Input
                          value={amount}
                          onChange={(e: any) =>
                            setAmount(
                              Number.isNaN(Number(e.currentTarget.value))
                                ? 0
                                : Number(e.currentTarget.value)
                            )
                          }
                          type="text"
                        ></Input>

                        <Inputcontent>Amount</Inputcontent>
                      </Custominput>
                      <Button
                        width="45%"
                        height="48px"
                        fsize="14px"
                        bgcolor="#021437"
                        onClick={buyNow}
                        style={{ marginTop: "15px", cursor: "pointer" }}
                      >
                        Buy Now
                      </Button>
                    </>
                  ) : (
                    <></>
                  )}
                </Space>
              </Auction>
            </DetContainer>
          </MysteryContainer>
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
