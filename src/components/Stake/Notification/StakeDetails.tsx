import React, { useEffect, useState } from "react";
import { Container, Div, APR, Percent, Warraper } from "./StyledNotification";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useEthContext } from "../../../context/EthereumContext";
import { StakeData } from "../Stake";
import { StakeABI } from "../../../contract/StakeABI";
import { BigNumber } from "@ethersproject/bignumber";
import { ethers } from "ethers";

export default function StakeDetails(props: any) {
  const { web3, provider, chainId, currentAcc } = useEthContext();
  const stakingData: StakeData = props.stakeData;
  const [totalAmountStaked, setTotalAmountStaked] = useState("0");
  const [totalRewardsLeft, setTotalRewardsLeft] = useState("0");
  const [key, setKey] = useState(0);

  useState(() => setInterval(() => setKey((k) => k + 1), 5000));

  useEffect(() => {
    async function getContractData() {
      let totalAmount = BigNumber.from("0");
      if (web3 && currentAcc) {
        const web3_provider: any = web3;
        const contract = new web3_provider.eth.Contract(
          StakeABI,
          stakingData.contractAddress
        );

        const totalRewards = BigNumber.from(
          await contract.methods.getTotalRewardFund().call()
        );
        setTotalRewardsLeft(totalRewards.toString());
        const stakeCount = Number(
          (await contract.methods.getStakeCount(currentAcc).call()).toString()
        );
        for (let i = 0; i < stakeCount; i++) {
          const stakingData = await contract.methods
            .getStake(currentAcc, i.toString())
            .call();
          totalAmount = totalAmount.add(BigNumber.from(stakingData.amount));
        }

        setTotalAmountStaked(totalAmount.toString());
      }
    }
    getContractData();
  }, [web3, chainId, currentAcc, key, stakingData.name]);
  let detailsSection = (
    <>
      <Container role={props.role}>
        <Div>
          <APR>APR</APR>
          <AiOutlineQuestionCircle style={{ marginLeft: "7px" }} />
        </Div>
        <Percent>{stakingData.apr}%</Percent>
      </Container>
      <Container role={props.role}>
        <Div>
          <APR>Total Tokens Locked</APR>
          <AiOutlineQuestionCircle style={{ marginLeft: "7px" }} />
        </Div>
        <Percent>{ethers.utils.formatEther(totalAmountStaked)} KMC</Percent>
      </Container>
      <Container role={props.role}>
        <Div>
          <APR>Lock Time</APR>
          <AiOutlineQuestionCircle style={{ marginLeft: "7px" }} />
        </Div>
        <Percent>6 Months</Percent>
      </Container>
      <Container role={props.role}>
        <Div>
          <APR>Total Remaining Allocations</APR>
        </Div>
        <Percent>0</Percent>
      </Container>
    </>
  );
  
  if(chainId !== 137 && chainId !== 80001) {
    detailsSection = (<Container role={props.role}>
        <Div>
          <APR>Invalid Network</APR>
        </Div>
    </Container>);
  }

  if(!currentAcc) {    
    detailsSection = (<Container role={props.role}>
      <Div>
        <APR>Please Connect Wallet</APR>
      </Div>
  </Container>);
  }

  if(!web3) {
    detailsSection = (<Container role={props.role}>
        <Div>
          <APR>Web3 Wallet not detected</APR>
        </Div>
    </Container>);
  }
  return (
    <React.Fragment>
      <Warraper>
        {detailsSection}
      </Warraper>
    </React.Fragment>
  );
}
