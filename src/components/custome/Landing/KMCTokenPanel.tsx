import React from "react";
import {
  Cointer,
  KMCBtn,
  KMCCointer,
  KMCImg,
  KMCImgCointer,
  KMCText1,
  KMCText2,
} from "./LandingStyled/StyledKMCToken";

import KMCImage from "../../../assets/img/TOKEN.svg";

const KMCTokenPanel = () => {
  return (
    <React.Fragment>
      <Cointer>
        <KMCCointer>
          <KMCText1>KMC Token Economy</KMCText1>
          <KMCText2>
            Kitsumon uses its own exclusive token called KMC. This token is used
            to make purchases from the in-game store, trade for NFT's on the
            marketplace
          </KMCText2>
          {/* <KMCBtn>Buy KMC</KMCBtn> */}
        </KMCCointer>
        <KMCImgCointer>
          <KMCImg data={KMCImage}></KMCImg>
        </KMCImgCointer>
      </Cointer>
    </React.Fragment>
  );
};

export default KMCTokenPanel;
