"use client";

import React, { useState } from "react";

interface RolePromptProps {
  onClose: () => void;
  onContinue: (role: "student" | "conductor") => void;
}

const RolePrompt: React.FC<RolePromptProps> = ({ onClose, onContinue }) => {
  const [role, setRole] = useState<"student" | "conductor" | "">("");

  const handleContinue = () => {
    if (!role) return alert("Please select a role first.");
    onContinue(role);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Choose Your Role</h2>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setRole("student")}
            className={`border-2 rounded-xl py-4 px-2 text-center transition-all ${
              role === "student"
                ? "border-blue-600 bg-blue-100 text-blue-700"
                : "border-gray-300 hover:border-blue-500"
            }`}
          >
            <div className="text-lg font-semibold">🎓 Student</div>
            <p className="text-sm text-gray-500">Access routes & schedules</p>
          </button>
          <button
            onClick={() => setRole("conductor")}
            className={`border-2 rounded-xl py-4 px-2 text-center transition-all ${
              role === "conductor"
                ? "border-green-600 bg-green-100 text-green-700"
                : "border-gray-300 hover:border-green-500"
            }`}
          >
            <div className="text-lg font-semibold">🚌 Conductor</div>
            <p className="text-sm text-gray-500">Manage bus info & updates</p>
          </button>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black transition"
          >
            Cancel
          </button>
          <button
            onClick={handleContinue}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default RolePrompt;
