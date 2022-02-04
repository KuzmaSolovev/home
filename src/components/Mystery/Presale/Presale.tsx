import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
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
  Allocation,
  Content,
  Boxprice,
  Detail,
  Price,
  Pricetime,
  Ending,
  Time,
  Timecontainer,
  Value,
  Unit,
  Count,
  Amount,
  Total,
} from "./StyledPresale";

import BoxImg from "../../../assets/Box.png";

export default function Presale() {
  const data = [
    { val: 0, unit: "days" },
    { val: 21, unit: "hours" },
    { val: 10, unit: "min" },
    { val: 54, unit: "sec" },
  ];

  const options = ["1", "2", "3"];
  const defaultOption = options[0];

  return (
    <React.Fragment>
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
              <Allocation>Pre sale allocation: 125</Allocation>
              <Pricetime>
                <Boxprice>
                  <Detail>Mystery box price</Detail>
                  <Price>$175</Price>
                </Boxprice>
                <Ending>
                  <Detail>Round ending in</Detail>
                  <Time>
                    {data.map((d) => (
                      <Timecontainer>
                        <Value>{d.val}</Value>
                        <Unit>{d.unit}</Unit>
                      </Timecontainer>
                    ))}
                  </Time>
                </Ending>
              </Pricetime>
              <Count>
                <Amount>
                  <Detail>Amount</Detail>
                  <Dropdown
                    className="drop"
                    options={options}
                    value={defaultOption}
                    placeholder="Select an option"
                  />
                </Amount>
                <Total>Total: $ 525</Total>
              </Count>
              <Button
                width="80%"
                height="40px"
                fsize="12px"
                bgcolor="#53D0B5"
                style={{ marginTop: "30px" }}
              >
                Buy now
              </Button>
            </DetContainer>
          </MysteryContainer>
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
