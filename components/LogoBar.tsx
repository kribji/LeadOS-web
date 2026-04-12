export default function LogoBar() {
  return (
    <section className="border-y border-[#0e1822] py-16 bg-[#040810]">
      <div className="max-w-7xl mx-auto px-12 flex items-center justify-center gap-16 flex-wrap">
        <div className="text-center">
          <p className="text-[#dce8f0] text-3xl font-light">5 min</p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            to set up
          </p>
        </div>

        <div className="hidden md:block w-px h-8 bg-[#152232]" />

        <div className="text-center">
          <p className="text-[#dce8f0] text-3xl font-light">Any industry</p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            works for all B2B
          </p>
        </div>

        <div className="hidden md:block w-px h-8 bg-[#152232]" />

        <div className="text-center">
          <p className="text-[#dce8f0] text-3xl font-light">Daily</p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            fresh leads every morning
          </p>
        </div>

        <div className="hidden md:block w-px h-8 bg-[#152232]" />

        <div className="text-center">
          <p className="text-[#00d4aa] text-3xl font-light">100%</p>
          <p className="text-[#4a6272] text-xs uppercase tracking-wider mt-1">
            human approved
          </p>
        </div>
      </div>
    </section>
  );
}
