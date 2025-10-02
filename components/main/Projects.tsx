import React from "react";
import { ThreeDCardDemo } from "../sub/ThreeDProjectCard";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center z-40 pt-40" id="projects">
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
        <div className="w-full h-full max-w-md">
          <ThreeDCardDemo
            src="/Estate.png"
            title="HomeCore"
            description="Full Stack aka MERN Real Estate Marketplace using Powers of React.js, Redux Toolkit, Tailwind CSS, Framer Motion, Redux Persist, Node.js, Express.js, MongoDB, Firebase Storage and OAuth"
            link="https://github.com/pawaryash2411/MERN-Real-Estate-Marketplace"
          />
        </div>
        <div className="w-full h-full max-w-md">
          <ThreeDCardDemo
            src="/Ecommerce.png"
            title="Mellow"
            description="A Full Stack a.k.a MERN Stack Ecommerce Application Using React.js, MongoDB, Node.js & Express.js, React-Redux, Stripe Payment API's, Cloudinary, Bootstrap"
            link="https://github.com/pawaryash2411/MERN-Real-Estate-Marketplace"
          />
        </div>
        <div className="w-full h-full max-w-md">
          <ThreeDCardDemo
            src="/Nft.png"
            title="Modern NFT Marketplaces"
            description="This is a NFT Marketplace Project which aims to create & sell NFT's Collections with Great UI design using React.js, Tailwind CSS, MetaMask Connectivity, Web3Js, and Ganache"
            link="https://github.com/pawaryash2411/ModernNFTMarketplace"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;