import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PreLoad = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 2600); // 2.6s preload window
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin shadow-lg shadow-white/10" />
            <span className="sr-only">Loading site...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoad;
