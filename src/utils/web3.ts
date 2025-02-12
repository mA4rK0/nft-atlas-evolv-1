import { ethers } from "ethers";
import { WalletConnection } from "@/types/types";

declare global {
  interface Window {
    ethereum: any;
  }
}

export const connectWallet = async (): Promise<WalletConnection | null> => {
  if (window.ethereum) {
    try {
      // Ask users for permission to access their accounts
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      return { provider, signer, address };
    } catch (error) {
      console.error("Failed to connect to Metamask:", error);
      return null;
    }
  } else {
    alert("Please install Metamask to use this app.");
    return null;
  }
};
