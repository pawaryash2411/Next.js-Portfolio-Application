"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const getRotationTransition = (
  duration: number,
  from: number,
  loop = true
) => ({
  from: from,
  to: from + 360,
  ease: "linear",
  duration: duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  onHover?: "speedUp" | "slowDown" | "pause" | "goBonkers" | string | null;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const CircularText = ({
  text,
  spinDuration = 30,
  onHover = "speedUp",
  className = "",
  imageSrc,
  imageAlt = "Center image",
}: CircularTextProps) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hoverTimeoutRef = useState<NodeJS.Timeout | null>(null)[0];

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  }, [spinDuration, controls, text, currentRotation]);

  const handleHoverStart = () => {
    if (!onHover) return;

    let newSpinDuration = spinDuration;
    let newScale = 1;
    let shouldPause = false;

    switch (onHover) {
      case "slowDown":
        newSpinDuration = spinDuration * 2;
        break;
      case "speedUp":
        newSpinDuration = spinDuration / 4;
        break;
      case "pause":
        shouldPause = true;
        break;
      case "goBonkers":
        newSpinDuration = spinDuration / 20;
        newScale = 0.8;
        break;
      default:
        return;
    }

    if (shouldPause) {
      controls.start({
        rotate: currentRotation,
        scale: 1,
        transition: {
          rotate: {
            type: "spring",
            damping: 20,
            stiffness: 300,
            duration: 0.2,
          },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        },
      });
    } else {
      controls.start({
        rotate: currentRotation + 360,
        scale: newScale,
        transition: getTransition(newSpinDuration, currentRotation),
      });
    }
  };

  const handleHoverEnd = () => {
    if (!onHover) return;
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  };

  const handleImageClick = () => {
    setIsPopupOpen(true);
  };

  const handleImageHover = () => {
    const timeout = setTimeout(() => {
      setIsPopupOpen(true);
    }, 500); // 500ms delay on hover
    return () => clearTimeout(timeout);
  };

  const handleImageLeave = () => {
    // Don't close on mouse leave, only on explicit close
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsPopupOpen(false);
      }
    };

    if (isPopupOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isPopupOpen]);

  return (
    <>
      <motion.div
        initial={{ rotate: 0 }}
        className={`mx-auto rounded-full w-[70px] h-[70px] font-black text-center cursor-pointer origin-center ${className}`}
        animate={controls}
        onUpdate={(latest) => {
          if (typeof latest.rotate === "number") {
            setCurrentRotation(parseFloat(latest.rotate.toFixed(2)));
          }
        }}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const rotation = (360 / letters.length) * i;
          const factor = Number((Math.PI / letters.length).toFixed(0));
          const x = factor * i;
          const y = factor * i;
          const transform = `rotateZ(${rotation}deg) translate3d(${x}px, ${y}px, 0)`;

          return (
            <span
              key={i}
              className="absolute inline-block inset-0 text-xs  transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
        {imageSrc && (
          <div
            className="absolute top-1/2 left-1/2 w-12 h-12 z-10 cursor-pointer"
            style={{
              transform: `translate(-50%, -50%) rotate(${-currentRotation}deg)`,
              WebkitTransform: `translate(-50%, -50%) rotate(${-currentRotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full p-0.5 rounded-full object-cover transition-transform duration-300 hover:scale-110"
              onClick={handleImageClick}
              onMouseEnter={handleImageHover}
              style={{
                transform: "rotate(0deg)",
                WebkitTransform: "rotate(0deg)",
              }}
            />
          </div>
        )}
      </motion.div>
      <AnimatePresence>
        {isPopupOpen && imageSrc && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={handleClosePopup}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.1 }}
                onClick={handleClosePopup}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl font-bold transition-colors duration-200 z-10"
                aria-label="Close popup"
              >
                ×
              </motion.button>

              {/* Image container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 50 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.5,
                }}
                className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  src={imageSrc}
                  alt={imageAlt}
                  className="max-w-full max-h-[90vh] w-auto h-auto rounded-2xl shadow-2xl object-contain"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                />
                
                {/* Decorative glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl rounded-full"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CircularText;
