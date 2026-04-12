export default function Footer() {
  return (
    <footer className="border-t border-[#0e1822] py-10 px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        {/* Left */}
        <div>
          <span className="font-bold tracking-widest text-sm">
            <span className="text-[#dce8f0]">LEAD</span>
            <span className="text-[#00d4aa]">OS</span>
          </span>
          <p className="text-[#4a6272] text-xs mt-1">
            © 2026 LeadOS. All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex gap-8">
          <a
            href="/privacy"
            className="text-[#4a6272] text-xs hover:text-[#7a9ab0] transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="text-[#4a6272] text-xs hover:text-[#7a9ab0] transition-colors duration-200"
          >
            Terms of Service
          </a>
          <a
            href="mailto:hello@leados.tech"
            className="text-[#4a6272] text-xs hover:text-[#00d4aa] transition-colors duration-200"
          >
            hello@leados.tech
          </a>
        </div>
      </div>
    </footer>
  );
}
