"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}
export function ThreeDCardDemo({ src, title, description, link }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl bg-black/30 hover:bg-black/50 dark:border-white/[0.2] w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl p-4 md:p-6 border">
        <CardItem
          translateZ="50"
          className="text-lg md:text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xs md:text-sm max-w-sm mt-2 text-white"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-40 md:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10 md:mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-3 py-1 md:px-4 md:py-2 rounded-xl bg-black text-white text-xs font-bold"
          >
            Try now →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
