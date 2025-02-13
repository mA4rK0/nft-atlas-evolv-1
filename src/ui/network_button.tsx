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
    <div className="flex items-center hover:bg-hoverNavbar rounded-md p-1 transition ease-in-out duration-300">
      <button onClick={handleChevron}>
        <div className="flex items-center gap-1">
          <Image src={Coins} alt="Ethereum" width={24} height={30} />
          Sepolia
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </div>
      </button>
    </div>
  );
};

export default NetworkButton;
