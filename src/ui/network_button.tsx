"use client";

import { useNetworkStore } from "@/global/networkStore";
import Image from "next/image";
import Coins from "../../public/coins.png";
import Polygon from "../../public/polygon.png";
import Arbitrum from "../../public/cryptocurrency.png";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";

const NetworkButton: React.FC = () => {
  const { isNetwork } = useNetworkStore.getState();
  const [isOpen, setIsOpen] = useState(false);
  const [isName, setIsName] = useState<string>("Sepolia");
  const [imageSrc, setImageSrc] = useState(Coins);

  useEffect(() => {
    changeName();
  }, [isNetwork]);

  const changeName = () => {
    switch (isNetwork) {
      case "Ethereum Mainnet":
        setIsName("Ethereum Mainnet");
        setImageSrc(Coins);
        break;
      case "Sepolia":
        setIsName("Sepolia");
        setImageSrc(Coins);
        break;
      case "Holesky":
        setIsName("Holešky");
        setImageSrc(Coins);
        break;
      case "Polygon Mainnet":
        setIsName("Polygon Mainnet");
        setImageSrc(Polygon);
        break;
      case "Amoy":
        setIsName("Amoy");
        setImageSrc(Polygon);
        break;
      case "Arbitrum Mainnet":
        setIsName("Arbitrum Mainnet");
        setImageSrc(Arbitrum);
        break;
      case "Arbitrum Sepolia":
        setIsName("Arbitrum Sepolia");
        setImageSrc(Arbitrum);
        break;
      default:
        setIsName("Sepolia");
        setImageSrc(Coins);
        break;
    }
  };

  const handleChevron = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center hover:bg-hoverNavbar rounded-md p-1 transition ease-in-out duration-300">
      <button onClick={handleChevron}>
        <div className="flex items-center gap-1">
          <Image src={imageSrc} alt="Ethereum" width={24} height={30} />
          {isName}
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>
    </div>
  );
};

export default NetworkButton;
