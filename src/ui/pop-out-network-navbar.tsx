"use client";

import { useNetworkStore } from "@/global/networkStore";
import Image from "next/image";
import Coins from "../../public/coins.png";
import Polygon from "../../public/polygon.png";
import Arbitrum from "../../public/cryptocurrency.png";
import { Check } from "lucide-react";

const PopOutNetworkNavbar: React.FC = () => {
  const { isNetwork, setIsNetwork } = useNetworkStore();

  const chooseNetwork = (name: string) => {
    setIsNetwork(name);
  };

  return (
    <nav className="flex flex-col py-3 fixed right-2 top-16 w-full max-w-[250px] z-20 text-white bg-hoverNavbar shadow-lg shadow-black rounded-lg">
      <ul>
        <li className={`flex flex-wrap items-center text-textNavbar ${isNetwork === "Ethereum Mainnet" ? "bg-hoverTextNavbar" : ""} hover:bg-hoverTextNavbar rounded-lg transition duration-300 py-2 pl-2 mx-3 font-semibold`}>
          <div>
            <Image src={Coins} alt="Ethereum Sepolia" width={22} height={30} />
          </div>
          <button onClick={() => chooseNetwork("Ethereum Mainnet")} className="ml-4">
            Ethereum Mainnet
          </button>
          <div className="ml-1">{isNetwork === "Ethereum Mainnet" && <Check />}</div>
        </li>
        <li className={`flex flex-wrap items-center text-textNavbar ${isNetwork === "Sepolia" ? "bg-hoverTextNavbar" : ""} hover:bg-hoverTextNavbar rounded-lg transition duration-300 py-2 pl-2 mx-3 font-semibold`}>
          <div>
            <Image src={Coins} alt="Ethereum Sepolia" width={22} height={30} />
          </div>
          <button className="ml-4" onClick={() => chooseNetwork("Sepolia")}>
            Sepolia
          </button>
          <div className="ml-1">{isNetwork === "Sepolia" && <Check />}</div>
        </li>
        <li className={`flex flex-wrap items-center text-textNavbar ${isNetwork === "Holesky" ? "bg-hoverTextNavbar" : ""} hover:bg-hoverTextNavbar rounded-lg transition duration-300 py-2 pl-2 mx-3 font-semibold`}>
          <div>
            <Image src={Coins} alt="Ethereum Sepolia" width={22} height={30} />
          </div>
          <button className="ml-4" onClick={() => chooseNetwork("Holesky")}>
            Holešky
          </button>
          <div className="ml-1">{isNetwork === "Holesky" && <Check />}</div>
        </li>
        <li className={`flex flex-wrap items-center text-textNavbar ${isNetwork === "Polygon Mainnet" ? "bg-hoverTextNavbar" : ""} hover:bg-hoverTextNavbar rounded-lg transition duration-300 py-2 pl-2 mx-3 font-semibold`}>
          <div>
            <Image src={Polygon} alt="Ethereum Sepolia" width={22} height={30} />
          </div>
          <button className="ml-4" onClick={() => chooseNetwork("Polygon Mainnet")}>
            Polygon Mainnet
          </button>
          <div className="ml-1">{isNetwork === "Polygon Mainnet" && <Check />}</div>
        </li>
        <li className={`flex flex-wrap items-center text-textNavbar ${isNetwork === "Amoy" ? "bg-hoverTextNavbar" : ""} hover:bg-hoverTextNavbar rounded-lg transition duration-300 py-2 pl-2 mx-3 font-semibold`}>
          <div>
            <Image src={Polygon} alt="Ethereum Sepolia" width={22} height={30} />
          </div>
          <button className="ml-4" onClick={() => chooseNetwork("Amoy")}>
            Amoy
          </button>
          <div className="ml-1">{isNetwork === "Amoy" && <Check />}</div>
        </li>
        <li className={`flex flex-wrap items-center text-textNavbar ${isNetwork === "Arbitrum Mainnet" ? "bg-hoverTextNavbar" : ""} hover:bg-hoverTextNavbar rounded-lg transition duration-300 py-2 pl-2 mx-3 font-semibold`}>
          <div>
            <Image src={Arbitrum} alt="Ethereum Sepolia" width={22} height={30} />
          </div>
          <button className="ml-4" onClick={() => chooseNetwork("Arbitrum Mainnet")}>
            Arbitrum Mainnet
          </button>
          <div className="ml-1">{isNetwork === "Arbitrum Mainnet" && <Check />}</div>
        </li>
        <li className={`flex flex-wrap items-center text-textNavbar ${isNetwork === "Arbitrum Sepolia" ? "bg-hoverTextNavbar" : ""} hover:bg-hoverTextNavbar rounded-lg transition duration-300 py-2 pl-2 mx-3 font-semibold`}>
          <div>
            <Image src={Arbitrum} alt="Ethereum Sepolia" width={22} height={30} />
          </div>
          <button className="ml-4" onClick={() => chooseNetwork("Arbitrum Sepolia")}>
            Arbitrum Sepolia
          </button>
          <div className="ml-1">{isNetwork === "Arbitrum Sepolia" && <Check />}</div>
        </li>
      </ul>
    </nav>
  );
};

export default PopOutNetworkNavbar;
