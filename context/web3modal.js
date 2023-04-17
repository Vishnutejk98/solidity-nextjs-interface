import { createContext, useContext, useState } from "react";

export const Web3ModalContext = createContext(null);

export const Web3ModalProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  return (
    <Web3ModalContext.Provider value={{ session, setSession }}>
      {children}
    </Web3ModalContext.Provider>
  );
};

// export const useWeb3Modal = () => useContext(Web3ModalProvider);
