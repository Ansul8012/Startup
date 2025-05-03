'use client';

import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import Loader from '@/app/components/Loader';
import { motion } from 'framer-motion';

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    await signOut({ callbackUrl: '/' });
  };

  return (
    <>
      {loading && <Loader />}

      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          onClick={handleLogout}
          disabled={loading}
          className="relative px-5 py-2.5 rounded-xl flex items-center gap-2 bg-black/30 backdrop-blur-md text-white font-semibold shadow-lg hover:bg-white/10 transition-all duration-300 border border-white/20 group"
        >
          <motion.span
            className="text-red-400"
            animate={{ rotate: loading ? 180 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <LogOut size={20} />
          </motion.span>
          <span className="group-hover:text-red-400 transition-colors duration-300">
            {loading ? 'Logging out...' : 'Logout'}
          </span>
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
        </button>
      </motion.div>
    </>
  );
};

export default Logout;
