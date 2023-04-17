import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import { getRewardsCount, getAllRewards } from "../utils/trainingcontract.js";
import Head from "next/head.js";
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/router";

function Activity() {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const [rewardCount, setRewardCount] = useState("");
  const [rewardDetails, setRewardDetails] = useState();

  useEffect(() => {
    async function fetchData() {
      setRewardCount(await getRewardsCount(address));
      setRewardDetails(await getAllRewards(address, rewardCount));
    }
    if (!isConnected) {
      router.replace("/");
    } else {
      fetchData();
    }
  }, [isConnected, address]);

  return (
    <>
      <Head>
        <title>Activity & Rewards</title>
        <meta
          name="description"
          content="Home page - Where you find the activity details"
        />
      </Head>
      {rewardCount == 0 ? (
        <h1>We didn't find any rewards! Learn more to earn more </h1>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Activity</th>
              <th scope="col">Amount</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            {rewardDetails.map((e) => {
              return (
                <tr>
                  <td>{e.activity}</td>
                  <td>{e.amount}</td>
                  <td>{e.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <div className="card">
        <div className="card-body">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "Unlock a world of knowledge and discover new opportunities by continuing to learn. The more you know, the more you can grow. Keep exploring, keep striving, and the rewards will follow."
                )
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .start();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Activity;
