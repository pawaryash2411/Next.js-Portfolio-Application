"use client";
import React from "react";
import { TracingBeam } from "./TracingBeam";

export function TracingBeamDemo() {
  return (
    <div className="min-h-screen py-12">
      <TracingBeam className="px-6">
        <div className="max-w-4xl mx-auto antialiased pt-4 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-16">
              <h2 className="bg-gradient-to-r from-purple-800 to-cyan-500 text-white font-bold rounded-full text-xs w-fit px-4 py-1 mb-4">
                {item.badge}
              </h2>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    {item.title}
                  </p>
                  <div className="text-sm text-gray-300 prose prose-sm dark:prose-invert">
                    {item.description}
                  </div>
                </div>
                
                {item?.image && (
                  <div className="lg:w-1/3 flex items-start justify-center">
                    <div className="relative group">
                      <div className="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                      <img
                        src={item.image}
                        alt="blog thumbnail"
                        className="relative rounded-lg object-cover w-full h-64 lg:h-72 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
}

const dummyContent = [
  {
    title: "Exploring the Cosmos",
    description: (
      <>
        <p className="mb-4">
          Journey through the vast expanse of space where stars are born and
          galaxies collide. The universe is filled with wonders beyond our
          imagination, from nebulae painting the darkness with color to black
          holes warping the fabric of spacetime.
        </p>
        <p className="mb-4">
          Our understanding of the cosmos expands with each mission, each
          telescope, and each curious mind looking up at the night sky. Space
          exploration represents humanity's endless curiosity and drive to
          understand our place in the universe.
        </p>
        <p>
          As we develop new technologies to peer deeper into space, we uncover
          mysteries that challenge our fundamental understanding of physics and
          existence itself. The cosmos is the ultimate frontier, waiting to be
          explored.
        </p>
      </>
    ),
    badge: "Space",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "The Search for Extraterrestrial Life",
    description: (
      <>
        <p className="mb-4">
          Are we alone in the universe? This question has fascinated humanity
          for centuries. With the discovery of exoplanets in habitable zones
          around distant stars, the possibility of life beyond Earth seems more
          plausible than ever.
        </p>
        <p>
          Scientists are developing sophisticated instruments to detect
          biosignatures in planetary atmospheres and technosignatures that might
          indicate intelligent civilizations. The search extends from Mars'
          ancient riverbeds to the icy moons of Jupiter and Saturn where
          subsurface oceans might harbor life.
        </p>
      </>
    ),
    badge: "Astrobiology",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Future of Space Travel",
    description: (
      <>
        <p className="mb-4">
          The next era of space exploration is dawning, with commercial
          companies joining government agencies in the quest to make space more
          accessible. From reusable rockets to planned missions to Mars,
          humanity stands on the brink of becoming a multi-planetary species.
        </p>
        <p>
          New propulsion technologies, habitat designs, and life support systems
          are being developed to enable long-duration space travel. The
          challenges are immense, but the potential rewards—scientific
          discovery, resource utilization, and the preservation of humanity—are
          even greater.
        </p>
      </>
    ),
    badge: "Innovation",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];