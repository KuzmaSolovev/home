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

import { Content } from "./StyledConnect";

import BoxImg from "../../../assets/Box.png";
import Menubar from "../../../layouts/Menubar";
import { useEthContext } from "../../../context/EthereumContext";
import Buy from "../Buy/Buy";
import { switchNetworkMumbai } from "../../../hooks/switchNetworkMumbai";
import { toast } from "react-toastify";

export default function Connect() {
  const { web3, chainId, currentAcc, provider } = useEthContext();

  const validNetwork = chainId === 137 || chainId === 80001;
  const desc = !web3
    ? "Wallet not detected, please use Metamask or XDefi"
    : !validNetwork
    ? "Please connect to the Polygon Network to access this sale."
    : "Please connect your wallet to access this sale.";
  if (web3 && currentAcc && validNetwork) {
    return <Buy />;
  }

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
              <Content>{desc}</Content>
              <Button
                width="205px"
                height="47px"
                fsize="14px"
                bgcolor="#53D0B5"
                onClick={() =>
                  !web3
                    ? toast("Wallet not detected.", {
                        type: "error",
                        position: "bottom-center",
                      })
                    : !currentAcc
                    ? provider.request({
                        method: `eth_requestAccounts`,
                      })
                    : switchNetworkMumbai(provider)
                }
              >
                Connect Wallet
              </Button>
            </DetContainer>
          </MysteryContainer>
        </Container>
      </Warraper>
    </React.Fragment>
  );
}
