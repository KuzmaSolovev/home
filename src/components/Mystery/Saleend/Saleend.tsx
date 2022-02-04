import React from "react";
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

import { Content } from "./StyledSaleend";

import BoxImg from "../../../assets/Box.png";
import Menubar from "../../../layouts/Menubar";

export default function Saleend() {
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
              <Content>sale Ended</Content>
            </DetContainer>
          </MysteryContainer>
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
