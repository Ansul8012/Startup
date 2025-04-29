"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Position {
  x: number;
  y: number;
}

const HeroComponent: React.FC = () => {
  const [lensPosition, setLensPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      setLensPosition({
        x: clientX - 50, // adjust for lens size
        y: clientY - 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Map */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/ancient-leather-antique-brown-world-map-adventure-concept-macro-shot-generative-ai-ancient-leather-antique-vintage-brown-world-map-360048237.jpg')",
        }}
      />

      {/* Animated Lens */}
      <motion.div
        className="absolute z-10 pointer-events-none"
        animate={{ left: lensPosition.x, top: lensPosition.y }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ width: 100, height: 100 }}
      >
        <img
          src="/lens.png" // Make sure this image exists in your public folder
          alt="Lens"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Discover the Past
        </h1>
        <p className="text-xl drop-shadow-md">Explore ancient history interactively</p>
      </div>
    </div>
  );
};

export default HeroComponent;
