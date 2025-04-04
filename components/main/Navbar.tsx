import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] text-xl hidden md:block Welcome-text">
            Yash Dev Universe
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto uppercase mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a
              href="#about-me"
              className="cursor-pointer  hover:text-violet-400 ease-in-out duration-150"
            >
              Home
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:text-violet-400 ease-in-out duration-150"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer  hover:text-violet-400 ease-in-out duration-150"
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
