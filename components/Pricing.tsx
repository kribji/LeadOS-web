"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Solo",
    monthlyPrice: "$49",
    annualPrice: "$39",
    priceSuffix: "/month",
    features: [
      "1 user",
      "50 leads / month",
      "3 agent runs / month",
      "AI outreach drafts",
      "Email support",
    ],
    featured: false,
    enterprise: false,
    checkoutUrl: "https://leados.lemonsqueezy.com/checkout/buy/5ea24798-b23c-4736-8149-460f292de664",
  },
  {
    name: "Pro",
    monthlyPrice: "$149",
    annualPrice: "$119",
    priceSuffix: "/month",
    features: [
      "Up to 3 users",
      "300 leads / month",
      "Unlimited agent runs",
      "Full contact enrichment",
      "AI reply analysis",
      "Priority support",
    ],
    featured: true,
    badge: "Most popular",
    enterprise: false,
    checkoutUrl: "https://leados.lemonsqueezy.com/checkout/buy/4df0348e-f825-4d5f-9176-a14bbf6806f6",
  },
  {
    name: "Team",
    monthlyPrice: "$299",
    annualPrice: "$239",
    priceSuffix: "/month",
    features: [
      "Up to 10 users",
      "1,000 leads / month",
      "Everything in Pro",
      "Onboarding call",
    ],
    featured: false,
    enterprise: false,
    checkoutUrl: "https://leados.lemonsqueezy.com/checkout/buy/1248b228-29ab-4bb4-9d4c-d87598139114",
  },
  {
    name: "Enterprise",
    monthlyPrice: "Custom",
    annualPrice: "Custom",
    priceSuffix: "pricing",
    features: [
      "Unlimited users",
      "Unlimited leads",
      "Everything in Team",
      "CRM integrations",
      "API access",
      "Dedicated account manager",
      "Custom contract + SLA",
    ],
    featured: false,
    enterprise: true,
    checkoutUrl: "mailto:hello@leados.tech?subject=LeadOS%20Enterprise%20Enquiry",
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-36 max-w-7xl mx-auto px-12">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#4a6272] text-xs uppercase tracking-[0.2em] mb-5">
          PRICING
        </p>
        <h2
          style={{
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            fontWeight: 300,
            color: "#dce8f0",
          }}
        >
          Simple pricing.
        </h2>
        <p className="text-[#7a9ab0] text-base mt-4">
          14-day money back guarantee if LeadOS doesn&apos;t deliver.
        </p>

        {/* Annual toggle */}
        <div className="flex items-center justify-center gap-3 mt-10 mb-0">
          <span className="text-[#7a9ab0] text-sm">Monthly</span>

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
            <span className="text-[#7a9ab0] text-sm">Annual</span>
            <span className="bg-[#002820] border border-[#00422e] text-[#00d4aa] text-xs px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {plans.map((plan, i) => {
          const price = annual ? plan.annualPrice : plan.monthlyPrice;
          const isCustom = price === "Custom";

          return (
            <motion.div
              key={i}
              className={`rounded-lg px-8 py-10 relative flex flex-col ${
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
                    pricing
                  </span>
                )}
              </div>

              {annual && !isCustom && (
                <p className="text-[#4a6272] text-xs mt-1">billed annually</p>
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
                  Get started
                </a>
              ) : plan.enterprise ? (
                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-md border border-[#00d4aa] text-[#00d4aa] text-sm font-medium text-center hover:bg-[#002820] transition-colors duration-200"
                >
                  Contact us
                </a>
              ) : (
                <a
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-md border border-[#152232] text-[#7a9ab0] text-sm font-medium text-center hover:border-[#00d4aa] hover:text-[#dce8f0] transition-all duration-200"
                >
                  Get started
                </a>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Trust signals */}
      <div className="flex justify-center gap-8 mt-10 flex-wrap">
        {[
          "14-day money back guarantee",
          "Cancel any time",
        ].map((signal) => (
          <span key={signal} className="text-[#4a6272] text-sm flex items-center gap-1.5">
            <span className="text-[#00d4aa]">✓</span>
            {signal}
          </span>
        ))}
      </div>
    </section>
  );
}
