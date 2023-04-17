import Web3 from "web3";

const NODE_URL = process.env.NODE_URL;
const web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/4aaeeb718e564127b5828bb4e92b5936"
  )
);

module.exports = {
  web3,
};
