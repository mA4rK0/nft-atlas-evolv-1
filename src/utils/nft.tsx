import { Alchemy, Network } from "alchemy-sdk";
import { useNetworkStore } from "@/global/networkStore";

type Nft = {
  name: string;
  image: {
    originalUrl: string;
  };
  tokenId: string;
  tokenUri: string;
  description: string;
};

const getAlchemyNetwork = (networkName: string | null): Network => {
  switch (networkName) {
    case "Ethereum Mainnet":
      return Network.ETH_MAINNET;
    case "Sepolia":
      return Network.ETH_SEPOLIA;
    case "Holesky":
      return Network.ETH_HOLESKY;
    case "Polygon Mainnet":
      return Network.MATIC_MAINNET;
    case "Amoy":
      return Network.MATIC_AMOY;
    case "Arbitrum Mainnet":
      return Network.ARB_MAINNET;
    case "Arbitrum Sepolia":
      return Network.ARB_SEPOLIA;
    default:
      return Network.ETH_SEPOLIA;
  }
};

export const fetchNFTs = async (address: string): Promise<Nft[]> => {
  const { isNetwork } = useNetworkStore.getState();
  const alchemyNetwork = getAlchemyNetwork(isNetwork);

  const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: alchemyNetwork,
  };
  const alchemy = new Alchemy(config);

  try {
    const nfts = await alchemy.nft.getNftsForOwner(address);
    console.log(nfts);
    const nftList = nfts["ownedNfts"];
    return nftList as Nft[];
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return [];
  }
};
