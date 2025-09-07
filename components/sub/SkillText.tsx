"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HoverBorderGradient
        containerClassName="rounded-full mb-10"
        as="button"
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center space-x-2"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">“Eat Sleep Code Repeat”</h1>
      </HoverBorderGradient>

      <div
        // variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]"
      >
        The Fuel of My Engine
      </div>
      <div
        // variants={slideInFromRight(0.5)}
        className="cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center"
      >
        Skills which I&apos;m Working On
      </div>
    </div>
  );
};

export default SkillText;
