"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const HeroContent = () => {
  return (
    <div
      // initial="hidden"
      // animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div
          // variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Have the Tea and Start the Hustle!!
          </h1>
        </div>

        <div
          // variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hey!!
            <p className="text-transparent bg-clip-text mt-3 text-4xl bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              I&apos;m Yash Pawar Kamdi
            </p>
          </span>
        </div>

        <p
          // variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          An Aspiring Full Stack Developer, Web Designer, Graphic Designer and
          Problem Solver.
        </p>

        <a
        // variants={slideInFromLeft(1)}
        >
          <Link
            href={
              "https://drive.google.com/file/d/1GRCjI7xRdGkdNOOe2ZS8fNTvbMqnvaNE/view?usp=drive_link"
            }
            target="_blank"
            className="py-2 button-primary text-center uppercase text-white cursor-pointer 
            rounded-lg max-w-[200px]"
          >
            My Resume
          </Link>
        </a>
      </div>
      <div
        // variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </div>
    </div>
  );
};

export default HeroContent;
