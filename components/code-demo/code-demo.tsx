"use client";

import { motion } from "framer-motion";
import { Terminal } from "./terminal";
import { CodeTabs } from "./code-tabs";
import { Section } from "@/components/ui/section";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const codeExamples = [
  {
    id: "curl",
    label: "cURL",
    language: "bash",
    code: `curl -X POST http://localhost:8080/api/v1/transaction/initialize \\
  -H "Authorization: Bearer sk_test_xxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "customer@example.com",
    "amount": 10000,
    "currency": "GHS"
  }'`,
  },
  {
    id: "javascript",
    label: "JS",
    language: "javascript",
    code: `import { createClient } from 'payfake-js';

const client = createClient({
  secretKey: 'sk_test_xxx',
  baseURL: 'http://localhost:8080'
});

const tx = await client.transaction.initialize({
  email: 'customer@example.com',
  amount: 10000,
  currency: 'GHS'
});

console.log(tx.authorizationUrl);`,
  },
  {
    id: "python",
    label: "Python",
    language: "python",
    code: `from payfake import Client

client = Client(
    secret_key="sk_test_xxx",
    base_url="http://localhost:8080"
)

tx = client.transaction.initialize(
    email="customer@example.com",
    amount=10000,
    currency="GHS"
)

print(tx.authorization_url)`,
  },
  {
    id: "go",
    label: "Go",
    language: "go",
    code: `package main

import (
    "context"
    "fmt"
    payfake "github.com/payfake/payfake-go"
)

func main() {
    client := payfake.New(payfake.Config{
        SecretKey: "sk_test_xxx",
        BaseURL:   "http://localhost:8080",
    })

    tx, _ := client.Transaction.Initialize(context.Background(),
        payfake.InitializeInput{
            Email:  "customer@example.com",
            Amount: 10000,
        })

    fmt.Println(tx.AuthorizationURL)
}`,
  },
];

export function CodeDemo() {
  const [copied, setCopied] = useState(false);
  const [activeTabId, setActiveTabId] = useState("curl");

  const handleCopy = () => {
    const activeCode =
      codeExamples.find((tab) => tab.id === activeTabId)?.code || "";
    navigator.clipboard?.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            One line change,
            <br />
            <span className="bg-linear-to-r from-white to-white/70 bg-clip-text text-transparent">
              infinite possibilities
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-white/60 mb-6 lg:mb-8 leading-relaxed">
            Point your app at{" "}
            <code className="px-2 py-1 bg-white/10 rounded text-white text-sm">
              localhost:8080
            </code>{" "}
            instead of
            <code className="px-2 py-1 bg-white/10 rounded text-white text-sm ml-1">
              api.paystack.co
            </code>
            . Everything else stays the same.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/60 text-sm">Drop-in replacement</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <span className="text-white/60 text-sm">No code changes</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full overflow-hidden"
        >
          <Terminal>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-white/40 font-mono">
                Initialize a transaction
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2 py-1 text-xs text-white/40 hover:text-white transition-colors rounded"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-500" />
                    <span className="text-green-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <CodeTabs tabs={codeExamples} onTabChange={setActiveTabId} />
          </Terminal>
        </motion.div>
      </div>
    </Section>
  );
}
