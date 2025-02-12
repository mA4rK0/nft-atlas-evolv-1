"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Ether from "../../public/coins.png";
import { useState } from "react";
import { connectWallet } from "@/utils/web3";
import { WalletConnection } from "@/types/types";
import { fetchNFTs } from "@/utils/nft";
import HeaderNavbar from "@/ui/header_navbar";

const Home: React.FC = (): any => {
  const [account, setAccount] = useState<string | null>(null);
  const [nfts, setNfts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleConnectWallet = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const wallet: WalletConnection | null = await connectWallet();
      if (wallet) {
        let first = wallet.address.slice(0, 6);
        let last = wallet.address.slice(-4);
        let disAddress = `${first}...${last}`;
        setAccount(disAddress);
        const nftData = await fetchNFTs(wallet.address);
        console.log("Fetched NFTs:", nftData);
        setNfts(nftData);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwiperPosition = (): number | undefined => {
    if (nfts.length !== 0) {
      if (nfts.length === 1) {
        return 1;
      } else if (nfts.length === 2) {
        return 2;
      } else if ((nfts.length === 3 || nfts.length === 4) && window.innerWidth >= 640 && window.innerWidth < 1024) {
        return 2;
      } else if (nfts.length === 3) {
        return 3;
      } else {
        return 4;
      }
    }
  };

  const changeAccount = (): any => {
    setAccount(null);
  };

  return (
    <>
      <div>
        <HeaderNavbar />
        <main className="text-white">
          <div className="my-10 text-center font-medium text-5xl">
            <h1>
              NFT<span className="text-sky-500">A</span>t<span className="text-green-500">l</span>
              <span className="text-blue-500">a</span>
              <span className="text-yellow-300">s</span>
            </h1>
          </div>
          {!account ? (
            <div className="text-center mt-28">
              <button className="connect border border-white rounded-3xl p-2 transition duration-300 ease-in-out hover:shadow-md hover:shadow-blue-600 active:bg-blue-700" onClick={handleConnectWallet}>
                Connect Wallet
              </button>
            </div>
          ) : (
            <div>
              <p className="flex flex-wrap justify-center text-center text-lg">
                <span className="font-semibold">Address</span> :{" "}
                <span className="flex items-center mx-1">
                  <Image src={Ether} alt="Ether" width={24} height={14} />
                </span>
                {account}
              </p>
              <h2 className="text-center text-md my-2">Your NFTs :</h2>
              {isLoading && (
                <div className="flex justify-center mt-10">
                  <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                  </div>
                </div>
              )}
              {!isLoading && nfts.length === 0 && (
                <>
                  <p className="text-center font-bold text-red-600">No NFTs found</p>
                  <p className="text-center font-bold text-red-600">Please change your wallet's address or change the network</p>
                </>
              )}
              {!isLoading && nfts.length !== 0 && (
                <div>
                  <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={4}
                    pagination={{ clickable: true }}
                    breakpoints={{
                      320: { slidesPerView: 1 },
                      640: { slidesPerView: handleSwiperPosition() },
                      1024: { slidesPerView: handleSwiperPosition() },
                    }}
                  >
                    {nfts.map((nft, index) => (
                      <SwiperSlide key={index}>
                        <div className="flex justify-center items-center h-full">
                          <div key={index} className="relative w-[22rem] h-[22rem] border rounded-xl overflow-hidden max-w-full">
                            <img src={nft.image.originalUrl} alt={nft.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                            <p className="absolute bottom-4 left-4 z-10 text-md font-semibold">{nft.name}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
              <div className="text-center my-10">
                <button className="border border-red-600 rounded-3xl p-2 transition duration-300 ease-in-out hover:bg-red-600 active:bg-red-700" onClick={changeAccount}>
                  Change Address
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
