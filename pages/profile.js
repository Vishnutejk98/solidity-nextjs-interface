import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import NftDetails from "@/components/nftdetails.js";
import { getSTKBalance } from "../utils/stkcontract.js";
import { useAccount, useDisconnect, address } from "wagmi";
import Typewriter from "typewriter-effect";

import {
  getNFTMetadata,
  getNFTTokenIDForWalletAddress,
} from "../utils/nftcontract.js";
import Image from "next/image.js";
import { useRouter } from "next/router";

function ProfilePgae() {
  const { isConnected, address } = useAccount();
  const [minterNumMinted, setMinterNumMinted] = useState();
  const [NFTTokenIdDetails, setNFTTokenIdDetails] = useState();
  const [balance, setBalance] = useState();

  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      let NFTTokenIdDetails = "NFT_NOT_FOUND";
      const { currentTotalSupply, minterNumMinted, maxSupply } =
        await getNFTTokenIDForWalletAddress(address);
      console.log(minterNumMinted);
      setMinterNumMinted(minterNumMinted);
      setBalance(await getSTKBalance(address));
      if (minterNumMinted != "NFT_NOT_FOUND") {
        setNFTTokenIdDetails(await getNFTMetadata(minterNumMinted));
      }
    }
    console.log(isConnected);
    console.log("wellll");
    if (!isConnected) {
      router.replace("/");
    } else {
      fetchData();
    }
  }, [isConnected, address]);

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta
          name="description"
          content="Profile page - Where you find the complete details of the wallet"
        />
      </Head>
      <div className="row">
        {minterNumMinted == "NFT_NOT_FOUND" ? (
          <div className="col-sm-12 mb-2">
            <div className="card">
              <div className="card-body">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Sorry we could not find an NFT!")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="col-sm-12 mb-2">
            <div className="col-sm-12">
              <div className="card border-light mb-3">
                <div className="card-header">NFT</div>
                <div className="card-body">
                  <h5 className="card-title">Your NFT Details</h5>
                  <p className="card-text">
                    <NftDetails details={NFTTokenIdDetails} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="col-sm-12">
          <div className="card border-light mb-3">
            <div className="card-header">STK</div>
            <div className="card-body">
              <h5 className="card-title">Smart Token Details</h5>
              <p className="card-text">{`Balance : ${balance} STK`}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePgae;
