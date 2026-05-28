"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function LogoBar() {
  const { language } = useLanguage();
  return (
    <section className="border-y border-[#0e1822] py-12 md:py-16 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-center gap-16 flex-wrap">
        <div className="text-center">
          <p className="text-[#dce8f0] text-3xl font-light">5 min</p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            {language === "no" ? "å sette opp" : "to set up"}
          </p>
        </div>

        <div className="hidden md:block w-px h-8 bg-[#152232]" />

        <div className="text-center">
          <p className="text-[#dce8f0] text-3xl font-light">
            {language === "no" ? "Alle bransjer" : "Any industry"}
          </p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            {language === "no" ? "fungerer for all b2b" : "works for all B2B"}
          </p>
        </div>

        <div className="hidden md:block w-px h-8 bg-[#152232]" />

        <div className="text-center">
          <p className="text-[#dce8f0] text-3xl font-light">
            {language === "no" ? "Daglig" : "Daily"}
          </p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            {language === "no"
              ? "nye leads hver morgen"
              : "fresh leads every morning"}
          </p>
        </div>

        <div className="hidden md:block w-px h-8 bg-[#152232]" />

        <div className="text-center">
          <p className="text-[#00d4aa] text-3xl font-light">100%</p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            {language === "no" ? "godkjent av mennesker" : "human approved"}
          </p>
        </div>
      </div>
    </section>
  );
}
