"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Globe, PenLine } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Signal detection",
    body: "We track the events that predict purchase intent across the open web. For any industry.",
    expand:
      "Signals include: rapid hiring, leadership changes, new locations, funding announcements, compliance events, and market expansion. You choose which signals matter for your business.",
  },
  {
    icon: Globe,
    title: "Website intelligence",
    body: "LeadOS reads each lead's website in real time so your outreach feels researched, not templated.",
    expand:
      "We scrape the lead's homepage, about page, and careers page. Claude extracts what they're building, who they're hiring, and what challenges they're facing and then weaves it into your outreach draft.",
  },
  {
    icon: PenLine,
    title: "AI-written outreach",
    body: "Claude writes a cold email for every lead, referencing their buying signals and what's on their site. You get something personal and ready to send.",
    expand:
      "Each draft is written in your tone, references the lead's specific buying signal, and includes a line from their website. Edit it, regenerate it, or approve and send. You decide.",
  },
];

function FeatureCard({ card, delay }: { card: (typeof cards)[0]; delay: number }) {
  const [open, setOpen] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      className="bg-[#040810] border border-[#152232] rounded-md px-8 py-10 hover:border-[#00d4aa]/20 transition-all duration-300"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      viewport={{ once: true }}
    >
      <Icon size={26} className="text-[#00d4aa] mb-6" />
      <h3 className="font-semibold text-lg text-[#dce8f0] mb-3">{card.title}</h3>
      <p className="text-[#7a9ab0] text-sm mb-4">{card.body}</p>

      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="text-[#4a6272] text-xs leading-relaxed mb-3 overflow-hidden"
          >
            {card.expand}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="text-[#4a6272] text-xs hover:text-[#00d4aa] transition-colors duration-200 cursor-pointer"
      >
        {open ? "Show less ↑" : "Learn more →"}
      </button>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#0e1822] border-y border-[#152232] py-36">
      <div className="max-w-7xl mx-auto px-12">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-[#4a6272] text-xs uppercase tracking-[0.2em] mb-5">
            FEATURES
          </p>
          <h2
            style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "#dce8f0",
            }}
          >
            Not just leads. The right leads.
          </h2>
          <p className="text-[#7a9ab0] text-lg mt-5 max-w-2xl mx-auto">
            Every lead comes with the context you need to close. Signal, score,
            website insight, and outreach draft, all in one place.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <FeatureCard key={i} card={card} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
