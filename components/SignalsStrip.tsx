"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Search } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Company is scaling",
    body: "When a company grows, their needs change. That's your opening",
  },
  {
    icon: Users,
    title: "Leadership just changed",
    body: "New decision makers re-evaluate everything in their first 90 days",
  },
  {
    icon: Clock,
    title: "Budget cycle is open",
    body: "The right timing turns a cold call into a warm conversation",
  },
  {
    icon: Search,
    title: "Actively evaluating",
    body: "Catch them while they're still deciding.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true },
};

export default function SignalsStrip() {
  return (
    <section className="border-y border-[#0e1822] py-20 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-12">
        <motion.div className="mb-14" {...fadeUp}>
          <p className="text-[#4a6272] text-xs uppercase tracking-[0.2em] mb-4">
            THE LEADOS DIFFERENCE
          </p>
          <h2 className="text-[#dce8f0] font-light text-3xl mb-4">
            We find the decision maker.
            <br />
            At the moment they&apos;re most likely to say yes.
          </h2>
          <p className="text-[#7a9ab0] text-base max-w-2xl">
            Forget cold lists and random databases. These are real companies actively looking for what you sell.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className="bg-[#0e1822] border border-[#152232] rounded-lg px-6 py-8 hover:border-[#00d4aa]/30 transition-colors duration-200 cursor-default"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Icon size={24} className="text-[#00d4aa] mb-4" />
                <p className="text-[#dce8f0] font-semibold text-sm mb-2">
                  {card.title}
                </p>
                <p className="text-[#4a6272] text-xs leading-relaxed">
                  {card.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
