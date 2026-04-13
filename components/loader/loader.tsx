"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [stage, setStage] = useState<"spinning" | "expanding" | "complete">(
    "spinning",
  );

  useEffect(() => {
    const spinTimer = setTimeout(() => {
      setStage("expanding");
    }, 2000);

    const completeTimer = setTimeout(() => {
      setStage("complete");
      setIsLoading(false);
    }, 2800);

    return () => {
      clearTimeout(spinTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={stage === "expanding" ? { scale: [1, 1.5, 50] } : {}}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="relative"
          >
            <motion.div
              animate={stage === "spinning" ? { rotate: 360 } : {}}
              transition={{
                duration: 1,
                repeat: stage === "spinning" ? Infinity : 0,
                ease: "linear",
              }}
              className="w-16 h-16"
            >
              <svg viewBox="0 0 50 50" className="w-full h-full">
                <motion.circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0.3, pathOffset: 0 }}
                  animate={{
                    pathOffset: stage === "spinning" ? [0, 1] : 0,
                  }}
                  transition={{
                    duration: 1,
                    repeat: stage === "spinning" ? Infinity : 0,
                    ease: "linear",
                  }}
                  strokeDasharray="126"
                />
                {stage === "expanding" && (
                  <motion.circle
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
// payfake
