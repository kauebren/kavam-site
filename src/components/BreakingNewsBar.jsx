
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const breakingNews = [
  "Global Markets Rally as Central Banks Signal Rate Cuts",
  "Major Merger Announced in Retail Sector",
  "Supreme Court Issues Major Ruling on Digital Privacy",
  "New AI Model Outperforms Human Experts in Diagnostics"
];

const BreakingNewsBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="flex items-center font-bold mr-4 shrink-0 uppercase tracking-wider text-sm">
          <AlertCircle size={16} className="mr-2 animate-pulse" />
          Breaking News
        </div>
        <div className="flex-grow overflow-hidden relative h-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute w-full text-sm font-medium truncate"
            >
              {breakingNews[currentIndex]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default BreakingNewsBar;
