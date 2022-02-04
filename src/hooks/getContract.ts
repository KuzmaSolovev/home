import Web3 from "web3";

export const getContract = function(web3: Web3 | null | undefined, abi: any, address: string) {
  if(!web3) {
    return;
  }
  const web3_provider: any = web3;
  const contract = new web3_provider.eth.Contract(
    abi,
    address
  );
  return contract;
}