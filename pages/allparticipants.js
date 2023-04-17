import { useEffect, useState } from "react";
import { getAllParticipants } from "../utils/nftcontract.js";
import Head from "next/head.js";
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
function AllParticipants() {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const [participantDetails, setPaticipantDetails] = useState("IS_FETCHING");

  useEffect(() => {
    async function fecthdata() {
      setPaticipantDetails(await getAllParticipants());
    }
    if (!isConnected) {
      router.replace("/");
    } else {
      fecthdata();
    }
  }, []);

  return (
    <>
      <Head>
        <title>All participants</title>
        <meta
          name="description"
          content="All users who attended the training"
        />
      </Head>
      {participantDetails == "IS_FETCHING" ? (
        <>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(" Please wait fetching details.....!")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(2500)
                .start();
            }}
          />
        </>
      ) : (
        <>
          <h2>
            <u>Details of all the participants</u>
          </h2>
          <table
            className="table table-bordered"
            style={{
              tableLayout: "fixed",
              width: "100%",
              wordBreak: "break-all",
            }}
          >
            <thead>
              <tr>
                <th scope="col">Wallet Address</th>
                <th scope="col">NFT Token ID</th>
                <th scope="col">STK Rewards Earned</th>
                <th scope="col">NFT Token URI</th>
              </tr>
            </thead>
            <tbody>
              {participantDetails?.map((e) => {
                return (
                  <tr>
                    <td>{e.participant}</td>
                    <td>{e.nft_id}</td>
                    <td>{e.stk_balance}</td>
                    <td>
                      <a href={e.uri} target="_blank">
                        {e.uri}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </>
  );
}

export default AllParticipants;
