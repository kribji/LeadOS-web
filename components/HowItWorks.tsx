"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

function Step({
  step,
  delay,
  language,
}: {
  step: {
    num: string;
    title: string;
    body: string;
    expand: string;
  };
  delay: number;
  language: "en" | "no";
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
        {open
          ? language === "no"
            ? "Vis mindre ↑"
            : "Show less ↑"
          : language === "no"
          ? "Les mer →"
          : "Read more →"}
      </button>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { language } = useLanguage();
  const steps = [
    {
      num: "01",
      title: language === "no" ? "Legg inn nettstedet ditt" : "Drop your website",
      body:
        language === "no"
          ? "Legg inn URL-en din, så leser LeadOS nettstedet og finner ut nøyaktig hva du selger og til hvem."
          : "Drop your URL, LeadOS reads your site and works out exactly what you do and who you sell to.",
      expand:
        language === "no"
          ? "Ingen lange ICP-skjemaer å fylle ut. LeadOS leser nettstedet ditt og henter automatisk ut produktet ditt, kjøperen din, tonen din og verdiforslaget ditt."
          : "No long ICP forms to fill out or profiles to make. LeadOS reads your website and extracts your product, your buyer, your tone, and your value proposition automatically.",
    },
    {
      num: "02",
      title: language === "no" ? "Agenten finner leads" : "Agent finds leads",
      body:
        language === "no"
          ? "LeadOS skanner nettet etter selskaper med kjøpssignaler som matcher profilen din, og leverer dem scoret og rangert etter match."
          : "LeadOS scans the web for companies showing buying signals that match your profile, deliveres them scored and ranked by fit to you.",
      expand:
        language === "no"
          ? "Agenten søker på tvers av jobbannonser, nyheter, selskapsnettsider og databaser. Hvert lead scores mot ICP-en din og kommer med en tydelig begrunnelse."
          : "The agent searches across job boards, news, company websites and databases. Every lead is scored against your ICP and comes with a reason explaining exactly why it's a match.",
    },
    {
      num: "03",
      title: language === "no" ? "Send på sekunder" : "Send in seconds",
      body:
        language === "no"
          ? "Hvert lead får en personlig e-post skrevet for seg. Ingenting sendes uten at du godkjenner det."
          : "Each lead gets a personalised email written for them. Nothing sends without your say-so.",
      expand:
        language === "no"
          ? "Claude skriver hver e-post med konkrete signaler og innhold fra nettsiden. Du kan redigere, regenerere eller sende som den er."
          : "Claude writes each email referencing the lead's specific signals and website content. Edit the tone, tweak the copy, or send as-is. You stay in control of every outreach.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-36 max-w-7xl mx-auto px-4 md:px-12"
    >
      <motion.div
        className="mb-24"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#00d4aa] text-xs tracking-[0.2em] uppercase mb-5">
          {language === "no" ? "SLIK FUNGERER DET" : "HOW IT WORKS"}
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 4vw, 4rem)",
            fontWeight: 300,
            color: "#dce8f0",
          }}
        >
          {language === "no" ? "Kom i gang på 5 minutter." : "Set up in 5 minutes."}
          <br />
          {language === "no" ? "Nye leads hver morgen." : "Leads every morning."}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {steps.map((step, i) => (
          <Step key={i} step={step} delay={i * 0.15} language={language} />
        ))}
      </div>
    </section>
  );
}
