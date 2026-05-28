"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function CookieBanner() {
  const { language } = useLanguage();
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("leados_cookie_consent");
    if (consent === "accepted" || consent === "declined") {
      setAccepted(true);
    } else {
      setAccepted(false);
    }
  }, []);

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0e1822] border-t border-[#152232] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-6 flex-wrap">
        <p className="text-[#7a9ab0] text-sm">
          {language === "no"
            ? "Vi bruker informasjonskapsler for å forbedre opplevelsen din og analysere trafikk. Ved å fortsette godtar du vår "
            : "We use cookies to improve your experience and analyse site traffic. By continuing you agree to our "}
          <a
            href="/privacy"
            className="text-[#00d4aa] hover:underline"
          >
            {language === "no" ? "Personvernerklæring" : "Privacy Policy"}
          </a>{" "}
          {language === "no" ? " og " : "and "}
          <a
            href="/terms"
            className="text-[#00d4aa] hover:underline"
          >
            {language === "no" ? "Tjenestevilkår" : "Terms of Service"}
          </a>
          .
        </p>

        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => {
              localStorage.setItem("leados_cookie_consent", "declined");
              setAccepted(true);
            }}
            className="border border-[#152232] text-[#4a6272] text-sm px-4 py-2 rounded-md hover:border-[#0e1822] hover:text-[#7a9ab0] transition-colors duration-200"
          >
            {language === "no" ? "Avslå" : "Decline"}
          </button>
          <button
            onClick={() => {
              localStorage.setItem("leados_cookie_consent", "accepted");
              setAccepted(true);
            }}
            className="bg-[#00d4aa] text-[#040810] font-medium text-sm px-5 py-2 rounded-md hover:bg-[#00a888] transition-colors duration-200"
          >
            {language === "no" ? "Godta alle" : "Accept all"}
          </button>
        </div>
      </div>
    </div>
  );
}
