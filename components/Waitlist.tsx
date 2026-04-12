"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    window.location.href = `mailto:hello@leados.tech?subject=Founding%20Team%20Waitlist&body=I%20want%20to%20join%20the%20LeadOS%20founding%20team.%20My%20email%20is%3A%20${encodeURIComponent(email)}`;
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-36 px-12 bg-[#040810]">
      <motion.div
        className="max-w-2xl mx-auto text-center bg-[#002820] border border-[#00422e] rounded-lg px-12 py-16"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-[#00d4aa] text-xs tracking-[0.2em] uppercase mb-8">
          FOUNDING TEAM OFFER
        </p>

        <h2
          className="text-[#dce8f0] font-light mb-5"
          style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >
          Get 40% off. Forever.
        </h2>

        <p className="text-[#7a9ab0] text-base mb-2 leading-relaxed">
          The first 10 teams to join get 40% off for life —
          <br />
          on any plan, forever. Starting from $39/mo.
        </p>

        {/* Counter */}
        <div className="inline-flex items-center gap-2 mb-10 mt-4">
          <span className="w-2 h-2 rounded-full bg-[#00d4aa] animate-pulse" />
          <span className="text-[#00d4aa] text-sm font-medium">
            🔥 7 of 10 founding spots remaining
          </span>
        </div>

        {/* Form */}
        {submitted ? (
          <p className="text-[#00d4aa] font-medium text-base">
            ✓ You&apos;re on the list! We&apos;ll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-[#040810] border border-[#152232] rounded-md px-5 py-3.5 text-[#dce8f0] text-sm placeholder:text-[#4a6272] focus:border-[#00d4aa] focus:outline-none transition-colors duration-200"
            />
            <button
              type="submit"
              className="bg-[#00d4aa] text-[#040810] font-medium px-6 py-3.5 rounded-md hover:bg-[#00a888] transition-colors duration-200 whitespace-nowrap text-sm"
            >
              Join the founding team →
            </button>
          </form>
        )}

        {/* Plan pills */}
        <div className="flex gap-2 justify-center flex-wrap mt-6">
          {["Solo from $49/mo", "Pro from $149/mo", "Team from $299/mo"].map(
            (pill) => (
              <span
                key={pill}
                className="bg-[#002820] border border-[#00422e] rounded-full px-3 py-1 text-[10px] text-[#00d4aa] font-medium"
              >
                {pill}
              </span>
            )
          )}
        </div>
        <p className="text-[#4a6272] text-[10px] mt-2 text-center">
          Save 20% with annual billing
        </p>

        <p className="text-[#4a6272] text-xs mt-3 text-center">
          14-day money back guarantee on all plans
        </p>
      </motion.div>
    </section>
  );
}
