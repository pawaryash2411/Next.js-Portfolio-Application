import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ThreeDCardDemo } from "../sub/ThreeDProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center z-40"
      id="projects"
    >
      {/* <h1
        className="text-[40px] text-center font-semibold text-transparent bg-clip-text 
      bg-gradient-to-r from-purple-500 to-cyan-500 pb-20"
      >
        Personal Projects
      </h1> */}
      <div className="h-full w-full px-16 flex flex-col justify-center items-start md:flex-row gap-10">
        {/* <ProjectCard
          src="/Estate.png"
          title="HomeCore"
          description="Full Stack aka MERN Real Estate Marketplace using Powers of React.js, Redux Toolkit, Tailwind CSS, Framer Motion, Redux Persist, Node.js, Express.js, MongoDB, Firebase Storage and OAuth"
          link="https://github.com/pawaryash2411/MERN-Real-Estate-Marketplace"
        />
        <ProjectCard
          src="/Ecommerce.png"
          title="Mellow"
          description="A Full Stack a.k.a MERN Stack Ecommerce Application Using React.js, MongoDB, Node.js & Express.js, React-Redux, Stripe Payment API's, Cloudinary, Bootstrap"
          link="https://github.com/pawaryash2411/MERN-Real-Estate-Marketplace"
        />
        <ProjectCard
          src="/Nft.png"
          title="Modern NFT Marketplaces"
          description="This is a NFT Marketplace Project which aims to create & sell NFT's Collections with Great UI design using React.js, Tailwind CSS, MetaMask Connectivity, Web3Js, and Ganache"
          link="https://github.com/pawaryash2411/ModernNFTMarketplace"
        /> */}

        <ThreeDCardDemo
          src="/Estate.png"
          title="HomeCore"
          description="Full Stack aka MERN Real Estate Marketplace using Powers of React.js, Redux Toolkit, Tailwind CSS, Framer Motion, Redux Persist, Node.js, Express.js, MongoDB, Firebase Storage and OAuth"
          link="https://github.com/pawaryash2411/MERN-Real-Estate-Marketplace"
        />
        <ThreeDCardDemo
          src="/Ecommerce.png"
          title="Mellow"
          description="A Full Stack a.k.a MERN Stack Ecommerce Application Using React.js, MongoDB, Node.js & Express.js, React-Redux, Stripe Payment API's, Cloudinary, Bootstrap"
          link="https://github.com/pawaryash2411/MERN-Real-Estate-Marketplace"
        />
        <ThreeDCardDemo
          src="/Nft.png"
          title="Modern NFT Marketplaces"
          description="This is a NFT Marketplace Project which aims to create & sell NFT's Collections with Great UI design using React.js, Tailwind CSS, MetaMask Connectivity, Web3Js, and Ganache"
          link="https://github.com/pawaryash2411/ModernNFTMarketplace"
        />
      </div>
    </div>
  );
};

export default Projects;
