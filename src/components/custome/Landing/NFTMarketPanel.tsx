import React from "react";
import {
  BtnDiv,
  Container,
  NftContentBtn,
  NftContentText1,
  NftContentText2,
  NftContentText3,
  NftContentText4,
  SkyfallImg,
  NftImgContainer,
  NftTextContainer,
  BaalimonImg,
  PharaohaImg,
  KitsuneImg,
  NuclismoImg,
} from "./LandingStyled/StyledNFTMarket";
import Skyfall from "../../../assets/img/Skyfall.svg";
import Baalimon from "../../../assets/img/Baalimon.svg";
import Kitsune from "../../../assets/img/Kitsune2.svg";
import Pharaoha from "../../../assets/img/Pharaoha.svg";
import Nuclismo from "../../../assets/img/Nuclismo2.svg";

const NFTMarketPanel = () => {
  return (
    <React.Fragment>
      <Container>
        <NftImgContainer>
          <SkyfallImg data={Skyfall}></SkyfallImg>
          <BaalimonImg data={Baalimon}></BaalimonImg>
          <KitsuneImg data={Kitsune}></KitsuneImg>
          <PharaohaImg data={Pharaoha}></PharaohaImg>
          <NuclismoImg data={Nuclismo}></NuclismoImg>
        </NftImgContainer>
        <NftTextContainer>
          <NftContentText1>NFT Marketplace</NftContentText1>
          <NftContentText2>
            Kitsumon has created its own standalone NFT marketplace giving
            players and traders alike a place to maximise their sale opportunities of everything Kitsumon nelated
            from eggs & Kitsu through to ingredients, items and recipes.
            {"\n"}
            Users can choose to sell outright or auction assets to the public
            over set times using both!
          </NftContentText2>   
          {/* <BtnDiv>
            <NftContentBtn>Marketplace</NftContentBtn>
          </BtnDiv> */}
        </NftTextContainer>
      </Container>
    </React.Fragment>
  );
};

export default NFTMarketPanel;
