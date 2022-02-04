import { Menu, ConnectWalletBtn, MenuBtn } from "./StyledMenubar";
import { TiThMenu } from "react-icons/ti";
import { openNav } from "./StyledNavbar";
import { useEthContext } from "../context/EthereumContext";
// import MailExt from "../components/MailExt";
const Menubar = () => {
  const { provider, currentAcc } = useEthContext();
  const handleConnectWallet = async () => {
    try {
    const response = await provider.request({ method: `eth_requestAccounts` });
    } catch(e) {
      console.log(e);
    }
  };
 
  return (
    <Menu>
      <MenuBtn onClick={openNav}>
        <TiThMenu />
      </MenuBtn>
      <ConnectWalletBtn
        onClick={() => {
          handleConnectWallet();
        }}
      >
        {/* <a
          href="https://forms.zohopublic.eu/digitaldnastudios361/form/ProductFeedback/formperma/Ji-4JPrC4RHwOBTQ1sDnVqU5urrRwarhidLsK5eqyFI"
          target="_blank"
        > */}
        {currentAcc && currentAcc
          ? `${currentAcc.slice(0, 5)}...${currentAcc.slice(-4)}`
          : "Connect Wallet"}

        {/* </a> */}
      </ConnectWalletBtn>
    </Menu>
  );
};

export default Menubar;
