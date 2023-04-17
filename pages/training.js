import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useAccount, useDisconnect, address } from "wagmi";
import { Router, useRouter } from "next/router";

function Training() {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    console.log(isConnected);
    console.log("wellll");
    if (!isConnected) {
      router.replace("/");
    }
  }, [isConnected]);

  return (
    <>
      <Head>
        <title>Training</title>
        <meta
          name="Training"
          content="Training page - Where you find the training details"
        />
      </Head>

      <div className="card mb-3">
        <Image
          src="https://cryptoadventure.com/wp-content/uploads/2021/10/Understanding-Ethereums-Solidity-Programming-Language.svg"
          className="card-img-top"
          width="100"
          height="100"
          style={{ height: "100%", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">Solidity</h5>
          <p className="card-text">
            Solidity is an object-oriented, high-level language for implementing
            smart contracts. Smart contracts are programs which govern the
            behaviour of accounts within the Ethereum state. Please check the
            link below for details
          </p>
          <p className="card-text">
            Link :
            <small className="text-muted">
              <a href="https://docs.soliditylang.org/en/v0.8.19/">
                https://docs.soliditylang.org/en/v0.8.19/
              </a>
            </small>
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <Image
          src="https://cryptoadventure.com/wp-content/uploads/2023/04/A-Guide-to-the-Impact-of-US-Feds-Interest-Rates-on-Crypto.svg"
          className="card-img-top"
          width={100}
          height={100}
          sizes="100vw"
          style={{ height: "100%", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">ERC-20 Token contract/Custom Tokens</h5>
          <p className="card-text">
            An ERC20 token contract keeps track of fungible tokens: any one
            token is exactly equal to any other token; no tokens have special
            rights or behavior associated with them. This makes ERC20 tokens
            useful for things like a medium of exchange currency, voting rights,
            staking, and more.
          </p>
          <p className="card-text">
            Link :
            <small className="text-muted">
              <a href="https://docs.openzeppelin.com/contracts/4.x/erc20">
                https://docs.openzeppelin.com/contracts/4.x/erc20
              </a>
            </small>
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <Image
          src="https://cryptoadventure.com/wp-content/uploads/2023/04/Yesports-Unlocks-Next-Level-Gaming-with-YESP-Token.svg"
          className="card-img-top"
          width={100}
          height={100}
          sizes="100vw"
          style={{ height: "100%", width: "100%" }}
        />
        <div className="card-body">
          <h5 className="card-title">ERC-721/NFT Contract</h5>
          <p className="card-text">
            An NFT contract, or non-fungible token contract, is a type of smart
            contract that is used to create, manage, and trade non-fungible
            tokens (NFTs) on a blockchain network, such as Ethereum. NFTs are
            unique digital assets that represent ownership or proof of
            authenticity of a particular digital asset, such as a piece of
            artwork, music, or video.
          </p>
          <p className="card-text">
            Link :
            <small className="text-muted">
              <a href="https://docs.openzeppelin.com/contracts/2.x/api/token/erc721">
                https://docs.openzeppelin.com/contracts/2.x/api/token/erc721
              </a>
            </small>
          </p>
        </div>
      </div>
    </>
  );
}

export default Training;
