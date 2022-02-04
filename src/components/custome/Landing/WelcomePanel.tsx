import {
  BlurImg,
  Container,
  ImgDiv,
  Welcome,
  WelcomeContentHead,
  WelcomeContentText1,
  WelcomeContentText2,
  WelcomeImg,
  WelcomeTextGroup,
} from "./LandingStyled/StyledWelcome";

import fox from "../../../assets/img/KITSU_MAIN_SCREEN.svg";
import Blur from "../../../assets/BLUR.png";

const WelcomePanel = () => {
  return (
    <Welcome>
      <Container>
        <WelcomeTextGroup>
          <WelcomeContentHead>Welcome to Kitsumon</WelcomeContentHead>
          <WelcomeContentText1>
            Welcome to the world of Kitsumon, an online multiplayer digital
            world where Kitsu and trainers interact together, create bonds and
            work towards the benefit of all.
          </WelcomeContentText1>
          <WelcomeContentText2>
            The Kitsumon world has an array of things to do to keep players
            engaged and entertained as they interact with their own Kitsumon
          </WelcomeContentText2>
        </WelcomeTextGroup>
        <ImgDiv>
          <BlurImg src={Blur}></BlurImg>
          <WelcomeImg data={fox} />
        </ImgDiv>
      </Container>
    </Welcome>
  );
};

export default WelcomePanel;
