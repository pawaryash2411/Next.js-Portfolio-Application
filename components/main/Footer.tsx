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
import { RiFacebookBoxFill, RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
import { LinkPreview } from "../ui/link-preview";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start z-50">
            <div className="font-bold text-[16px]">Social Media Links</div>
            <div className="flex flex-row justify-between gap-10 flex-wrap font-semibold">
              {" "}
              <LinkPreview
                url="https://www.instagram.com/_yash__2411/"
                imageSrc="/Instagram_Ss.png"
                isStatic
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer text-white">
                  <RxInstagramLogo />
                  <span className="text-[15px] ml-[6px]">Instagram</span>
                </p>
              </LinkPreview>
              <LinkPreview url="https://github.com/pawaryash2411">
                <p className="flex flex-row items-center my-[15px] cursor-pointer text-white">
                  <RxGithubLogo />
                  <span className="text-[15px] ml-[6px]">Github</span>
                </p>
              </LinkPreview>
              <LinkPreview url="https://www.linkedin.com/in/yash-pawar-kamdi-8041921b5/">
                <p className="flex flex-row items-center my-[15px] cursor-pointer text-white">
                  <RxLinkedinLogo />
                  <span className="text-[15px] ml-[6px]">LinkedIn</span>
                </p>
              </LinkPreview>
            </div>
            <div className="flex flex-row justify-between gap-10 flex-wrap font-semibold">
              <LinkPreview
                url="https://discordapp.com/users/yash_2411"
                imageSrc="/Discord_Ss.png"
                isStatic
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer text-white">
                  <RxDiscordLogo />
                  <span className="text-[15px] ml-[6px]">Discord</span>
                </p>
              </LinkPreview>
              <LinkPreview
                url="https://www.facebook.com/profile.php?id=100009427236735&rdid=Fs1IEqh5fmBuEgCT&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1N24Zo4ixa%2F#"
                imageSrc="/Facebook_Ss.png"
                isStatic
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer text-white">
                  <RiFacebookBoxFill />
                  <span className="text-[15px] ml-[6px]">Facebook</span>
                </p>
              </LinkPreview>
              <LinkPreview
                url="https://x.com/KamdiYash?t=q_NXbp4JatAT9a5PRJWCAw&s=08"
                imageSrc="/Twitter_Ss.png"
                isStatic
              >
                <p className="flex flex-row items-center my-[15px] cursor-pointer text-white">
                  <RiTwitterXFill />
                  <span className="text-[15px] ml-[6px]">X</span>
                </p>
              </LinkPreview>
            </div>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start mt-1 z-50">
            <div className="font-bold text-[16px]">Reach Out Me</div>
            <LinkPreview url="https://mail.google.com/">
              <p className="flex flex-row items-center my-[10px] cursor-pointer text-white font-semibold">
                <p className="flex flex-row items-center my-[10px] cursor-pointer">
                  <IoIosMailUnread />
                  <span className="text-[15px] ml-[6px]">
                    pawaryash2411@gmail.com
                  </span>
                </p>
              </p>
            </LinkPreview>
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
