"use client";

import Image from "next/image";
import Coins from "../../public/coins.png";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

const NetworkButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChevron = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center border border-white rounded-3xl p-1">
      <button onClick={handleChevron}>
        <div className="flex items-center gap-1">
          <Image src={Coins} alt="Ethereum" width={24} height={30} />
          Sepolia
          {isOpen ? <ChevronDown /> : <ChevronUp />}
        </div>
      </button>
    </div>
  );
};

export default NetworkButton;
