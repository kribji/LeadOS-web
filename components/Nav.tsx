"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full backdrop-blur-md bg-[#040810]/85 transition-all duration-300 ${
        scrolled ? "border-b border-[#0e1822]" : "border-b border-transparent"
      }`}
      style={{ height: "58px" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-full flex items-center justify-between min-w-0">
        {/* Logo */}
        <span className="font-bold tracking-widest text-sm select-none">
          <span className="text-[#dce8f0]">LEAD</span>
          <span className="text-[#00d4aa]">OS</span>
        </span>

        {/* Center nav */}
        <nav className="hidden md:flex gap-10">
          {[
            {
              label: language === "no" ? "Slik fungerer det" : "How it works",
              id: "how-it-works",
            },
            { label: language === "no" ? "Funksjoner" : "Features", id: "features" },
            { label: language === "no" ? "Priser" : "Pricing", id: "pricing" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-[#4a6272] text-sm hover:text-[#dce8f0] transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center border border-[#152232] rounded-md overflow-hidden">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`text-xs px-2.5 py-1.5 transition-colors duration-200 ${
                language === "en"
                  ? "bg-[#002820] text-[#00d4aa]"
                  : "text-[#4a6272] hover:text-[#dce8f0]"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("no")}
              className={`text-xs px-2.5 py-1.5 transition-colors duration-200 ${
                language === "no"
                  ? "bg-[#002820] text-[#00d4aa]"
                  : "text-[#4a6272] hover:text-[#dce8f0]"
              }`}
            >
              NO
            </button>
          </div>
          <button
            onClick={() => scrollTo("waitlist")}
            className="border border-[#00d4aa] text-[#00d4aa] text-sm font-medium px-5 py-2 rounded-md hover:bg-[#002820] transition-colors duration-200"
          >
            {language === "no" ? "Få tidlig tilgang" : "Get early access"}
          </button>
        </div>
      </div>
    </header>
  );
}
