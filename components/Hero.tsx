"use client";

import { motion } from "framer-motion";

const headline = [
  { text: "Your", teal: false },
  { text: "next", teal: false },
  { text: "customer", teal: false },
  { text: "is", teal: false },
  { text: "already", teal: false },
  { text: "showing", teal: true },
  { text: "signs.", teal: true },
];

// Group into lines for rendering
const lines = [
  [headline[0], headline[1], headline[2]],
  [headline[3], headline[4]],
  [headline[5], headline[6]],
];

const avatars = [
  { initials: "KR" },
  { initials: "MJ" },
  { initials: "AS" },
  { initials: "PL" },
  { initials: "TW" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  let wordIndex = 0;

  return (
    <section className="py-32 max-w-7xl mx-auto px-12 relative">
      <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-0">
        {/* Left column */}
        <div className="lg:w-3/5">
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
          <div className="w-40 h-px bg-[#00d4aa] opacity-30 mt-3 mb-10" />

          {/* Subheadline */}
          <p className="text-[#7a9ab0] text-lg leading-relaxed max-w-xl mb-10">
            LeadOS reads buying signals across the web and finds the decision
            makers most likely to need you right now. For any business. Any
            product. Any industry.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => scrollTo("waitlist")}
              className="bg-[#00d4aa] text-[#040810] font-medium text-base px-8 py-3.5 rounded-md hover:bg-[#00a888] transition-colors duration-200"
            >
              Join the waitlist →
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-[#4a6272] text-sm hover:text-[#7a9ab0] transition-colors duration-200"
            >
              See how it works ↓
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex items-center">
              {avatars.map((a, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full bg-[#002820] border border-[#00422e] text-[#00d4aa] text-xs font-medium flex items-center justify-center ${
                    i !== 0 ? "-ml-2" : ""
                  }`}
                >
                  {a.initials}
                </div>
              ))}
            </div>
            <p className="text-[#4a6272] text-sm">
              200+ sales teams on the waitlist
            </p>
          </div>
        </div>

        {/* Right column — floating score rings */}
        <div className="hidden lg:flex lg:w-2/5 relative h-[360px] items-center justify-center">
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
