"use client";

import { useState, useEffect } from "react";
import { useNftStore } from "@/global/nftStore";
import { useParams } from "next/navigation";

type Nft = {
  name: string;
  image: {
    originalUrl: string;
  };
};

export default function Page() {
  const { slug } = useParams();
  const [theNft, setTheNft] = useState<Nft | null>(null);

  useEffect(() => {
    try {
      const { isNft } = useNftStore.getState();
      const theNft = isNft.find((nft: any) => nft.name === slug);
      console.log(theNft);
      setTheNft(theNft);
    } catch (error) {
      console.log(error);
    }
  }, [slug]);

  return (
    <div className="flex justify-center items-center h-full">
      {theNft && (
        <div className="relative w-[22rem] h-[22rem] border rounded-xl overflow-hidden max-w-full">
          <img src={theNft.image.originalUrl} alt={theNft.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy" />
          <p className="absolute bottom-4 left-4 z-10 text-md font-semibold">{theNft.name}</p>
        </div>
      )}
    </div>
  );
}
