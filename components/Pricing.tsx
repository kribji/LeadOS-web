"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import EnterpriseContactModal from "@/components/EnterpriseContactModal";
import { useLanguage } from "@/components/LanguageContext";

export default function Pricing() {
  const { language } = useLanguage();
  const [annual, setAnnual] = useState(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);
  const plans = [
    {
      name: "Solo",
      monthlyPrice: "$49",
      annualPrice: "$39",
      priceSuffix: language === "no" ? "/måned" : "/month",
      features:
        language === "no"
          ? [
              "3 agent-kjøringer / måned",
              "Opptil 50 leads",
              "AI outreach-utkast",
              "E-postberikelse",
            ]
          : [
              "3 agent runs / month",
              "Up to 50 leads",
              "AI outreach drafts",
              "Email enrichment",
            ],
      featured: false,
      enterprise: false,
      checkoutUrl:
        "https://leados.lemonsqueezy.com/checkout/buy/595b34b2-38c6-4831-8f7a-c18383635fdc",
    },
    {
      name: "Pro",
      monthlyPrice: "$149",
      annualPrice: "$119",
      priceSuffix: language === "no" ? "/måned" : "/month",
      features:
        language === "no"
          ? [
              "30 agent-kjøringer / måned",
              "Opptil 300 leads",
              "Alt i Solo",
              "Telefonberikelse",
              "AI svaranalyse",
              "Prioritert support",
            ]
          : [
              "30 agent runs / month",
              "Up to 300 leads",
              "Everything in Solo",
              "Phone enrichment",
              "AI reply analysis",
              "Priority support",
            ],
      featured: true,
      badge: language === "no" ? "Mest populær" : "Most popular",
      enterprise: false,
      checkoutUrl:
        "https://leados.lemonsqueezy.com/checkout/buy/c9ace6ca-19da-4088-a584-2e688934001e",
    },
    {
      name: language === "no" ? "Premium" : "Premium",
      monthlyPrice: "$299",
      annualPrice: "$239",
      priceSuffix: language === "no" ? "/måned" : "/month",
      features:
        language === "no"
          ? [
              "100 agent-kjøringer / måned",
              "Opptil 1 000 leads",
              "Alt i Pro",
              "Onboarding-samtale",
            ]
          : [
              "100 agent runs / month",
              "Up to 1,000 leads",
              "Everything in Pro",
              "Onboarding call",
            ],
      featured: false,
      enterprise: false,
      checkoutUrl:
        "https://leados.lemonsqueezy.com/checkout/buy/c60091ff-6057-4ede-b037-a349fe310b60",
    },
    {
      name: "Enterprise",
      monthlyPrice: language === "no" ? "Tilpasset" : "Custom",
      annualPrice: language === "no" ? "Tilpasset" : "Custom",
      priceSuffix: language === "no" ? "pris" : "pricing",
      features:
        language === "no"
          ? [
              "Ubegrensede brukere",
              "Ubegrensede leads",
              "Alt i Premium",
              "CRM-integrasjoner",
              "API-tilgang",
              "Dedikert kundekontakt",
              "Tilpasset avtale + SLA",
            ]
          : [
              "Unlimited users",
              "Unlimited leads",
              "Everything in Premium",
              "CRM integrations",
              "API access",
              "Dedicated account manager",
              "Custom contract + SLA",
            ],
      featured: false,
      enterprise: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 md:py-36 max-w-7xl mx-auto px-4 md:px-12 overflow-x-hidden"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#4a6272] text-xs uppercase tracking-[0.2em] mb-5">
          {language === "no" ? "PRISER" : "PRICING"}
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "#dce8f0",
          }}
        >
          {language === "no" ? "Enkle priser." : "Simple pricing."}
        </h2>
        <p className="text-[#7a9ab0] text-base mt-4">
          {language === "no"
            ? "14 dagers pengene-tilbake-garanti hvis LeadOS ikke leverer."
            : "14-day money back guarantee if LeadOS doesn&apos;t deliver."}
        </p>

        {/* Annual toggle */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 mb-0 max-w-full">
          <span className="text-[#7a9ab0] text-sm">
            {language === "no" ? "Månedlig" : "Monthly"}
          </span>

          <button
            onClick={() => setAnnual((v) => !v)}
            className="relative flex-shrink-0 cursor-pointer transition-colors duration-300"
            style={{
              width: '44px',
              height: '24px',
              borderRadius: '12px',
              backgroundColor: annual ? "#00d4aa" : "#152232",
              border: 'none',
              padding: 0,
            }}
            aria-label="Toggle annual billing"
          >
            <span
              className="absolute bg-white transition-transform duration-300"
              style={{
                width: '18px',
                height: '18px',
                borderRadius: '50%',
                top: '3px',
                left: '3px',
                transform: annual ? "translateX(20px)" : "translateX(0px)",
              }}
            />
          </button>

          <div className="flex items-center gap-1.5">
            <span className="text-[#7a9ab0] text-sm">
              {language === "no" ? "Årlig" : "Annual"}
            </span>
            <span className="bg-[#002820] border border-[#00422e] text-[#00d4aa] text-xs px-2 py-0.5 rounded-full">
              {language === "no" ? "Spar 20%" : "Save 20%"}
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-7xl mx-auto min-w-0">
        {plans.map((plan, i) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice;
          const isCustom = price === "Custom" || price === "Tilpasset";

          return (
            <motion.div
              key={i}
              className={`rounded-lg px-4 py-8 md:px-8 md:py-10 relative flex flex-col min-w-0 ${
                plan.featured
                  ? "bg-[#002820] border-2 border-[#00d4aa]"
                  : "bg-[#0e1822] border border-[#152232]"
              }`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00d4aa] text-[#040810] text-xs font-semibold px-4 py-1 rounded-sm whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <p className="text-[#4a6272] text-xs uppercase tracking-wider mb-6">
                {plan.name}
              </p>

              <div className="flex items-baseline flex-wrap gap-x-1">
                <span className="text-4xl font-medium text-[#dce8f0]">
                  {price}
                </span>
                {!isCustom && (
                  <span className="text-[#4a6272] text-sm">
                    {plan.priceSuffix}
                  </span>
                )}
                {isCustom && (
                  <span className="text-[#4a6272] text-sm">
                    {language === "no" ? "pris" : "pricing"}
                  </span>
                )}
              </div>

              {annual && !isCustom && (
                <p className="text-[#4a6272] text-xs mt-1">
                  {language === "no" ? "faktureres årlig" : "billed annually"}
                </p>
              )}

              <div className="border-t border-[#152232] my-6" />

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="text-[#7a9ab0] text-sm flex gap-2">
                    <span className="text-[#00d4aa] flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.featured ? (
                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#00d4aa] text-[#040810] font-medium w-full py-3 rounded-md hover:bg-[#00a888] transition-colors duration-200 text-sm text-center"
                >
                  {language === "no" ? "Kom i gang" : "Get started"}
                </a>
              ) : plan.enterprise ? (
                <button
                  type="button"
                  onClick={() => setEnterpriseModalOpen(true)}
                  className="block w-full py-3 rounded-md border border-[#00d4aa] text-[#00d4aa] text-sm font-medium text-center hover:bg-[#002820] transition-colors duration-200"
                >
                  {language === "no" ? "Kontakt oss" : "Contact us"}
                </button>
              ) : (
                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-md border border-[#152232] text-[#7a9ab0] text-sm font-medium text-center hover:border-[#00d4aa] hover:text-[#dce8f0] transition-all duration-200"
                >
                  {language === "no" ? "Kom i gang" : "Get started"}
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Trust signals */}
      <div className="flex justify-center gap-8 mt-10 flex-wrap">
        {[
          language === "no"
            ? "14 dagers pengene-tilbake-garanti"
            : "14-day money back guarantee",
          language === "no" ? "Avslutt når som helst" : "Cancel any time",
        ].map((signal) => (
          <span key={signal} className="text-[#4a6272] text-sm flex items-center gap-1.5">
            <span className="text-[#00d4aa]">✓</span>
            {signal}
          </span>
        ))}
      </div>

      <EnterpriseContactModal
        open={enterpriseModalOpen}
        onClose={() => setEnterpriseModalOpen(false)}
      />
    </section>
  );
}
