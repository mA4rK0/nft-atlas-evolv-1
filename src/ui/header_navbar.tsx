"use client";
import { useState, useEffect } from "react";
import NetworkButton from "./network_button";
import PopOutNetworkNavbar from "@/ui/pop-out-network-navbar";

const HeaderNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePopOut = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 text-white ${scrolled ? "bg-navbar shadow-md" : "bg-transparent"}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <h1>
              NFT<span className="text-sky-500">A</span>t<span className="text-green-500">l</span>
              <span className="text-blue-500">a</span>
              <span className="text-yellow-300">s</span>
            </h1>
          </div>
          <span onClick={handlePopOut}>
            <NetworkButton />
          </span>

          {/* <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">Sign In</button> */}
        </div>
      </nav>
      {isOpen && <PopOutNetworkNavbar />}
    </>
  );
};

export default HeaderNavbar;
