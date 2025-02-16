import { create } from "zustand";

interface NetworkState {
  isNetwork: string | null;
  setIsNetwork: (network: string | void) => void;
}

export const useNetworkStore = create<NetworkState>((set) => ({
  isNetwork: null,
  setIsNetwork: (network) => set({ isNetwork: network ?? null }),
}));
