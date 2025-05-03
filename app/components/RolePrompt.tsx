"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  BusFront,
  Users,
  ShieldCheck,
} from "lucide-react";

interface RolePromptProps {
  onClose: () => void;
  onContinue: (role: "student" | "conductor") => void;
}

const RolePrompt: React.FC<RolePromptProps> = ({ onClose, onContinue }) => {
  const [role, setRole] = useState<"student" | "conductor" | null>(null);

  const handleContinue = () => {
    if (!role) return alert("Please select a role first.");
    onContinue(role);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="w-[100%] h-[30vw] max-w-5xl bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex border border-gray-700">
        {/* Left Section - Illustration + Floating Icons */}
        <div className="relative w-1/2 p-10 flex items-center justify-center bg-black">
          <Image
            src="/formright.png" 
            alt="Auth Illustration"
            width={300}
            height={300}
            className="z-10"
          />
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-6 left-6 text-white"
          >
            <GraduationCap size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 right-10 text-white"
          >
            <BusFront size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute bottom-10 left-10 text-white"
          >
            <ShieldCheck size={32} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-8 right-8 text-white"
          >
            <Users size={32} />
          </motion.div>
        </div>

        {/* Right Section - Role Selection */}
        <div className="w-1/2 p-10 space-y-9 text-white mt-28">
          <h2 className="text-3xl font-bold text-center">Choose Your Role</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setRole("student")}
              className={`border-2 rounded-xl py-4 px-2 text-center transition-all ${
                role === "student"
                  ? "border-blue-600  text-blue-400"
                  : "border-gray-500 hover:border-blue-500"
              }`}
            >
              <div className="text-lg font-semibold">🎓 Student</div>
              <p className="text-sm text-gray-300">Access routes & schedules</p>
            </button>
            <button
              onClick={() => setRole("conductor")}
              className={`border-2 rounded-xl py-4 px-2 text-center transition-all ${
                role === "conductor"
                  ? "border-green-600 text-green-600"
                  : "border-gray-500 hover:border-green-500"
              }`}
            >
              <div className="text-lg font-semibold">🚌 Conductor</div>
              <p className="text-sm text-gray-300">Manage bus info & updates</p>
            </button>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              onClick={handleContinue}
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-white hover:text-black transition"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolePrompt;