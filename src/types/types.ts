import { ethers } from "ethers";

export interface WalletConnection {
  provider: ethers.BrowserProvider;
  signer: ethers.JsonRpcSigner;
  address: string;
}
