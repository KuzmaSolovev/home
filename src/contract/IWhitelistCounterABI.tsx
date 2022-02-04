export const IWhitelistCounterABI = [
  {
    inputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "uint256", name: "amt", type: "uint256" },
    ],
    name: "decrease",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "addr", type: "address" }],
    name: "getCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "needle", type: "address" }],
    name: "isWhiteListed",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "isWhiteListedAmt",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "addr", type: "address" },
      { internalType: "uint256", name: "count", type: "uint256" },
    ],
    name: "setWhitelistCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address[]", name: "addresses", type: "address[]" },
    ],
    name: "whitelistAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
