"use client";

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"; // Using useSession hook
import { LogIn, LogOut } from 'lucide-react'; // Import icons from lucide-react
import Image from "next/image"; // Import Image component to display the user's image

export default function Navbar() {
  const { data: session } = useSession(); // Fetch session data using useSession hook
  const user = session?.user;

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-2xl font-extrabold">
          <h1>My Website</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <form action="/about" method="GET">
            <button
              type="submit"
              className="text-white hover:text-gray-300 font-medium transition duration-300"
            >
              About
            </button>
          </form>
          <form action="/fees" method="GET">
            <button
              type="submit"
              className="text-white hover:text-gray-300 font-medium transition duration-300"
            >
              Fees
            </button>
          </form>
          <form action="/explore" method="GET">
            <button
              type="submit"
              className="text-white hover:text-gray-300 font-medium transition duration-300"
            >
              Explore
            </button>
          </form>
          <form action="/more" method="GET">
            <button
              type="submit"
              className="text-white hover:text-gray-300 font-medium transition duration-300"
            >
              More
            </button>
          </form>
        </div>

        {/* Conditional Render for Sign In/Sign Out */}
        {!user ? (
          <div>
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2"
            >
              <LogIn size={18} /> {/* Add LogIn icon */}
              <span>Sign In</span>
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            {/* Display User's Image */}
            {user.image && (
              <Image
                src={user.image}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            {/* Sign Out Button */}
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:text-red-400 transition duration-300 flex items-center justify-center space-x-2"
            >
              <LogOut size={20} /> {/* Add LogOut icon */}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
