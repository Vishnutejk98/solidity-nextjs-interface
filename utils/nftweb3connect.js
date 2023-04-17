import Web3 from "web3";

const NFT_NODE_URL = process.env.NFT_NODE_URL;
console.log(NFT_NODE_URL);
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/w0zL4yHDrVP5FMYVJvrjOtxBVGQMm72o"
  )
);

module.exports = {
  web3,
};
