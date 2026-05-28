"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

function FAQItem({
  faq,
  index,
}: {
  faq: { q: string; a: string };
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-[#0e1822] border border-[#152232] rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.07 }}
      viewport={{ once: true }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex justify-between items-center px-6 py-5 cursor-pointer text-left"
      >
        <span className="text-[#dce8f0] font-medium text-base pr-4">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className="text-[#4a6272] flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#152232] px-6 pt-4 pb-5">
              <p className="text-[#7a9ab0] text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { language } = useLanguage();
  const faqs = [
    {
      q:
        language === "no"
          ? "Hvordan er LeadOS annerledes enn Apollo eller LinkedIn Sales Navigator?"
          : "How is LeadOS different from Apollo or LinkedIn Sales Navigator?",
      a:
        language === "no"
          ? "Apollo og LinkedIn gir deg en database og et søkefelt. Du må fortsatt gjøre jakten selv. LeadOS gjør jakten for deg. Vi finner selskaper som faktisk viser tegn på behov, scorer dem mot ICP-en din og skriver første e-post."
          : "Apollo and LinkedIn give you a database and a search bar. You still have to do the hunting. LeadOS does the hunting for you. It finds companies that are actually showing signs of needing what you sell, scores them against your ICP, and writes the first email. You go from nothing to a personalised draft in under a minute.",
    },
    {
      q:
        language === "no"
          ? "Hvilke kjøpssignaler sporer LeadOS?"
          : "What buying signals does LeadOS track?",
      a:
        language === "no"
          ? "LeadOS sporer selskaper som vokser raskt, ansetter salgsroller, har fått ny ledelse, hentet finansiering, ekspanderer til nye markeder eller aktivt vurderer nye løsninger."
          : "LeadOS tracks companies that are scaling fast, hiring sales roles, recently changed leadership, raised funding, expanded to new locations, or are actively evaluating new solutions. These are the moments when a company is most likely to say yes to something new.",
    },
    {
      q:
        language === "no"
          ? "Fungerer dette for min bransje? Jeg er ikke i tech."
          : "Will this work for my industry? I'm not in tech.",
      a:
        language === "no"
          ? "Ja. LeadOS fungerer for alle B2B-bedrifter. Du limer inn nettsiden din, så finner LeadOS ut hva du selger og hvem som kjøper det, og bygger søket derfra."
          : "Yes. LeadOS works for any B2B business. It doesn't care if you sell logistics software, recruitment services, or industrial equipment. You paste your website, LeadOS figures out what you sell and who buys it, and builds the search around that. You don't have to fit into a template.",
    },
    {
      q:
        language === "no"
          ? "Hvor nøyaktige er kontaktopplysningene?"
          : "How accurate are the contact details?",
      a:
        language === "no"
          ? "LeadOS finner verifiserte e-poster, telefonnumre og LinkedIn-profiler for riktig beslutningstaker i hvert selskap. Generiske info@-eposter filtreres bort automatisk."
          : "LeadOS finds verified emails, phone numbers and LinkedIn profiles for the specific decision maker matching your target role at each company. We use enterprise-grade contact data providers to maximise accuracy. Generic info@ emails are filtered out automatically.",
    },
    {
      q: language === "no" ? "Finnes det en gratis prøveperiode?" : "Is there a free trial?",
      a:
        language === "no"
          ? "Ingen gratis prøveperiode, men alle planer har 14 dagers pengene-tilbake-garanti. Hvis LeadOS ikke leverer verdi i løpet av de første to ukene, refunderer vi deg."
          : "No free trial, but every plan has a 14-day money-back guarantee. If you sign up and LeadOS doesn't deliver leads worth the cost in the first two weeks, just email us and we'll refund you. No forms, no hoops. We'd rather back it with a guarantee than give you a watered-down trial.",
    },
  ];
  return (
    <section
      id="faq"
      className="py-20 md:py-32 max-w-4xl mx-auto px-4 md:px-12"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#00d4aa] text-xs tracking-[0.2em] uppercase mb-4">
          FAQ
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "#dce8f0",
          }}
        >
          {language === "no" ? "Vanlige spørsmål." : "Common questions."}
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <FAQItem key={i} faq={faq} index={i} />
        ))}
      </div>
    </section>
  );
}
