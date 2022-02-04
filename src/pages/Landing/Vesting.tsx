import Snowfall from "react-snowfall";
import MobaPanel from "../../components/custome/Landing/MobaPanel";
import Redeem from "../../components/Redeem/Redeem";
import Footer from "../../layouts/Footer";
import Menubar from "../../layouts/Menubar";
import Navbar from "../../layouts/Navbar";
import { AllContent, PageContent } from "./StyledLanding";

const Vesting = () => {
  return (
    <PageContent>
      <Menubar />
      <AllContent>
          <Redeem></Redeem>
      </AllContent>
      <Footer /> 
    </PageContent>
  );
};

export default Vesting;