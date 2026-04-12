"use client";

import { useState } from "react";
import {
  AlertCircle,
  Copy,
  X,
  ExternalLink,
  Mail,
  Building2,
  TrendingUp,
} from "lucide-react";

export interface Lead {
  id: string;
  company_name: string;
  website?: string;
  fit_score?: number;
  signal?: string;
  contact_name?: string;
  contact_title?: string;
  contact_email?: string;
  contact_linkedin?: string;
  email_draft?: string;
}

const isGenericEmail = (email: string): boolean => {
  const genericPrefixes = [
    "info@",
    "contact@",
    "hello@",
    "support@",
    "admin@",
    "office@",
    "mail@",
    "team@",
    "post@",
    "hei@",
    "firmapost@",
    "noreply@",
    "no-reply@",
    "donotreply@",
  ];
  return genericPrefixes.some((prefix) =>
    email.toLowerCase().startsWith(prefix)
  );
};

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded text-[#4a6272] hover:text-[#00d4aa] transition-colors duration-150"
      title="Copy"
    >
      <Copy size={13} />
      {copied && (
        <span className="sr-only">Copied</span>
      )}
    </button>
  );
}

function ScoreRing({ score }: { score: number }) {
  const r = 18;
  const circumference = 2 * Math.PI * r;
  const filled = (score / 100) * circumference;

  return (
    <svg width="48" height="48" viewBox="0 0 48 48" className="flex-shrink-0">
      <circle cx="24" cy="24" r={r} fill="none" stroke="#152232" strokeWidth="2" />
      <circle
        cx="24"
        cy="24"
        r={r}
        fill="none"
        stroke={score >= 80 ? "#00d4aa" : score >= 60 ? "#60a5fa" : "#f59e0b"}
        strokeWidth="2"
        strokeDasharray={`${filled} ${circumference}`}
        strokeLinecap="round"
        transform="rotate(-90 24 24)"
      />
      <text x="24" y="28" textAnchor="middle" fontSize="11" fontWeight="900" fill="#dce8f0">
        {score}
      </text>
    </svg>
  );
}

function LeadModal({
  lead,
  onClose,
}: {
  lead: Lead;
  onClose: () => void;
}) {
  const hasEmail = !!lead.contact_email;
  const emailIsGeneric = hasEmail && isGenericEmail(lead.contact_email!);
  const showEmail = hasEmail && !emailIsGeneric;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#040810]/80 backdrop-blur-sm" />

      <div
        className="relative bg-[#0e1822] border border-[#152232] rounded-lg w-full max-w-xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-[#152232]">
          <div className="flex items-center gap-3">
            {lead.fit_score !== undefined && (
              <ScoreRing score={lead.fit_score} />
            )}
            <div>
              <h2 className="text-[#dce8f0] font-semibold text-base leading-tight">
                {lead.company_name}
              </h2>
              {lead.website && (
                <a
                  href={`https://${lead.website.replace(/^https?:\/\//, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a6272] text-xs hover:text-[#00d4aa] flex items-center gap-1 mt-0.5"
                >
                  {lead.website}
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#4a6272] hover:text-[#dce8f0] transition-colors duration-150 -mt-1"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5">
          {/* Signal */}
          {lead.signal && (
            <div>
              <p className="text-[10px] uppercase tracking-wider text-[#4a6272] mb-2">
                Buying Signal
              </p>
              <div className="flex items-start gap-2">
                <TrendingUp size={14} className="text-[#00d4aa] mt-0.5 flex-shrink-0" />
                <p className="text-[#7a9ab0] text-sm leading-relaxed">
                  {lead.signal}
                </p>
              </div>
            </div>
          )}

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#4a6272] mb-2 mt-4">
              Contact
            </p>

            {lead.contact_name && (
              <p className="text-[#dce8f0] text-sm font-medium">
                {lead.contact_name}
              </p>
            )}
            {lead.contact_title && (
              <p className="text-[#7a9ab0] text-xs mt-0.5">{lead.contact_title}</p>
            )}

            {/* Email rendering */}
            {showEmail && (
              <div className="flex items-center gap-2 mt-2">
                <Mail size={13} className="text-[#4a6272] flex-shrink-0" />
                <span className="text-[#7a9ab0] text-sm">
                  {lead.contact_email}
                </span>
                <CopyButton value={lead.contact_email!} />
              </div>
            )}

            {emailIsGeneric && (
              <div className="flex items-start gap-2 mt-2">
                <AlertCircle size={14} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#7a9ab0] text-sm">
                    No direct contact found
                  </p>
                  <p className="text-[#4a6272] text-xs mt-0.5">
                    Generic email filtered out — try searching LinkedIn for the
                    right person.
                  </p>
                </div>
              </div>
            )}

            {lead.contact_linkedin && (
              <a
                href={lead.contact_linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4aa] text-xs hover:underline mt-1 inline-flex items-center gap-1"
              >
                View on LinkedIn
                <ExternalLink size={10} />
              </a>
            )}
          </div>

          {/* Email draft */}
          {lead.email_draft && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] uppercase tracking-wider text-[#4a6272]">
                  Outreach Draft
                </p>
                <CopyButton value={lead.email_draft} />
              </div>
              <div className="bg-[#040810] border border-[#152232] rounded-md px-4 py-3">
                <p className="text-[#7a9ab0] text-sm leading-relaxed whitespace-pre-wrap">
                  {lead.email_draft}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LeadCard({ lead }: { lead: Lead }) {
  const [open, setOpen] = useState(false);

  const showEmailInCard =
    !!lead.contact_email && !isGenericEmail(lead.contact_email);

  return (
    <>
      <div
        className="bg-[#0e1822] border border-[#152232] rounded-lg px-5 py-4 hover:border-[#00d4aa]/30 transition-all duration-200 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center gap-3">
          {lead.fit_score !== undefined && (
            <ScoreRing score={lead.fit_score} />
          )}

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <Building2 size={13} className="text-[#4a6272] flex-shrink-0" />
              <p className="text-[#dce8f0] font-semibold text-sm truncate">
                {lead.company_name}
              </p>
            </div>

            {lead.signal && (
              <p className="text-[#4a6272] text-xs mt-1 truncate">
                {lead.signal}
              </p>
            )}

            {/* Only show email if it's not generic */}
            {showEmailInCard && (
              <div className="flex items-center gap-1.5 mt-1.5">
                <Mail size={11} className="text-[#4a6272] flex-shrink-0" />
                <p className="text-[#7a9ab0] text-xs truncate">
                  {lead.contact_email}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {open && <LeadModal lead={lead} onClose={() => setOpen(false)} />}
    </>
  );
}
