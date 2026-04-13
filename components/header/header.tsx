"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Book, Terminal } from "lucide-react";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const elementId = href.replace("#", "");
      scrollTo(elementId);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "https://docs.payfake.co", label: "Documentation", external: true },
    {
      href: "https://docs.payfake.co/api/transaction",
      label: "API",
      external: true,
    },
    {
      href: "https://github.com/payfake/payfake-api",
      label: "GitHub",
      external: true,
    },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.JPG"
                alt="Payfake"
                width={36}
                height={36}
                className="invert"
              />
              <span className="font-medium text-white text-lg">Payfake</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="https://docs.payfake.co"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors"
              >
                <Book className="w-4 h-4" />
                Docs
              </Link>
              <Link
                href="https://docs.payfake.co/quick-start"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
              >
                <Terminal className="w-4 h-4" />
                Quick Start
              </Link>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <Image
                    src="/logo.JPG"
                    alt="Payfake"
                    width={36}
                    height={36}
                    className="invert"
                  />
                  <span className="font-medium text-white text-lg">
                    Payfake
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="block text-lg text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 space-y-3">
                  <Link
                    href="https://docs.payfake.co"
                    target="_blank"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    <Book className="w-4 h-4" />
                    Documentation
                  </Link>
                  <Link
                    href="https://docs.payfake.co/quick-start"
                    target="_blank"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition-colors"
                  >
                    <Terminal className="w-4 h-4" />
                    Quick Start
                  </Link>
                  <a
                    href="https://github.com/payfake/payfake-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-colors"
                  >
                    {/*<Github className="w-4 h-4" />*/}
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
