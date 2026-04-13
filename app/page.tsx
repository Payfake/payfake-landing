"use client";

import { CodeDemo } from "@/components/code-demo";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { BackgroundGrid, Hero } from "@/components/hero";
import { Loader } from "@/components/loader";
import { ScrollProgress } from "@/components/scroll-progress";

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <BackgroundGrid />
      {/*<FloatingOrbs />*/}
      <Loader />
      <ScrollProgress />
      <Header />
      <Hero />
      <Features />
      <CodeDemo />
      <CTA />
      <Footer />
    </main>
  );
}
