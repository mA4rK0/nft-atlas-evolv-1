import { create } from "zustand";

type Nft = {
  name: string;
  image: {
    originalUrl: string;
  };
  tokenId: string;
  tokenUri: string;
  description: string;
  tokenType: string;
  contract: {
    address: string;
  };
};

interface NFTState {
  isNft: Nft[];
  setIsNft: (nft: Nft[]) => void;
}

export const useNftStore = create<NFTState>((set) => ({
  isNft: [],
  setIsNft: (nft: Nft[]) => set({ isNft: nft }),
}));
