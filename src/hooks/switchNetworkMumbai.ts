
import { useEthContext } from "../context/EthereumContext";

export const switchNetworkMumbai = async (provider:any) => {
    try {
        await provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x89" }],
        });
    } catch (error: any) {
        if (error.code === 4902) {
            try {
                await provider.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x89",
                            chainName: "Polygon",
                            rpcUrls: ["https://polygon-rpc.com"],
                            nativeCurrency: {
                                name: "POLY",
                                symbol: "POLY",
                                decimals: 18,
                            },
                            blockExplorerUrls: ["https://polygonscan.com/"],
                        },
                    ],
                });
            } catch (error: any) {
                alert(error.message);
            }
        }
    }
}