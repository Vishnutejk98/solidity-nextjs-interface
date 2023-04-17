import { NFT_CONTRACT_ABI } from "../contractdetails/nftcontractabi";
import { web3 } from "./nftweb3connect.js";
const NFT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS);

async function getNFTTokenIDForWalletAddress(address) {
  var currentTotalSupply = "";
  var minterNumMinted = "";
  var maxSupply = "";
  try {
    var { currentTotalSupply, minterNumMinted, maxSupply } =
      await contract.methods.getMintStats(address).call();
  } catch {
    currentTotalSupply = "NFT_NOT_FOUND";
  }

  return { currentTotalSupply, minterNumMinted, maxSupply };
}

async function getNFTMetadata(tokenId) {
  const result = await contract.methods.tokenURI(tokenId).call();

  const response = await fetch(result);
  const metadata = await response.json();
  console.log(metadata);
  return metadata;
}

module.exports = {
  getNFTMetadata,
  getNFTTokenIDForWalletAddress,
};
