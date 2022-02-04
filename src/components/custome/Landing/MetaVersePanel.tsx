import {
  AppStoreBtn,
  BackImg,
  BtnGroup,
  GirlImg,
  GooglePlayBtn,
  GrassImg,
  ImgWarraper,
  KitsuneImg,
  MetaImg,
  MetaVerse,
  MobaMetaVerseBtn,
  MoonImg,
  NuclismoImg,
} from "./LandingStyled/StyledMetaVerse";

import mobaMetaVersa from "../../../assets/img/moba.svg";
import Meta from "../../../assets/img/META-GLOW.svg";
import Moon from "../../../assets/img/MOON.svg";
import Girl from "../../../assets/img/GIRL.svg";
import Kitsune from "../../../assets/img/KITSUNE.svg";
import Nuclismo from "../../../assets/img/NUCLISMO.svg";
import Grass from "../../../assets/img/GRASS.svg";
import appStore from "../../../assets/img/APPLESTORE.svg";
import googlePlay from "../../../assets/img/GOOGLEPLAY.svg";
import Background_hight from "../../../assets/img/BACKGROUND-NIGHT.svg";

const MetaVersePanel = () => {
  return (
    <MetaVerse>
      <ImgWarraper>
        <BackImg data={Background_hight}></BackImg>
        <MetaImg data={Meta}></MetaImg>
        <MoonImg data={Moon}></MoonImg>
        <GirlImg data={Girl}></GirlImg>
        <KitsuneImg data={Kitsune}></KitsuneImg>
        <NuclismoImg data={Nuclismo}></NuclismoImg>
        <GrassImg data={Grass}></GrassImg>
      </ImgWarraper>
      <BtnGroup>
        <MobaMetaVerseBtn data={mobaMetaVersa} />
        <AppStoreBtn data={appStore} />
        <GooglePlayBtn data={googlePlay} />
      </BtnGroup>
    </MetaVerse>
  );
};

export default MetaVersePanel;
