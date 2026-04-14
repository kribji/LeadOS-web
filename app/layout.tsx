import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "LeadOS — AI-Powered Lead Generation",
  description:
    "LeadOS reads buying signals across the web and finds the decision makers most likely to need you right now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-[#040810] min-h-screen text-[#dce8f0]`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
