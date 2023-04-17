import Web3 from "web3";

const NODE_URL = process.env.NODE_URL;
const web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));

module.exports = {
  web3,
};
