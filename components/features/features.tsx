"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  Globe,
  Webhook,
  Key,
  Terminal,
  Smartphone,
  CreditCard,
  Database,
} from "lucide-react";
import { FeatureCard } from "./featureCard";
import { Section } from "@/components/ui/section";

const features = [
  {
    icon: CreditCard,
    title: "Card Payments",
    description:
      "Visa, Mastercard, Amex, Discover with full validation and error simulation.",
  },
  {
    icon: Smartphone,
    title: "Mobile Money",
    description:
      "MTN MoMo, Vodafone Cash, AirtelTigo with realistic async flows.",
  },
  {
    icon: Globe,
    title: "Bank Transfer",
    description: "Simulate bank transfers with configurable processing times.",
  },
  {
    icon: Webhook,
    title: "Webhooks",
    description: "HMAC-signed events with retry logic and delivery logs.",
  },
  {
    icon: Zap,
    title: "Scenario Engine",
    description: "Configure failure rates, delays, and forced outcomes.",
  },
  {
    icon: Shield,
    title: "Paystack Compatible",
    description: "Same API structure. Change one URL and nothing else.",
  },
  {
    icon: Key,
    title: "API Keys",
    description: "Public and secret key authentication with rotation support.",
  },
  {
    icon: Terminal,
    title: "Introspection Logs",
    description: "Every request and response stored and queryable.",
  },
  {
    icon: Database,
    title: "Self-Hostable",
    description: "Run locally or deploy to your own infrastructure.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Everything you need
        </h2>
        <p className="text-xl text-white/60">
          Test every payment scenario without touching real money or depending
          on external sandboxes.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} delay={index * 0.05} />
        ))}
      </div>
    </Section>
  );
}
