// Contract Addresses
// Replace these with your actual deployed contract addresses

export const CONTRACT_ADDRESSES = {
  // Ethereum Mainnet
  1: "0x0000000000000000000000000000000000000000", // Replace with your Mainnet contract address

  // Base
  8453: "0x0000000000000000000000000000000000000000", // Replace with your Base contract address
};

// Helper to get contract address for current chain
export const getContractAddress = (chainId) => {
  return (CONTRACT_ADDRESSES[chainId] || 
         CONTRACT_ADDRESSES[8453]);
};
