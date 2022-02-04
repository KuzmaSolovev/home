import React, { useState } from "react";
import Image from "./Image";
import Bronze from "./Bronze";
import KMCStake from "./KMCStake";
import Platinum from "../../assets/big-platinum.png";
import Gold from "../../assets/big-gold.png";
import Silver from "../../assets/big-silver.png";
import BronzeImg from "../../assets/big-bronze.png";
import { Container, List, Warraper, KMC, Left} from "./StyledStake";
import StakeDetails from "./Notification/StakeDetails";
import { Content } from "./KMCStake/StyledKMCStake";
import StakeTable from "./StakeTable";

export interface StakeData {
  name: string;
  imgUrl: string;
  minAmount: number;
  maxAmount: number;
  apr: number;
  lockTime: number;
  contractAddress: string;
}
const selectedDim = "92px";
const unSelectedDim = "76px";
const data: StakeData[] = [
  {
    name: "Diamond",
    imgUrl: Platinum,
    minAmount: 500000,
    lockTime: 15778476,
    maxAmount: 500000,
    apr: 25,
    contractAddress: "0x2EF63189Be7f37D82369F6815D7A55eCBd395D7d",
  }
];

export default function Stake() {
  const [selected, setSelected] = useState(data[0]);
  return (
    <React.Fragment>
      <Warraper>
        <Container>
          {/* <Contain> */}
          <Left>
            <Bronze role={0} stakeData={selected} />
          </Left>
          <KMC>
          <Content>
              <a>Staking Coming back soon!</a>
            </Content>
            {/* <KMCStake role={0} stakeData={selected}></KMCStake> */}
            <StakeDetails role={0} stakeData={selected} />
          </KMC>
          <StakeTable></StakeTable>
          {/* </Contain> */}
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
