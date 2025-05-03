'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
      <motion.div
        className="flex flex-col items-center justify-center text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
        >
          <Loader2 size={48} className="text-white" />
        </motion.div>
        <p className="mt-4 text-lg font-semibold tracking-wide">Loading....</p>
      </motion.div>
    </div>
  );
}
