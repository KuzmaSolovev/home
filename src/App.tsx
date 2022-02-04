import React, { Suspense, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from "./components/common/Loading";
import Navbar from "./layouts/Navbar";
import Redeem from "./components/Redeem/Redeem";
import Web3 from "web3";
import { EthereumContext } from "./context/EthereumContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Snowfall from "react-snowfall";

const Landing = React.lazy(() => import("./pages/Landing"));
const Vesting = React.lazy(() => import("./pages/Landing/Vesting"));
const Staking = React.lazy(() => import("./pages/Landing/Staking"));
const Connection = React.lazy(
  () => import("./components/Mystery/Connect/Connect")
);
const Buy = React.lazy(() => import("./components/Mystery/Buy/Buy"));
const Reveal = React.lazy(() => import("./components/Mystery/Reveal/Reveal"));
const Video = React.lazy(() => import("./components/Mystery/Video/Video"));

function App() {
  const [provider, setProvider] = useState<any>(null);
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [currentAcc, setCurrentAcc] = useState<string>("");
  const [chainId, setChainId] = useState<number>(0);

  useEffect(() => {
    const handleEthereum = () => {
      const { ethereum } = window as any;

      if (ethereum && ethereum.isMetaMask) {
        setProvider(ethereum);
        console.log(ethereum);

        ethereum.on("accountsChanged", (accs: string[]) => {
          setAccounts(accs);
          setCurrentAcc(accs[0]);
        });

        ethereum.on("chainChanged", (chainId: string) => {
          console.log("chain changed", chainId);
          setChainId(Number(chainId));
        });

        setWeb3(new Web3(ethereum));
        console.log(web3);
      }
    };

    if ((window as any).ethereum) {
      handleEthereum();
    } else {
      window.addEventListener("ethereum#initialized", handleEthereum, {
        once: true,
      });

      // If the event is not dispatched by the end of the timeout
      // the user probably doesn't have MetaMask installed
      setTimeout(handleEthereum, 3000);
    }
  }, []);

  useEffect(() => {
    const setCurrentlyConnectedAccount = async () => {
      const web3_data: any = web3;
      const chainId = await web3?.eth.getChainId();
      setChainId(chainId!);
      let accounts = await web3_data.eth.getAccounts();
      if (accounts && accounts.length > 0) {
        console.log(accounts[0]);
        setCurrentAcc(accounts[0]);
      }
    };

    if (web3) {
      setCurrentlyConnectedAccount();
    }
  }, [web3]);
  return (
    <Suspense fallback={<Loading />}>
      <EthereumContext.Provider
        value={{
          provider,
          accounts,
          web3,
          currentAcc,
          chainId,
        }}
      >
        <Router>
          <Navbar />
          <Route path="/" exact component={Landing} />
          <Route path="/vesting" exact component={Vesting} />
          <Route path="/staking" exact component={Staking} />
          <Route path="/connect" exact component={Connection} />
          <Route path="/buy" exact component={Buy} />
          <Route path="/Reveal" exact component={Reveal} />
          <Route path="/Video" exact component={Video} />
        </Router>
      </EthereumContext.Provider>{" "}
      <ToastContainer />
    </Suspense>
  );
}

export default App;
