import React, { useState, useEffect, Fragment } from "react";
import { useEthContext } from "../../context/EthereumContext";
import {
  abi as contractABI,
  address as contract_address,
} from "../../contract/ABI";
import {
  Amount,
  Avatar,
  AvatarContainer,
  BtnGroup,
  Container,
  Content,
  PriceContainer,
  StakeBtn,
  Vector,
  Warraper,
  Withdraw,
  WithdrawBtn,
  WithdrawDiv,
} from "./StyledToken";
import AvatarImg from "../../assets/Kitsu.png";
import VectorImg from "../../assets/vector.png";
import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";
import { SpinnerCircular } from "spinners-react";
import { toast } from "react-toastify";
import { getContract } from "../../hooks/getContract";

export default function Redeem() {
  const { web3, currentAcc, provider, chainId } = useEthContext();
  const [amount, setAmount] = useState(BigNumber.from(0));
  const [totalAmount, setTotalAmount] = useState(BigNumber.from(0));
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const [invalidNetworkWarning, setInvalidNetworkWarning] = useState(false);

  useState(() => setInterval(() => setKey((k) => k + 1), 5000));
  useEffect(() => {
    if (chainId !== null) {
      setInvalidNetworkWarning(chainId !== 137 && chainId !== 80001);
    }
    if (currentAcc) {
      const getBalance = async () => {
        const contract = getContract(
          web3,
          contractABI,
          contract_address
        );
        const length = await contract.methods
          .getVestingSchedulesCountByBeneficiary(currentAcc)
          .call();
        let totalAmountAdd = BigNumber.from(0);
        let amtDiffAdd = BigNumber.from(0);

        for (let i = 0; i < Number(length.toString()); i++) {
          const vestingId = await contract.methods
            .computeVestingScheduleIdForAddressAndIndex(currentAcc, i)
            .call();

          const vestingSchedule = await contract.methods
            .getVestingScheduleByAddressAndIndex(currentAcc, i)
            .call();

          if (vestingSchedule.revoked === false) {
            const releaseAmount = await contract.methods
              .computeReleasableAmount(vestingId)
              .call();

            const releasedAlready = BigNumber.from(vestingSchedule.released);
            const amtDiff = BigNumber.from(vestingSchedule.amountTotal).sub(
              releasedAlready
            );
            if (amtDiff.toString() !== "0") {
              amtDiffAdd = amtDiffAdd.add(releaseAmount);
              totalAmountAdd = totalAmountAdd.add(amtDiff);
            }
          }
        }

        setTotalAmount(totalAmountAdd);
        setAmount(amtDiffAdd);
      };
      getBalance();
    }
  }, [currentAcc, key, chainId]);

  const onWithdraw = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const contract = getContract(
        web3,
        contractABI,
        contract_address
      );
      if (amount.toString() === "0") {
        toast("No tokens available to withdraw", { type: "error", position: "bottom-center" });
        return;
      }
      if(web3 == null) {
        toast("Wallet not detected", { type: "error", position: "bottom-center" });
        return;
      }

      const gasPriceWei = await web3!.eth.getGasPrice();
      const length = await contract.methods
        .getVestingSchedulesCountByBeneficiary(currentAcc)
        .call();
      if (length > 0) {
        for (let i = 0; i < length; i++) {
          const vestingSchedule = await contract.methods
            .getVestingScheduleByAddressAndIndex(currentAcc, i)
            .call();
          if (vestingSchedule.revoked === false) {
            const vestingId = await contract.methods
              .computeVestingScheduleIdForAddressAndIndex(currentAcc, i)
              .call();
            const releaseAmount = await contract.methods
              .computeReleasableAmount(vestingId)
              .call();
            if (releaseAmount.toString() !== "0") {
              await contract.methods.release(vestingId, releaseAmount).send({
                from: currentAcc,
                gasPrice: gasPriceWei,
              });
              setKey((e) => e + 1);
            }
          }
        }
      } else {
        console.log("length is empty.");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onStake = () => {
    window.location.href = "/staking";
  };

  const etherAmount = Number(ethers.utils.formatEther(amount.toString()));
  const totalEtherAmount = Number(
    ethers.utils.formatEther(totalAmount.toString())
  );
  const percentage =
    totalEtherAmount === 0 ? 0 : (100 / totalEtherAmount) * etherAmount;

  let loggedIn =
    invalidNetworkWarning === true ? (
      <Content>Invalid Network Please Switch to the Polygon Network</Content>
    ) : currentAcc ? (
      <>
        <Content>You are able to withdraw</Content>
        <Withdraw>{percentage.toFixed(2)}% of the vested tokens</Withdraw>
      </>
    ) : (
      <Content>Please connect wallet</Content>
    );

  if (!web3) {
    loggedIn = (
      <Content>
        Web3 Wallet not found, Please click{" "}
        <a href="https://www.xdefi.io/">here</a> for a recommended wallet
      </Content>
    );
  }
  const withdrawButton = loading ? (
    <WithdrawDiv onClick={() => onWithdraw()}>
      <SpinnerCircular
        style={{ float: "left", width: "40px", marginRight: "1rem" }}
      />
      <div style={{ marginTop: "0.5rem" }}>Withdraw</div>
    </WithdrawDiv>
  ) : (
    <WithdrawBtn onClick={() => onWithdraw()}>Withdraw</WithdrawBtn>
  );

  return (
    <React.Fragment>
      <Warraper>
        <Container>
          <AvatarContainer>
            <Avatar src={AvatarImg} />
          </AvatarContainer>
          {loggedIn}
          {invalidNetworkWarning ? (
            <Fragment />
          ) : (
            <Fragment>
              <Content>Total Vested</Content>
              <Withdraw>{totalEtherAmount.toFixed(2)}</Withdraw>
              <PriceContainer>
                <Amount>{etherAmount.toFixed(2)}</Amount>
                <Vector src={VectorImg} />
              </PriceContainer>
              <BtnGroup>
                {withdrawButton}
                <StakeBtn onClick={() => onStake()}>Stake</StakeBtn>
              </BtnGroup>
            </Fragment>
          )}
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
