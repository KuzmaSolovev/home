import JoinPanel from "../../components/custome/Landing/JoinPanel";
import KMCTokenPanel from "../../components/custome/Landing/KMCTokenPanel";
import MetaVersePanel from "../../components/custome/Landing/MetaVersePanel";
import MobaPanel from "../../components/custome/Landing/MobaPanel";
import NFTMarketPanel from "../../components/custome/Landing/NFTMarketPanel";
import SocialsPanel from "../../components/custome/Landing/SocialsPanel";
import StrategicPanel from "../../components/custome/Landing/StrategicPanel";
import WelcomePanel from "../../components/custome/Landing/WelcomePanel";
import Footer from "../../layouts/Footer";
import Menubar from "../../layouts/Menubar";
import { PageContent, AllContent } from "./StyledLanding";
import Snowfall from "react-snowfall";

const Landing = () => {
  return (
    <PageContent> 
      <Menubar />
      <AllContent>
        <MetaVersePanel />
        <WelcomePanel />
        <NFTMarketPanel />
        <KMCTokenPanel />
        <MobaPanel />
        <StrategicPanel />
        <JoinPanel />
        <SocialsPanel />
      </AllContent>
      <Footer /> 
    </PageContent>
  );
};

export default Landing;
