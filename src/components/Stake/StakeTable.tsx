import {
  Table,
  TableContainer,
  Card,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Button,
  TablePagination,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { StakeData } from "./Stake";
import Platinum from "../../assets/big-platinum.png";
import Gold from "../../assets/big-gold.png";
import Silver from "../../assets/big-silver.png";
import BronzeImg from "../../assets/big-bronze.png";
import { useEthContext } from "../../context/EthereumContext";
import { StakeABI } from "../../contract/StakeABI";
import { BigNumberish, ethers } from "ethers";
import { toast } from "react-toastify";
import { SpinnerCircular } from "spinners-react";

interface Stake {
  id: BigNumberish;
  amount: BigNumberish;
  endTime: BigNumberish;
  name?: string;
  rewardAmount?: string;
  contractAddress?: string;
}

const data = [
  {
    name: "Platinum Round 1",
    contractAddress: "0xd761aD604f9f343369fFfcA5a28d12a0Fb700fD5",
  },
  {
    name: "Gold Round 1",
    contractAddress: "0x7e7AE09d3F5b4fE59Aa94677148597FBbC5BB89c",
  },
  {
    name: "Silver Round 1",
    contractAddress: "0x11FC94DE1c9335C47285dCbdb0a063588aC4F485",
  },
  {
    name: "Bronze Round 1",
    contractAddress: "0x3f08308464387be8a8A163d15954c6525961744C",
  },
  {
    name: "Diamond Tier",
    contractAddress: "0x2EF63189Be7f37D82369F6815D7A55eCBd395D7d",
  },
];
export default function StakeTable(props: any) {
  const { web3, provider, chainId, currentAcc } = useEthContext();
  const emptyStakeArray: Stake[] = [];
  const [stakes, setStakes] = useState(emptyStakeArray);
  const [loading, setLoading] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function getDateStr(dtSeconds: number) {
    const dt = new Date(dtSeconds * 1000);
    return dt.toUTCString();
  }

  async function loadData() {
    if (chainId !== 137 && chainId !== 80001) {
      return <></>;
    }
    setLoading(true);
    try {
      const stakes = [];
      for (const contractData of data) {
        const contractAddr = contractData.contractAddress;
        const web3_provider: any = web3;
        const stakingContract = new web3_provider.eth.Contract(
          StakeABI,
          contractAddr
        );
        const stakeCount = await stakingContract.methods
          .getStakeCount(currentAcc)
          .call();
        for (let i = 0; i < stakeCount; i++) {
          const stakingData = (await stakingContract.methods
            .getStake(currentAcc, i.toString())
            .call()) as Stake;
          const rewardAmount = await stakingContract.methods
            .getReward(stakingData.amount)
            .call();
          stakes.push({
            name: contractData.name,
            amount: ethers.utils.formatEther(stakingData.amount),
            id: stakingData.id,
            endTime: stakingData.endTime,
            rewardAmount: ethers.utils.formatEther(rewardAmount),
            contractAddress: contractAddr,
          });
        }
      }
      setStakes(stakes);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (web3 && currentAcc) {
      loadData();
    }
  }, [currentAcc, web3, chainId]);
  if (!web3 || !currentAcc) {
    return null;
  }

  async function redeem(row: Stake) {
    try {
      const web3_provider: any = web3;
      const stakingContract = new web3_provider.eth.Contract(
        StakeABI,
        row.contractAddress
      );
      await stakingContract.methods.redeem(row.id).call();
    } catch (e: any) {
      console.log(e);
      toast("Transaction error", {
        type: "error",
        position: "top-right",
      });
    }
  }

  function isRedemptionDisabled(row: Stake): boolean {
    return Number(row.endTime.toString()) * 1000 > Date.now();
  }

  const getTableOrSpinner = () => {
    if (chainId !== 137 && chainId !== 80001) {
      return <></>;
    }
    if (loading) {
      return <SpinnerCircular style={{ width: "40px", marginRight: "1rem" }} />;
    }
    return (
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Pool Name</TableCell>
            <TableCell align="right">Stake Amount (KMC)</TableCell>
            <TableCell align="right">Total Reward (KMC)</TableCell>
            <TableCell align="right">End Time</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stakes
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={`${row.name}${row.id.toString()}`}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.rewardAmount}</TableCell>
                <TableCell align="right">
                  {getDateStr(Number(row.endTime.toString()))}
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    onClick={() => redeem(row)}
                    size="small"
                    disabled={isRedemptionDisabled(row)}
                  >
                    Redeem
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  };

  return (
    <>
      <TableContainer
        style={{ width: "100%", textAlign: "center" }}
        component={Paper}
      >
        {getTableOrSpinner()}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={stakes.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      ></TablePagination>
    </>
  );
}
