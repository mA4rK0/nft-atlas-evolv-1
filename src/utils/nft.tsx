import { Alchemy, Network } from "alchemy-sdk";
import { useNetworkStore } from "@/global/networkStore";

type Nft = {
  name: string;
  image: {
    originalUrl: string;
  };
  originalUrl: string;
  tokenId: string;
  tokenUri: string;
  description: string;
  tokenType: string;
  contract: {
    address: string;
  };
  address: string;
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
    const ownedNfts = nfts.ownedNfts;

    const nftList: Nft[] = ownedNfts.map((ownedNft) => ({
      name: ownedNft.name || "Unnamed NFT",
      image: {
        originalUrl: ownedNft.image?.originalUrl || "",
      },
      originalUrl: ownedNft.tokenUri || "",
      tokenId: ownedNft.tokenId,
      tokenUri: ownedNft.tokenUri || "",
      description: ownedNft.description || "",
      tokenType: ownedNft.contract.tokenType || "ERC721",
      contract: {
        address: ownedNft.contract.address,
      },
      address: address,
    }));
    return nftList;
  } catch (error) {
    console.error("Error fetching NFTs:", error);
    return [];
  }
};
