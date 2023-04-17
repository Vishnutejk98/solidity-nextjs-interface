import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

import NextNProgress from "nextjs-progressbar";
import { createContext, useContext, useState, useEffect } from "react";
import { Web3ModalProvider } from "../context/web3modal.js";

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrum,
  avalanche,
  bsc,
  fantom,
  gnosis,
  mainnet,
  optimism,
  polygon,
} from "wagmi/chains";

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
const chains = [
  mainnet,
  polygon,
  avalanche,
  arbitrum,
  bsc,
  optimism,
  gnosis,
  fantom,
];

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ version: 1, chains, projectId }),
  provider,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

export default function App({ Component, pageProps }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <Web3ModalProvider>
          <WagmiConfig client={wagmiClient}>
            <Head>
              <link rel="shortcut icon" href="/logo.svg" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
            </Head>
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
              crossorigin="anonymous"
            />
            <Script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
              crossOrigin="anonymous"
            />
            <Navbar />
            <NextNProgress />
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
            <ToastContainer />
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          </WagmiConfig>
        </Web3ModalProvider>
      ) : null}
    </>
  );
}
