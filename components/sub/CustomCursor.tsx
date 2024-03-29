// components/main/CustomCursor.js
import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color="0, 255, 255"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
};

export default CustomCursor;
