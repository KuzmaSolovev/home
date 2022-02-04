import React from "react";
import { Warraper, Container, Title, KMC, Amount, APR } from "./StyledBroze";
import { StakeData } from "../Stake";

export default function index(props: any) {
  const stakeData: StakeData = props.stakeData;
  return (
    <React.Fragment>
      <Warraper role={props.role}>
        <Container>
          <img src={stakeData.imgUrl} />
          <Title>{stakeData.name.toUpperCase()} TIER</Title>
          <KMC role={props.role}>
            <Amount>{stakeData.minAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Amount> {" - "} 
            <Amount>{stakeData.maxAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Amount>
            <span>KMC</span>
          </KMC>
          <APR>{stakeData.apr}% APR</APR>
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
