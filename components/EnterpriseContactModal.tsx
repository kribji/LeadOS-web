"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function EnterpriseContactModal({ open, onClose }: Props) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSuccess(false);
      setError(null);
      setSubmitting(false);
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/enterprise-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      setSubmittedEmail(email);
      setSuccess(true);
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-[#040810] border border-[#152232] rounded-md px-4 py-3 text-[#dce8f0] text-sm placeholder:text-[#4a6272] focus:border-[#00d4aa] focus:outline-none transition-colors duration-200";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-[#040810]/80 backdrop-blur-sm" />

      <div
        className="relative bg-[#0e1822] border border-[#152232] rounded-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between px-6 py-5 border-b border-[#152232]">
          <h2 className="text-[#dce8f0] font-medium text-lg pr-8">
            Get in touch about Enterprise
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 text-[#4a6272] hover:text-[#dce8f0] transition-colors duration-150"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {success ? (
          <div className="px-6 py-8 text-center">
            <p className="text-[#00d4aa] font-medium text-base mb-2">Message sent</p>
            <p className="text-[#7a9ab0] text-sm">
              We&apos;ll get back to you at {submittedEmail} soon.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-6 w-full py-3 rounded-md border border-[#152232] text-[#7a9ab0] text-sm font-medium hover:border-[#00d4aa] hover:text-[#dce8f0] transition-all duration-200"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              aria-label="Name"
              className={inputClass}
            />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company"
              required
              aria-label="Company"
              className={inputClass}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              aria-label="Email"
              className={inputClass}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message (optional)"
              rows={4}
              aria-label="Message (optional)"
              className={`${inputClass} resize-none`}
            />
            {error && (
              <p className="text-red-400 text-sm" role="alert">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-md bg-[#00d4aa] text-[#040810] font-medium text-sm hover:bg-[#00a888] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
