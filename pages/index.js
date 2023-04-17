import Typewriter from "typewriter-effect";
import Head from "next/head";
import { useAccount, useDisconnect, address } from "wagmi";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";
function index() {
  const { isConnected } = useAccount();
  const router = useRouter();

  useEffect(() => {
    console.log(isConnected);
    console.log("wellll");
    if (isConnected) {
      router.replace("/home");
    }
  }, [isConnected]);

  return (
    <>
      <Head>
        <title>Welcome to Site</title>
        <meta
          name="description"
          content="Index page - Where you find the intro details"
        />
      </Head>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="custom">
            <div className="col-sm-12 text-center">
              <h1 className="display-5">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Smart Token Analystics - At one place!")
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </h1>
            </div>
            <p className="lead">
              Welcome to the interface for the Smart Token Contract application!
              This platform allows you to interact with our innovative smart
              contract, which enables the creation and management of smart
              tokens. With this powerful tool, you can easily create your own
              custom tokens, set their parameters and distribute them to your
              community. Our smart contract is built on cutting-edge blockchain
              technology, ensuring the highest level of security and
              transparency for your transactions. Whether you're an entrepreneur
              looking to launch your own cryptocurrency or a developer
              interested in exploring the world of smart contracts, our Smart
              Token Contract application is the perfect solution for you.
            </p>
            <br />
            <h1 className="display-4 text-center">
              Please connect your wallet to continue!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
export default index;
