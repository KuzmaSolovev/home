import React from "react";
import {
  BoyImg,
  BoyImgCotainer,
  Container,
  CookImg,
  MobaBtn,
  MobaContainer,
  MobaContent,
  MobaContent1,
  MobaContent2,
  MobaContent3,
  RawImg,
} from "./LandingStyled/StyledMoba";

import Girl from "../../../assets/img/GIRL.svg";
import Raw from "../../../assets/img/RAW.svg";
import Cook from "../../../assets/img/COOK.svg";

const MobaPanel = () => {
  return (
    <React.Fragment>
      <Container>
        <BoyImgCotainer>
          <BoyImg data={Girl}></BoyImg>
          <RawImg data={Raw}></RawImg>
          <CookImg data={Cook}></CookImg>
        </BoyImgCotainer>
        <MobaContainer>
          <MobaContent>
            <MobaContent1>More than a MOBA</MobaContent1>
            <MobaContent2>
              As a trainer players can choose to participate in a range of
              Profession's. Learn to fish, cook, mine materials and much much
              more as you create amazing items that can benefit your Kitsu.
            </MobaContent2>
            <MobaContent3>
              Profession's give players access to numerous types of NFT products
              that can be traded to the marketplace.
            </MobaContent3>
            <a target="_blank" href="https://workdrive.zohopublic.eu/file/6z7ah614ce0951527444791851f61baa7c369"><MobaBtn>Whitepaper</MobaBtn></a>
          </MobaContent>
        </MobaContainer>
      </Container>
    </React.Fragment>
  );
};

export default MobaPanel;
