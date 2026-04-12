"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Drop your website",
    body: "Paste your URL and LeadOS reads your site instantly — understanding what you sell, who buys it, and how you sound.",
    expand:
      "No forms to fill. No ICP workshop. Just your website. LeadOS extracts your product, your buyer, your tone, and your value proposition automatically.",
  },
  {
    num: "02",
    title: "Agent finds leads",
    body: "LeadOS scans the web for companies showing buying signals that match your profile — scored and ranked by fit.",
    expand:
      "The agent searches across job boards, news, company websites and databases. Every lead is scored against your ICP and comes with a reason explaining exactly why it's a match.",
  },
  {
    num: "03",
    title: "Send in seconds",
    body: "Every lead comes with a personalised email draft. Human-in-the-loop — you approve before anything is sent.",
    expand:
      "Claude writes each email referencing the lead's specific signals and website content. Edit the tone, tweak the copy, or send as-is. You stay in control of every outreach.",
  },
];

function Step({
  step,
  delay,
}: {
  step: (typeof steps)[0];
  delay: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      <p className="text-[#00d4aa] text-8xl font-black opacity-10 mb-6 leading-none select-none">
        {step.num}
      </p>
      <h3 className="text-[#dce8f0] font-semibold text-xl mb-4">
        {step.title}
      </h3>
      <p className="text-[#7a9ab0] text-sm leading-relaxed mb-4">{step.body}</p>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-[#4a6272] text-xs leading-relaxed mb-3 overflow-hidden"
          >
            {step.expand}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="text-[#4a6272] text-xs hover:text-[#00d4aa] transition-colors duration-200 cursor-pointer"
      >
        {open ? "Show less ↑" : "Read more →"}
      </button>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-36 max-w-7xl mx-auto px-12">
      <motion.div
        className="mb-24"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#00d4aa] text-xs tracking-[0.2em] uppercase mb-5">
          HOW IT WORKS
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: 300,
            color: "#dce8f0",
          }}
        >
          Set up in 5 minutes.
          <br />
          Leads every morning.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map((step, i) => (
          <Step key={i} step={step} delay={i * 0.15} />
        ))}
      </div>
    </section>
  );
}
