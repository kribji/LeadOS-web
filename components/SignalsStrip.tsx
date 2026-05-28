"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Clock, Search } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true },
};

export default function SignalsStrip() {
  const { language } = useLanguage();
  const cards = [
    {
      icon: TrendingUp,
      title: language === "no" ? "Selskapet vokser" : "Company is scaling",
      body:
        language === "no"
          ? "Når et selskap vokser, endrer behovene seg. Det er åpningen din."
          : "When a company grows, their needs change. That's your opening",
    },
    {
      icon: Users,
      title: language === "no" ? "Ny ledelse" : "Leadership just changed",
      body:
        language === "no"
          ? "Nye beslutningstakere vurderer alt på nytt i løpet av de første 90 dagene."
          : "New decision makers re-evaluate everything in their first 90 days",
    },
    {
      icon: Clock,
      title: language === "no" ? "Budsjettvindu åpent" : "Budget cycle is open",
      body:
        language === "no"
          ? "Riktig timing gjør en kald henvendelse til en varm samtale."
          : "The right timing turns a cold call into a warm conversation",
    },
    {
      icon: Search,
      title: language === "no" ? "Aktiv vurdering" : "Actively evaluating",
      body:
        language === "no"
          ? "Ta dem mens de fortsatt vurderer."
          : "Catch them while they're still deciding.",
    },
  ];

  return (
    <section className="border-y border-[#0e1822] py-16 md:py-20 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div className="mb-14" {...fadeUp}>
          <p className="text-[#4a6272] text-xs uppercase tracking-[0.2em] mb-4">
            {language === "no" ? "LEADOS-FORDELEN" : "THE LEADOS DIFFERENCE"}
          </p>
          <h2 className="text-[#dce8f0] font-light text-3xl mb-4">
            {language === "no" ? "Vi finner beslutningstakeren." : "We find the decision maker."}
            <br />
            {language === "no"
              ? "I øyeblikket de mest sannsynlig sier ja."
              : "At the moment they&apos;re most likely to say yes."}
          </h2>
          <p className="text-[#7a9ab0] text-base max-w-2xl">
            {language === "no"
              ? "Glem kalde lister og tilfeldige databaser. Dette er ekte selskaper som aktivt ser etter det du selger."
              : "Forget cold lists and random databases. These are real companies actively looking for what you sell."}
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
