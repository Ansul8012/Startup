"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Position {
  x: number;
  y: number;
}

const HeroComponent: React.FC = () => {
  const [lensPosition, setLensPosition] = useState<Position>({ x: 0, y: 0 });
  const [userRole, setUserRole] = useState<"student" | "conductor" | null>(null);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const lensSize = 100;
      const padding = 70;

      const minX = padding;
      const minY = padding;
      const maxX = window.innerWidth - lensSize - padding;
      const maxY = window.innerHeight - lensSize - padding;

      let x = event.clientX - lensSize / 2;
      let y = event.clientY - lensSize / 2;

      x = Math.max(minX, Math.min(x, maxX));
      y = Math.max(minY, Math.min(y, maxY));

      setLensPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("userRole");
      if (role === "student" || role === "conductor") {
        setUserRole(role);
      }
    }
  }, []);

  const handleButtonClick = () => {
    if (!session || !session.user?.name) {
      router.push("/prompt");
      return;
    }

    const username = session.user.name;

    if (userRole === "student") {
      router.push(`/studentDashboard/${username}`);
    } else if (userRole === "conductor") {
      router.push(`/conductorDashboard/${username}`);
    } else {
      router.push("/prompt");
    }
  };

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
          src="/lens.png"
          alt="Lens"
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Hero Text and Role-Based Button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
          Discover the Past
        </h1>
        <p className="text-xl drop-shadow-md mb-6">
          Explore ancient history interactively
        </p>

        {userRole && (
          <button
            onClick={handleButtonClick}
            className={`px-6 py-3 rounded-lg text-lg font-mono shadow-lg transition duration-300 ${
              userRole === "student"
                ? "bg-gray-800 hover:bg-gray-700 px-10"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {userRole === "student" ? "🎓 Pick a Bus" : "🚌 Start Your Bus"}
          </button>
        )}
      </div>
    </div>
  );
};

export default HeroComponent;
