export default function DiscoverPage() {
  return (
    <div className="flex h-[calc(100vh-64px)] overflow-hidden">
      {/* Left: filters — scrolls independently, fixed width */}
      <aside className="w-72 flex-shrink-0 h-full overflow-y-auto border-r border-[#0e1822] bg-[#040810] px-4 py-6">
        <p className="text-[#4a6272] text-xs uppercase tracking-wider mb-4">
          Filters
        </p>
        {/* Filter controls go here */}
      </aside>

      {/* Right: results — independent scroll */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-y-auto pb-8">
        <div className="px-6 py-6 flex flex-col gap-4">
          <p className="text-[#dce8f0] font-semibold text-lg">Leads</p>
          {/* Lead cards / list — no max-h on this container */}
        </div>
      </div>
    </div>
  );
}
