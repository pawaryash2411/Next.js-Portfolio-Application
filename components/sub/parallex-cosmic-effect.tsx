import React, { useEffect, useState } from "react";

interface CosmicParallaxBgProps {
  /**
   * Whether the animations should loop
   * @default true
   */
  loop?: boolean;

  /**
   * Custom class name for additional styling
   */
  className?: string;
}

const CosmicParallaxBg: React.FC<CosmicParallaxBgProps> = ({
  loop = true,
  className = "",
}) => {
//   const [smallStars, setSmallStars] = useState<string>("");
//   const [mediumStars, setMediumStars] = useState<string>("");
//   const [bigStars, setBigStars] = useState<string>("");

  // Generate random star positions
  const generateStarBoxShadow = (count: number): string => {
    let shadows = [];

    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * 2000);
      const y = Math.floor(Math.random() * 2000);
      shadows.push(`${x}px ${y}px #FFF`);
    }

    return shadows.join(", ");
  };

  return (
    <div className={`cosmic-parallax-container ${className}`}>

      {/* Horizon and Earth */}
      <div id="horizon">
        <div className="glow"></div>
      </div>
      <div id="earth"></div>
    </div>
  );
};

export { CosmicParallaxBg };
