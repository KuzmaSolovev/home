import React from "react";
import {
  Container,
  Warraper,
  MysteryContainer,
  Image,
  DetContainer,
  Head,
  ImgContainer,
  Pattern,
} from "../StyledMystery";

import { Row, Shapes } from "./StyledReveal";

import BoxImg from "../../../assets/Box.png";
import Menubar from "../../../layouts/Menubar";
import Polygon from "../Polygon/Polygon";

export default function Reveal() {
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
              <Head>mystery box reveal</Head>
              <Shapes>
                <Row>
                  <Polygon />
                  <Polygon />
                  <Polygon />
                </Row>
                <Row className="lastrow">
                  <Polygon />
                  <Polygon />
                  <Polygon />
                </Row>
              </Shapes>
            </DetContainer>
          </MysteryContainer>
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
