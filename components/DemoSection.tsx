"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";

export default function DemoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="pt-[58px] bg-[#040810] w-full overflow-hidden">
      <div className="w-full aspect-video relative overflow-hidden bg-[#0e1822]">
        <motion.div className="absolute inset-0 w-full h-full" style={{ y }}>
          {/* Video placeholder / actual video */}
          <video
            src=""
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-0"
          />
          {/* Play button shown when no video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[60px] h-[60px] rounded-full bg-[#002820] border border-[#00422e] flex items-center justify-center">
              <Play size={22} className="text-[#00d4aa] ml-0.5" />
            </div>
          </div>
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(#00d4aa 1px, transparent 1px), linear-gradient(90deg, #00d4aa 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        {/* Bottom fade overlay */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#040810] pointer-events-none" />
      </div>

      <div className="text-center pt-6 pb-2">
        <p className="text-[#4a6272] text-sm tracking-wide">
          LeadOS · AI-powered lead generation · 2 min demo
        </p>
      </div>
    </section>
  );
}
