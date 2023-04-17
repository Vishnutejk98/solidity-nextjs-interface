import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { useAccount, useDisconnect, address } from "wagmi";

function Home() {
  const { isConnected } = useAccount();
  const router = useRouter();
  useEffect(() => {
    if (!isConnected) {
      router.replace("/");
    }
  }, [isConnected]);
  return (
    <>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Home page - Where you find the general details"
        />
      </Head>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hi am a small Interface!</h1>
          <h1 className="display-5">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "Simplifying Smart Contract Navigation for Users.!"
                  )
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .start();
              }}
            />
          </h1>
          <p className="lead">
            Smart contracts can be complex and difficult to navigate,
            particularly for non-technical users. With the Smart Token Tracker
            application, users can easily view and understand the details of
            smart token contracts, as well as track their own activity within
            these contracts. This interface simplifies the process of managing
            smart tokens, making it accessible for everyone. Whether you are an
            experienced user or a beginner, the Smart Token Tracker can help you
            stay on top of your smart contract activity.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <h5 className="card-title">Training Page</h5>
                </div>
                <div className="p-2">
                  <p className="card-text">
                    You can find all the details of the training conducted here.
                  </p>
                </div>
                <div className="p-2">
                  <Link href="/training" className="btn btn-primary">
                    Take me - To My Training Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <h5 className="card-title">Activity Page</h5>
                </div>
                <div className="p-2">
                  <p className="card-text">
                    You can find all the details of rewards you earned
                    throughout the training program.
                  </p>
                </div>
                <div className="p-2">
                  <Link href="/activity" className="btn btn-primary">
                    Take me - To My Activity Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card h-100">
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="p-2">
                  <h5 className="card-title">Profile Page</h5>
                </div>
                <div className="p-2">
                  <p className="card-text">
                    The profile page is your go-to place to see your NFT and
                    know the balance of the Smart Token.
                  </p>
                </div>
                <div className="p-2">
                  <Link href="/profile" className="btn btn-primary">
                    Take me - To My Profile Page
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
