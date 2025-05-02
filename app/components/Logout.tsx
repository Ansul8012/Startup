'use client'

import React from 'react'
import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"

const Logout = () => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={() => signOut({ callbackUrl: "/" })}
        className="relative px-5 py-2.5 rounded-xl flex items-center gap-2 bg-black/30 backdrop-blur-md text-white font-semibold shadow-lg hover:bg-white/10 transition-all duration-300 border border-white/20 group"
      >
        <span className="transform group-hover:rotate-180 transition-transform duration-500">
          <LogOut size={20} className="text-red-400" />
        </span>
        <span className="group-hover:text-red-400 transition-colors duration-300">Logout</span>

        {/* Optional glow effect */}
        <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
      </button>
    </div>
  )
}

export default Logout
