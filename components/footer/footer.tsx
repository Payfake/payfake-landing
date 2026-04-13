"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Book, Terminal, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.JPG"
                alt="Payfake"
                width={32}
                height={32}
                className="invert"
              />
              <span className="font-medium text-white">Payfake</span>
            </Link>
            <p className="text-white/50 text-sm max-w-md">
              A self-hostable, Paystack-compatible payment simulator for African
              developers. Test without limits.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://docs.payfake.co"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.payfake.co/quick-start"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  Quick Start
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.payfake.co/api/transaction"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="https://docs.payfake.co/guides/sdks"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  SDKs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/payfake/payfake-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  {/*<Github className="w-4 h-4" />*/}
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/payfake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  {/*<Twitter className="w-4 h-4" />*/}
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://docs.payfake.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center gap-2"
                >
                  <Book className="w-4 h-4" />
                  Guides
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Payfake. Open source under MIT License.
          </p>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a
              href="https://github.com/payfake/payfake-api/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/50 text-sm transition-colors"
            >
              License
            </a>
            <a
              href="https://github.com/payfake/payfake-api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/50 text-sm transition-colors inline-flex items-center gap-1"
            >
              <Terminal className="w-3.5 h-3.5" />
              v1.0.0
            </a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -4 }}
              className="p-2 bg-white/5 border border-white/10 rounded-full text-white/50 hover:text-white hover:border-white/20 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
