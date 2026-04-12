import Nav from "@/components/Nav";
import DemoSection from "@/components/DemoSection";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import SignalsStrip from "@/components/SignalsStrip";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#040810]">
      <Nav />
      <DemoSection />
      <Hero />
      <LogoBar />
      <SignalsStrip />
      <HowItWorks />
      <Features />
      <Pricing />
      <FAQ />
      <Waitlist />
      <Footer />
    </main>
  );
}
