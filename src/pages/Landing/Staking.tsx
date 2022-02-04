import Snowfall from "react-snowfall";
import MobaPanel from "../../components/custome/Landing/MobaPanel";
import Redeem from "../../components/Redeem/Redeem";
import Stake from "../../components/Stake/Stake";
import Footer from "../../layouts/Footer";
import Menubar from "../../layouts/Menubar";
import Navbar from "../../layouts/Navbar";
import { AllContent, PageContent } from "./StyledLanding";

const Staking = () => {
  return (
    <PageContent>
      <Menubar />
      <AllContent>
          <Stake></Stake>
      </AllContent>
      <Footer />
    </PageContent>
  );
};

export default Staking;