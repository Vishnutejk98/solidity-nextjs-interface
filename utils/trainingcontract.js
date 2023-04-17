import { web3 } from "./web3connect";
import { TRAINING_TRACKER_CONTRACT_ABI } from "@/contractdetails/trainingtrackercontractabi";
import { Moul } from "next/font/google";

const TRAINING_TRACKER_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_TRAINING_TRACKER_CONTRACT_ADDRESS;
const contract = new web3.eth.Contract(
  TRAINING_TRACKER_CONTRACT_ABI,
  TRAINING_TRACKER_CONTRACT_ADDRESS
);

async function getRewardsCount(address) {
  const count = await contract.methods.userTotalAwards(address).call();
  console.log(count);
  return count;
}

async function getAllRewards(address, count) {
  console.log("hello-reward");
  console.log(address);
  console.log(count);
  var response = [];
  for (var i = 0; i < count; i++) {
    const { activity, amount, time } = await contract.methods
      .participantAwards(address, i)
      .call();
    var utcSeconds = time;
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    console.log(activity);
    response.push({
      activity: activity,
      amount: web3.utils.fromWei(amount, "ether"),
      time: d.toDateString() + " (" + d.toLocaleTimeString() + ")",
    });
  }
  console.log(response);
  return response;
}

module.exports = {
  getAllRewards,
  getRewardsCount,
};
