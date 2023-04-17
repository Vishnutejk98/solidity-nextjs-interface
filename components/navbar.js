import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "./custombutton.js";
import { useAccount, useDisconnect } from "wagmi";
import { useEffect } from "react";

function Navbar() {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  return (
    <>
      <div className="container" style={{ maxWidth: "100%", padding: "0px" }}>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom p-2">
          <a
            href="/"
            className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
          >
            <Image
              src="/logo.svg"
              alt="Smart Track Logo"
              className="dark:invert"
              width={50}
              height={50}
              priority
            />
            Smart Token <br />
            Track
          </a>
          {isConnected ? (
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link
                  href="/home"
                  className={
                    router.pathname == "/home"
                      ? "nav-link px-2 link-secondary"
                      : "nav-link px-2 link-dark"
                  }
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className={
                    router.pathname == "/training"
                      ? "nav-link px-2 link-secondary"
                      : "nav-link px-2 link-dark"
                  }
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/activity"
                  className={
                    router.pathname == "/activity"
                      ? "nav-link px-2 link-secondary"
                      : "nav-link px-2 link-dark"
                  }
                >
                  Activity & Rewards
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className={
                    router.pathname == "/profile"
                      ? "nav-link px-2 link-secondary"
                      : "nav-link px-2 link-dark"
                  }
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/allparticipants"
                  className={
                    router.pathname == "/allparticipants"
                      ? "nav-link px-2 link-secondary"
                      : "nav-link px-2 link-dark"
                  }
                >
                  All Participants
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={
                    router.pathname == "/about"
                      ? "nav-link px-2 link-secondary"
                      : "nav-link px-2 link-dark"
                  }
                >
                  Developer's Note
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              <Web3Button icon="show" label="Connect Wallet" balance="hide" />
            </button>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
