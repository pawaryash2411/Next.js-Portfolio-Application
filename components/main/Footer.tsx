import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { IoIosMailUnread } from "react-icons/io";
import { AiOutlineNumber } from "react-icons/ai";
import { RiFacebookBoxFill } from "react-icons/ri";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
            <div className="font-bold text-[16px]">Social Media Links</div>
            <div className="flex flex-row justify-between gap-10 flex-wrap">
              {" "}
              <Link
                href="https://www.instagram.com/_yash__2411/"
                target="_blank"
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxInstagramLogo />
                  <span className="text-[15px] ml-[6px]">Instagram</span>
                </p>
              </Link>
              <Link href="https://github.com/pawaryash2411" target="_blank">
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxGithubLogo />
                  <span className="text-[15px] ml-[6px]">Github</span>
                </p>
              </Link>
              <Link
                href="https://www.linkedin.com/in/yash-pawar-kamdi-8041921b5/"
                target="_blank"
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxLinkedinLogo />
                  <span className="text-[15px] ml-[6px]">LinkedIn</span>
                </p>
              </Link>
            </div>
            <div className="flex flex-row justify-between gap-10 flex-wrap">
              <Link
                href="https://www.instagram.com/_yash__2411/"
                target="_blank"
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxDiscordLogo />
                  <span className="text-[15px] ml-[6px]">Discord</span>
                </p>
              </Link>
              <Link
                href="https://www.instagram.com/_yash__2411/"
                target="_blank"
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RiFacebookBoxFill />
                  <span className="text-[15px] ml-[6px]">Facebook</span>
                </p>
              </Link>
              <Link
                href="https://www.instagram.com/_yash__2411/"
                target="_blank"
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  <RxTwitterLogo />
                  <span className="text-[15px] ml-[6px]">Twitter</span>
                </p>
              </Link>
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-1 z-50">
            <div className="font-bold text-[16px]">Reach Out Me</div>
            <p className="flex flex-row items-center my-[10px] cursor-pointer">
              <p className="flex flex-row items-center my-[10px] cursor-pointer">
                <IoIosMailUnread />
                <span className="text-[15px] ml-[6px]">
                  pawaryash2411@gmail.com
                </span>
              </p>
            </p>
          </div>
        </div>

        <div className="my-7 text-[15px] text-center">
          &copy; Yash Dev Universe 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
