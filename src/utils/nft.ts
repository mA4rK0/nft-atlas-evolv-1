import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

export const fetchNFTs = async (address: string): Promise<any> => {
  try {
    const nfts = await alchemy.nft.getNftsForOwner(address);
    console.log(nfts);
    const nftList = nfts["ownedNfts"];
    return nftList;
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return [];
  }
};
