"use client";

import { useState, useEffect } from "react";
import { useNftStore } from "@/global/nftStore";
import { useParams } from "next/navigation";
import Link from "next/link";

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

export default function Page() {
  const { slug } = useParams();
  const [theNft, setTheNft] = useState<Nft | null>(null);
  const [address, isAddress] = useState<string>("");
  const [tokenType, setTokenType] = useState<string | null>("");

  useEffect(() => {
    try {
      const { isNft } = useNftStore.getState();
      const theNft = isNft.find((nft: Nft) => nft.name === slug);
      if (theNft) {
        setTheNft(theNft);
        const first = theNft.contract.address.slice(0, 6);
        const last = theNft.contract.address.slice(-4);
        const disAddress = `${first}...${last}`;
        isAddress(disAddress);
        const firstType = theNft.tokenType.slice(0, 3);
        const lastType = theNft.tokenType.slice(3);
        setTokenType(`${firstType}-${lastType}`);
      }
    } catch (error) {
      console.error("Error fetching NFT:", error);
    }
  }, [slug]);

  return (
    <div className="w-full min-h-screen flex flex-col gap-y-9 items-center justify-center bg-gray-900">
      {theNft && (
        <>
          <div className="flex flex-wrap w-full max-w-7xl text-white bg-hoverNavbar p-6 sm:p-8 rounded-lg shadow-lg">
            <div className="relative w-full sm:w-[22rem] h-[22rem] sm:h-[22rem] border bg-black rounded-xl overflow-hidden">
              <img src={theNft.image.originalUrl} alt={theNft.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-col w-full sm:w-[40rem] mt-6 sm:mt-0 sm:ml-8">
              <div>
                <p className="text-3xl sm:text-4xl font-medium text-white">{theNft.name}</p>
              </div>
              <div className="border-4 border-white rounded-lg p-4 sm:p-5 mt-4">
                <div className="flex justify-between items-center pb-1">
                  <p className="text-base sm:text-lg">Contract Address</p>
                  <p className="text-sm sm:text-base">{address}</p>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <p className="text-base sm:text-lg">Token ID</p>
                  <p className="text-sm sm:text-base">{theNft.tokenId}</p>
                </div>
                <div className="flex justify-between items-center pb-1">
                  <p className="text-base sm:text-lg">Token Standard</p>
                  <p className="text-sm sm:text-base">{tokenType}</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg pb-1">Description:</p>
                  <p className="text-sm sm:text-base">{theNft.description}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="text-center text-white mb-9">
        <Link href="/">
          <button className="border border-hoverNavbar rounded-3xl py-2 px-28 md:px-60 transition duration-300 ease-in-out hover:shadow-md hover:shadow-hoverNavbar hover:bg-hoverNavbar">Back</button>
        </Link>
      </div>
    </div>
  );
}
