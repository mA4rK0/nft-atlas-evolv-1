import { create } from "zustand";

interface NFTState {
  isNft: any | null;
  setIsNft: (nft: any) => void;
}

export const useNftStore = create<NFTState>((set) => ({
  isNft: null,
  setIsNft: (nft) => set({ isNft: nft ?? null }),
}));
