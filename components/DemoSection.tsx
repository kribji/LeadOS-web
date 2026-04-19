"use client";

export default function DemoSection() {
  return (
    <section className="pt-4 md:pt-6 bg-[#040810] w-full overflow-hidden px-4 md:px-0">
      <div className="w-full flex justify-center">
        <div
          className="w-full md:max-w-[70%] md:mx-auto rounded-lg overflow-hidden bg-[#080e12] shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-1 ring-[#152232]/80"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://player.vimeo.com/video/1182916233?badge=0&autopause=0&player_id=0&app_id=58479"
              title="LeadOS Demo"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full rounded-lg"
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
