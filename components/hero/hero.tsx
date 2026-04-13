"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";
import { MagneticButton } from "@/components/ui/magneticButton";
import { FloatingCards } from "./floatingCards";

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <motion.div
        style={{ y, opacity }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <Image
            src="/logo.JPG"
            alt="Payfake"
            width={48}
            height={48}
            className="invert"
          />
          <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/60">
            Open Source Payment Simulator
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Test payments
          <br />
          <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
            without limits
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10"
        >
          A self-hostable, Paystack-compatible payment simulator. Test card
          charges, mobile money, webhooks, and failures — without real money or
          sandbox limits.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton href="https://docs.payfake.co" primary>
            <Terminal className="w-5 h-5" />
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          <MagneticButton href="https://github.com/payfake/payfake-api">
            {/*<Github className="w-5 h-5" />*/}
            View on GitHub
          </MagneticButton>
        </motion.div>

        <FloatingCards />
      </motion.div>
    </section>
  );
}
