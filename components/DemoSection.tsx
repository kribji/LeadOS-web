"use client";

export default function DemoSection() {
  return (
    <section className="pt-[58px] bg-[#040810] w-full overflow-hidden">
      <div className="w-full bg-[#0e1822]">
        <div className="w-full" style={{ backgroundColor: "#080e12" }}>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1182916233?badge=0&autopause=0&player_id=0&app_id=58479"
              title="LeadOS Demo"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
