"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-500 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-gray-200 mb-6">
          Connect Yourself with our Application
        </h1>

        <div className="text-center">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
