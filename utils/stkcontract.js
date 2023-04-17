import { STK_CONTRACT_ABI } from "@/contractdetails/stkcontractabi";
import { web3 } from "./web3connect";

const STK_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_STK_CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(STK_CONTRACT_ABI, STK_CONTRACT_ADDRESS);

async function getSTKBalance(address) {
  const balance = await contract.methods.balanceOf(address).call();
  return web3.utils.fromWei(balance, "ether");
}

module.exports = {
  getSTKBalance,
};
