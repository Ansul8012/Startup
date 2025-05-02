"use client";

import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { LogIn, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import RolePrompt from "@/app/prompt/page";

export default function Navbar() {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();

  const [showPrompt, setShowPrompt] = useState(false);
  const [storedRole, setStoredRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setStoredRole(localStorage.getItem("userRole"));
    }
  }, [session]);

  const handleSignIn = async (role: "student" | "conductor") => {
    localStorage.setItem("userRole", role);
    await signIn("google", { callbackUrl: "/redirect-handler" });
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-extrabold">
          <h1>My Website</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          {["about", "fees", "explore", "more"].map((page) => (
            <form action={`/${page}`} method="GET" key={page}>
              <button className="text-white hover:text-gray-300 font-medium transition duration-300 capitalize">
                {page}
              </button>
            </form>
          ))}
        </div>

        {!user ? (
          <button
            onClick={() => setShowPrompt(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-300 flex items-center space-x-2"
          >
            <LogIn size={18} />
            <span>Sign In</span>
          </button>
        ) : (
          <div className="flex items-center space-x-4">
            <div className="flex flex-col">
              <span className="font-semibold text-sm">
                {storedRole === "student" && "🎓 "}
                {storedRole === "conductor" && "🚌 "}
                {user.name}
              </span>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:text-red-400 transition duration-300 flex items-center space-x-2"
            >
              <LogOut size={20} />
            </button>
          </div>
        )}
      </div>

      {showPrompt && (
        <RolePrompt
          onClose={() => setShowPrompt(false)}
          onContinue={handleSignIn}
        />
      )}
    </nav>
  );
}
