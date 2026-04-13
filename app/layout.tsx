import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Payfake - Test Payments Without Limits",
  description:
    "Self-hostable Paystack-compatible payment simulator for African developers. Test card charges, mobile money, webhooks, and failures without real money.",
  metadataBase: new URL("https://payfake.co"),
  openGraph: {
    title: "Payfake - Test Payments Without Limits",
    description: "Self-hostable Paystack-compatible payment simulator",
    url: "https://payfake.co",
    siteName: "Payfake",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payfake",
    description: "Test payments without limits",
  },
  icons: {
    icon: [{ url: "/logo.JPG", type: "image/jpeg" }],
    apple: "/logo.JPG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="bg-black text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
