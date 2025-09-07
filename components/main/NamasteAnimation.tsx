"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NamasteAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    // Check if user has visited before
    const visited = localStorage.getItem("portfolio-visited");
    
    if (!visited) {
      // First time visitor - show animation
      setIsVisible(true);
      
      // Mark as visited
      localStorage.setItem("portfolio-visited", "true");
      
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();

      // Calculate mouse position relative to card center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      setMousePosition({ x, y });

      // Calculate rotation (limited range for subtle effect)
      const rotateX = -(y / rect.height) * 5; // Max 5 degrees rotation
      const rotateY = (x / rect.width) * 5; // Max 5 degrees rotation

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  // Reset rotation when not hovering
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Don't render until mounted (prevents hydration issues)
  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          {/* Card container with realistic 3D effect */}
          <motion.div
            ref={cardRef}
            className="relative rounded-[32px] overflow-hidden"
            style={{
              width: "360px",
              height: "450px",
              transformStyle: "preserve-3d",
              backgroundColor: "#0e131f",
              boxShadow: "0 -10px 100px 10px rgba(78, 99, 255, 0.25), 0 0 10px 0 rgba(0, 0, 0, 0.5)",
            }}
            initial={{ y: 0, scale: 0.8, opacity: 0 }}
            animate={{
              y: isHovered ? -5 : 0,
              rotateX: rotation.x,
              rotateY: rotation.y,
              perspective: 1000,
              scale: 1,
              opacity: 1,
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {/* Close button */}
            <motion.button
              onClick={handleClose}
              className="absolute top-4 right-4 z-50 text-white/70 hover:text-white transition-colors duration-300 bg-black/20 rounded-full p-2 backdrop-blur-sm"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Subtle glass reflection overlay */}
            <motion.div
              className="absolute inset-0 z-35 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
                backdropFilter: "blur(2px)",
              }}
              animate={{
                opacity: isHovered ? 0.7 : 0.5,
                rotateX: -rotation.x * 0.2,
                rotateY: -rotation.y * 0.2,
                z: 1,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            />

            {/* Dark background with black gradient */}
            <motion.div
              className="absolute inset-0 z-0"
              style={{
                background: "linear-gradient(180deg, #000000 0%, #000000 70%)",
              }}
              animate={{
                z: -1
              }}
            />

            {/* Noise texture overlay */}
            <motion.div
              className="absolute inset-0 opacity-30 mix-blend-overlay z-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
              animate={{
                z: -0.5
              }}
            />

            {/* Purple/blue glow effect */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
              style={{
                background: `
                  radial-gradient(ellipse at bottom right, rgba(172, 92, 255, 0.7) -10%, rgba(79, 70, 229, 0) 70%),
                  radial-gradient(ellipse at bottom left, rgba(56, 189, 248, 0.7) -10%, rgba(79, 70, 229, 0) 70%)
                `,
                filter: "blur(40px)",
              }}
              animate={{
                opacity: isHovered ? 0.9 : 0.8,
                y: isHovered ? rotation.x * 0.5 : 0,
                z: 0
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            />

            {/* Central purple glow */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
              style={{
                background: `
                  radial-gradient(circle at bottom center, rgba(161, 58, 229, 0.7) -20%, rgba(79, 70, 229, 0) 60%)
                `,
                filter: "blur(45px)",
              }}
              animate={{
                opacity: isHovered ? 0.85 : 0.75,
                y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
                z: 0
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            />

            {/* Enhanced bottom border glow */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
              style={{
                background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
              }}
              animate={{
                boxShadow: isHovered
                  ? "0 0 20px 4px rgba(172, 92, 255, 0.9), 0 0 30px 6px rgba(138, 58, 185, 0.7), 0 0 40px 8px rgba(56, 189, 248, 0.5)"
                  : "0 0 15px 3px rgba(172, 92, 255, 0.8), 0 0 25px 5px rgba(138, 58, 185, 0.6), 0 0 35px 7px rgba(56, 189, 248, 0.4)",
                opacity: isHovered ? 1 : 0.9,
                z: 0.5
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut"
              }}
            />

            {/* Card content */}
            <motion.div
              className="relative flex flex-col h-full p-8 z-40"
              animate={{
                z: 2
              }}
            >
              {/* Namaste emoji with enhanced styling */}
              <motion.div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{
                  background: "linear-gradient(225deg, #171c2c 0%, #121624 100%)",
                  position: "relative",
                  overflow: "hidden"
                }}
                initial={{ filter: "blur(3px)", opacity: 0.7 }}
                animate={{
                  filter: "blur(0px)",
                  opacity: 1,
                  boxShadow: isHovered
                    ? "0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255, 255, 255, 0.15), inset -2px -2px 5px rgba(0, 0, 0, 0.7)"
                    : "0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px rgba(255, 255, 255, 0.12), inset -2px -2px 4px rgba(0, 0, 0, 0.5)",
                  z: isHovered ? 10 : 5,
                  y: isHovered ? -2 : 0,
                  rotateX: isHovered ? -rotation.x * 0.5 : 0,
                  rotateY: isHovered ? -rotation.y * 0.5 : 0
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <motion.span
                  className="text-4xl"
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  🙏
                </motion.span>
              </motion.div>

              {/* Content positioning */}
              <motion.div
                className="mb-auto text-center"
                animate={{
                  z: isHovered ? 5 : 2,
                  rotateX: isHovered ? -rotation.x * 0.3 : 0,
                  rotateY: isHovered ? -rotation.y * 0.3 : 0
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut"
                }}
              >
                <motion.h3
                  className="text-2xl font-medium text-white mb-3"
                  style={{
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                  }}
                  initial={{ filter: "blur(3px)", opacity: 0.7 }}
                  animate={{
                    textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
                    filter: "blur(0px)",
                    opacity: 1,
                    transition: { duration: 1.2, delay: 0.2 }
                  }}
                >
                  Atithi Devo Bhava
                </motion.h3>

                <motion.p
                  className="text-sm mb-6 text-gray-300"
                  style={{
                    lineHeight: 1.5,
                    fontWeight: 350,
                  }}
                  initial={{ filter: "blur(3px)", opacity: 0.7 }}
                  animate={{
                    textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
                    filter: "blur(0px)",
                    opacity: 0.85,
                    transition: { duration: 1.2, delay: 0.4 }
                  }}
                >
                  Welcome to My Space! The guest is equivalent to God
                </motion.p>

                {/* Learn More with arrow */}
                <motion.a
                  href="#"
                  className="inline-flex items-center text-white text-sm font-medium group"
                  initial={{ filter: "blur(3px)", opacity: 0.7 }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 0.9,
                    transition: { duration: 1.2, delay: 0.6 }
                  }}
                  whileHover={{
                    filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))"
                  }}
                >
                  Explore Portfolio
                  <motion.svg
                    className="ml-1 w-4 h-4"
                    width="8"
                    height="8"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    animate={{
                      x: isHovered ? 4 : 0
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  >
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NamasteAnimation;
