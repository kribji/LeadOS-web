"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="max-w-7xl mx-auto px-12 h-full flex items-center justify-between">
        {/* Logo */}
        <span className="font-bold tracking-widest text-sm select-none">
          <span className="text-[#dce8f0]">LEAD</span>
          <span className="text-[#00d4aa]">OS</span>
        </span>

        {/* Center nav */}
        <nav className="hidden md:flex gap-10">
          {[
            { label: "How it works", id: "how-it-works" },
            { label: "Features", id: "features" },
            { label: "Pricing", id: "pricing" },
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

        {/* CTA */}
        <button
          onClick={() => scrollTo("waitlist")}
          className="border border-[#00d4aa] text-[#00d4aa] text-sm font-medium px-5 py-2 rounded-md hover:bg-[#002820] transition-colors duration-200"
        >
          Get early access
        </button>
      </div>
    </header>
  );
}
