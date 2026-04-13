"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Tab {
  id: string;
  label: string;
  code: string;
  language: string;
}

interface CodeTabsProps {
  tabs: Tab[];
  onTabChange?: (id: string) => void;
}

export function CodeTabs({ tabs, onTabChange }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const getLanguage = (id: string): string => {
    const languages: Record<string, string> = {
      curl: "bash",
      javascript: "javascript",
      python: "python",
      go: "go",
    };
    return languages[id] || "text";
  };

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onTabChange?.(id);
  };

  return (
    <div>
      <div className="flex gap-1 p-1 bg-white/5 border border-white/10 rounded-lg overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`relative px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "text-white"
                : "text-white/40 hover:text-white/60"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeCodeTab"
                className="absolute inset-0 bg-white/10 rounded-md"
                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="mt-4 overflow-x-auto">
        <AnimatePresence mode="wait">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="min-w-0"
                >
                  <SyntaxHighlighter
                    language={getLanguage(tab.id)}
                    style={vscDarkPlus}
                    customStyle={{
                      background: "transparent",
                      padding: 0,
                      margin: 0,
                      fontSize: "12px",
                      lineHeight: "1.5",
                      overflowX: "auto",
                    }}
                    codeTagProps={{
                      style: {
                        fontFamily: "var(--font-mono), monospace",
                      },
                    }}
                  >
                    {tab.code}
                  </SyntaxHighlighter>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
