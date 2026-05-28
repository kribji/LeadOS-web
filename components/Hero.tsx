"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function Hero() {
  const { language } = useLanguage();
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const headline =
    language === "no"
      ? [
          { text: "Din", teal: false },
          { text: "neste", teal: false },
          { text: "kunde", teal: false },
          { text: "viser", teal: false },
          { text: "allerede", teal: false },
          { text: "tegn.", teal: true },
        ]
      : [
          { text: "Your", teal: false },
          { text: "next", teal: false },
          { text: "customer", teal: false },
          { text: "is", teal: false },
          { text: "already", teal: false },
          { text: "showing", teal: true },
          { text: "signs.", teal: true },
        ];

  const lines =
    language === "no"
      ? [
          [headline[0], headline[1], headline[2]],
          [headline[3], headline[4]],
          [headline[5]],
        ]
      : [
          [headline[0], headline[1], headline[2]],
          [headline[3], headline[4]],
          [headline[5], headline[6]],
        ];

  let wordIndex = 0;

  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 md:px-12 relative">
      <div className="flex flex-col md:flex-row md:items-center gap-16 md:gap-0">
        {/* Left column — centered on mobile, left-aligned from md up */}
        <div className="w-full md:w-3/5 text-center md:text-left flex flex-col items-center md:items-start">
          {/* Word-by-word headline */}
          <h1
            style={{
              fontSize: "clamp(3.2rem, 5.5vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {lines.map((line, li) => (
              <span key={li} className="block">
                {line.map((word) => {
                  const idx = wordIndex++;
                  return (
                    <motion.span
                      key={idx}
                      className={`inline-block mr-[0.25em] ${
                        word.teal ? "text-[#00d4aa]" : "text-[#dce8f0]"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: idx * 0.08,
                        duration: 0.5,
                        ease: "easeOut",
                      }}
                    >
                      {word.text}
                    </motion.span>
                  );
                })}
              </span>
            ))}
          </h1>

          {/* Thin teal line */}
          <div className="w-40 h-px bg-[#00d4aa] opacity-30 mt-3 mb-10 mx-auto md:mx-0" />

          {/* Subheadline */}
          <p className="text-[#7a9ab0] text-lg leading-relaxed max-w-xl mb-10 mx-auto md:mx-0">
            {language === "no"
              ? "LeadOS leser kjøpssignaler på tvers av nettet og finner beslutningstakerne som mest sannsynlig trenger deg akkurat nå. For alle typer bedrifter. Alle produkter. Alle bransjer."
              : "LeadOS reads buying signals across the web and finds the decision makers most likely to need you right now. For any business. Any product. Any industry."}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center justify-center md:justify-start w-full md:w-auto">
            <button
              onClick={() => scrollTo("waitlist")}
              className="bg-[#00d4aa] text-[#040810] font-medium text-base px-8 py-3.5 rounded-md hover:bg-[#00a888] transition-colors duration-200"
            >
              {language === "no" ? "Bli med på ventelisten →" : "Join the waitlist →"}
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-[#4a6272] text-sm hover:text-[#7a9ab0] transition-colors duration-200"
            >
              {language === "no" ? "Se hvordan det fungerer ↓" : "See how it works ↓"}
            </button>
          </div>
        </div>

        {/* Right column — floating score rings */}
        <div className="hidden md:flex md:w-2/5 relative h-[360px] items-center justify-center">
          {/* Ring 1 — largest, top right */}
          <div className="float-1 absolute top-0 right-4">
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="#152232"
                strokeWidth="1.5"
              />
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke="#00d4aa"
                strokeWidth="1.5"
                strokeDasharray="552 553"
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
              <text
                x="100"
                y="92"
                textAnchor="middle"
                fontSize="42"
                fontWeight="900"
                fill="#dce8f0"
              >
                94
              </text>
              <text
                x="100"
                y="112"
                textAnchor="middle"
                fontSize="10"
                fill="#4a6272"
              >
                fit score
              </text>
              <text
                x="100"
                y="130"
                textAnchor="middle"
                fontSize="11"
                fill="#00d4aa"
              >
                Aibel AS
              </text>
            </svg>
          </div>

          {/* Ring 2 — medium, offset right-down */}
          <div className="float-2 absolute top-28 right-[-20px]">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="#152232"
                strokeWidth="1.5"
              />
              <circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="#60a5fa"
                strokeWidth="1.5"
                strokeDasharray="328 377"
                strokeLinecap="round"
                transform="rotate(-90 70 70)"
              />
              <text
                x="70"
                y="64"
                textAnchor="middle"
                fontSize="30"
                fontWeight="900"
                fill="#dce8f0"
              >
                87
              </text>
              <text
                x="70"
                y="83"
                textAnchor="middle"
                fontSize="9"
                fill="#4a6272"
              >
                Kolonial.no
              </text>
            </svg>
          </div>

          {/* Ring 3 — small, bottom left */}
          <div className="float-3 absolute bottom-8 left-8">
            <svg width="110" height="110" viewBox="0 0 110 110">
              <circle
                cx="55"
                cy="55"
                r="46"
                fill="none"
                stroke="#152232"
                strokeWidth="1.5"
              />
              <circle
                cx="55"
                cy="55"
                r="46"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="1.5"
                strokeDasharray="208 289"
                strokeLinecap="round"
                transform="rotate(-90 55 55)"
              />
              <text
                x="55"
                y="51"
                textAnchor="middle"
                fontSize="22"
                fontWeight="900"
                fill="#dce8f0"
              >
                72
              </text>
              <text
                x="55"
                y="66"
                textAnchor="middle"
                fontSize="8"
                fill="#4a6272"
              >
                Pexip AS
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
