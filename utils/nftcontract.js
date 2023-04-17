import { NFT_CONTRACT_ABI } from "../contractdetails/nftcontractabi";
import { web3 } from "./nftweb3connect.js";
import { getSTKBalance } from "./stkcontract.js";

const NFT_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(NFT_CONTRACT_ABI, NFT_CONTRACT_ADDRESS);

async function getNFTTokenIDForWalletAddress(address) {
  var currentTotalSupply = "";
  var minterNumMinted = "";
  var maxSupply = "";
  try {
    var { currentTotalSupply, minterNumMinted, maxSupply } =
      await contract.methods.getMintStats(address).call();
    if (minterNumMinted == 0) {
      minterNumMinted = "NFT_NOT_FOUND";
    }
  } catch {
    minterNumMinted = "NFT_NOT_FOUND";
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

async function getAllParticipants() {
  var tokenIds = [];
  var response = [];
  let value = await contract
    .getPastEvents("Transfer", {
      filter: {
        _from: "0x0000000000000000000000000000000000000000",
      },
      fromBlock: 0,
    })
    .then((events) => {
      for (let event of events) {
        console.log(event.returnValues.tokenId);
        tokenIds.push(event.returnValues.tokenId);
      }
    });
  console.log(tokenIds);
  if (tokenIds.length > 0) {
    for (var i = 0; i < tokenIds.length; i++) {
      var _owner = await contract.methods.ownerOf(tokenIds[i]).call();
      var uri = await contract.methods.tokenURI(tokenIds[i]).call();
      var _balance = await getSTKBalance(_owner);
      response.push({
        participant: _owner,
        nft_id: tokenIds[i],
        stk_balance: _balance,
        uri: uri,
      });
    }
  }
  console.log(response);
  return response;
}
module.exports = {
  getNFTMetadata,
  getNFTTokenIDForWalletAddress,
  getAllParticipants,
};
