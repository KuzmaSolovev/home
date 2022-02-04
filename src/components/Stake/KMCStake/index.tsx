import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import img from "../../../assets/kmc.png";
import { useEthContext } from "../../../context/EthereumContext";
import { StakeABI } from "../../../contract/StakeABI";
import { StakeData } from "../Stake";
import {
  Warraper,
  Container,
  Img,
  Content,
  KMC,
  Button,
} from "./StyledKMCStake";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TextField from "@material-ui/core/TextField";
import { Erc20ABI, erc20Address } from "../../../contract/Erc20ABI";
import { SpinnerCircular } from "spinners-react";

export default function KMCStake(props: any) {
  const { web3, provider, chainId, currentAcc } = useEthContext();
  const [key, setKey] = useState(0);
  const [totalRewardsLeft, setTotalRewardsLeft] = useState("0");
  const stakeData: StakeData = props.stakeData;
  const [stakeValue, setStakeValue] = useState(stakeData.minAmount);
  const [loading, setLoading] = useState(false);

  const notifyLowAmount = () =>
    toast("Invalid amount", { type: "error", position: "bottom-center" });
  const notifyWalletNotConnected = () =>
    toast("Wallet is not connected", {
      type: "error",
      position: "bottom-center",
    });
  const notifyInvalidNetwork = () =>
    toast("Invalid Network, please switch to Polygon Mainnet", {
      type: "error",
      position: "bottom-center",
    });
  const web3NotDetected = () =>
    toast("Wallet not detected", { type: "error", position: "bottom-center" });
  const notEnoughRewardsInPool = (maxRewardAmount: number) =>
    toast(
      `Not enough reward in pool, please lower staking amount to ${maxRewardAmount.toFixed(
        2
      )} KMC`,
      { type: "error", position: "bottom-center" }
    );

  async function getContractData() {
    if (web3 && currentAcc) {
      const web3_provider: any = web3;
      const contract = new web3_provider.eth.Contract(
        StakeABI,
        stakeData.contractAddress
      );
      const totalRewards = BigNumber.from(
        await contract.methods.getTotalRewardFund().call()
      );
      if (stakeValue > stakeData.maxAmount) {
        setStakeValue(stakeData.maxAmount);
      }
      setTotalRewardsLeft(totalRewards.toString());
    }
  }

  useState(() => setInterval(() => setKey((k) => k + 1), 5000));

  useEffect(() => {
    getContractData();
  }, [stakeData, web3, chainId, currentAcc, key]);

  async function stake() {
    try {
      if (loading === true) {
        return;
      }
      setLoading(true);
      if (!web3) {
        web3NotDetected();
        return;
      }

      if (!currentAcc) {
        const response = await provider.request({
          method: `eth_requestAccounts`,
        });
        if (!response) {
          notifyWalletNotConnected();
        }
        return;
      }

      if (!currentAcc) {
        notifyWalletNotConnected();
        return;
      }

      const chainId = await web3.eth.getChainId();
      if (chainId !== 137 && chainId !== 80001) {
        notifyInvalidNetwork();
        return;
      }
      const web3_provider: any = web3;
      const contract = new web3_provider.eth.Contract(
        StakeABI,
        stakeData.contractAddress
      );

      const erc20Contract = new web3_provider.eth.Contract(
        Erc20ABI,
        erc20Address
      );

      const stakeEtherAmt = ethers.utils.parseEther(stakeValue.toString());
      const rewardAmount = await contract.methods
        .getReward(stakeEtherAmt)
        .call();
      const rewardAmountEth = Number(ethers.utils.formatEther(rewardAmount));
      const totRewardNumb = Number(
        ethers.utils.formatEther(totalRewardsLeft).toString()
      );
      const maxRewardAmount =
        totRewardNumb /
        ((stakeData.lockTime * (stakeData.apr / 31540000)) / 100);

      if (rewardAmountEth > maxRewardAmount) {
        notEnoughRewardsInPool(maxRewardAmount);
        return;
      }

      if (
        stakeValue >= stakeData.minAmount &&
        stakeValue <= stakeData.maxAmount
      ) {
        const allowance = await erc20Contract.methods
          .allowance(currentAcc, stakeData.contractAddress)
          .call();
        const allowanceEth = Number(ethers.utils.formatEther(allowance));
        const stakeEthAmount = Number(stakeValue);
        
        const needsAddAllowance = (stakeEthAmount - allowanceEth) > 0;
        console.log("Stake amt: %s Allowance: %s Needs allowance: %s ", stakeEthAmount, allowanceEth, needsAddAllowance);
        const gasPriceWei = await web3.eth.getGasPrice();
        if(needsAddAllowance) {
        const addAllowance = 100000000;
        console.log("Adding allowance %s", addAllowance)
        // Approve 100m
        await erc20Contract.methods
          .approve(stakeData.contractAddress, ethers.utils.parseEther(addAllowance.toString()).toString())
          .send({
            from: currentAcc,
            gasPrice: gasPriceWei,
          });
        }

        await contract.methods
          .stake(stakeEtherAmt)
          .send({
            from: currentAcc,
            gasPrice: gasPriceWei,
          });
      } else {
        notifyLowAmount();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  let stakeButton = loading ? "Pending Transaction" : "Stake";
  return (
    <React.Fragment>
      <Warraper role={props.role}>
        <Container>
          <KMC>
            <Img src={img}></Img>

            <Content role={props.role}>
              <TextField
                size="small"
                type="number"
                style={{ marginTop: "-1rem" }}
                inputProps={{ inputMode: "numeric", step: "0.01" }}
                label="$KMC Amount"
                value={stakeValue}
                onChange={(e) =>
                  setStakeValue(
                    Number.isNaN(Number(e.currentTarget.value))
                      ? 0
                      : Number(e.currentTarget.value)
                  )
                }
              ></TextField>
            </Content>
          </KMC>
          <Button onClick={stake} role={props.role}>
            {stakeButton}
          </Button>
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
