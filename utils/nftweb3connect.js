import Web3 from "web3";

const NFT_NODE_URL = process.env.NFT_NODE_URL;
console.log(NFT_NODE_URL);
const web3 = new Web3(new Web3.providers.HttpProvider(NFT_NODE_URL));

module.exports = {
  web3,
};
