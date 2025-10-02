"use client";
import React from "react";
import Image from "next/image";

const Encryption = () => {
  return (
    <section id="contact">
      <div className="flex flex-row justify-center items-center">
        <div className="relative z-[20] w-auto h-auto">
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <div className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] relative astronaut-container">
              <Image
                src="/Astronaut.png"
                alt="Lock Main"
                fill
                className="object-contain z-10"
                sizes="(max-width: 768px) 300px, 400px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Encryption;
