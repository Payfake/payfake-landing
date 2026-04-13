"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

export function FloatingCards() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative h-64 md:h-80">
      <motion.div
        initial={{ x: -100, y: 50, rotate: -10, opacity: 0 }}
        animate={{ x: -20, y: 0, rotate: -5, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
        whileHover={{ y: -10, rotate: 0 }}
        className="absolute left-0 top-0 w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-white/60">Transaction Successful</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-white/40">Amount</span>
            <span className="text-sm text-white">GHS 100.00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-white/40">Reference</span>
            <span className="text-sm text-white font-mono">TXN_ABC123</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 0, y: 100, rotate: 5, opacity: 0 }}
        animate={{ x: 0, y: 20, rotate: 3, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7, type: "spring" }}
        whileHover={{ y: 10, rotate: 0 }}
        className="absolute left-1/2 -translate-x-1/2 top-10 w-72 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full" />
          <span className="text-xs text-white/60">Webhook Delivered</span>
        </div>
        <div className="space-y-2">
          <div className="text-xs text-white/40 font-mono">POST /webhook</div>
          <div className="text-xs text-green-400 font-mono">200 OK</div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-full bg-green-500"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100, y: 50, rotate: 10, opacity: 0 }}
        animate={{ x: 20, y: 0, rotate: 5, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        whileHover={{ y: -10, rotate: 0 }}
        className="absolute right-0 top-0 w-64 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <span className="text-xs text-white/60">MoMo Pending</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-white/40" />
            <span className="text-sm text-white">MTN MoMo</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">Awaiting confirmation</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
