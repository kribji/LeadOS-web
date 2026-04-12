export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#040810] text-[#dce8f0]">
      <header className="h-16 flex-shrink-0 border-b border-[#0e1822] bg-[#040810]/95 backdrop-blur-sm z-40" />
      <div className="flex-1 min-h-0">{children}</div>
    </div>
  );
}
