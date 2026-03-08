import { Toaster } from "@/components/ui/sonner";
import { useEffect } from "react";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import InstagramBand from "./components/InstagramBand";
import Navigation from "./components/Navigation";
import PhotoStrip from "./components/PhotoStrip";
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import { useActor } from "./hooks/useActor";

export default function App() {
  const { actor } = useActor();

  // Track visit on mount
  useEffect(() => {
    if (actor) {
      actor.incrementVisitCounter().catch(() => {
        // silently ignore
      });
    }
  }, [actor]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--ink)" }}>
      <Navigation />
      <main>
        <HeroSection />
        <PortfolioSection />
        <PhotoStrip />
        <ServicesSection />
        <AboutSection />
        <InstagramBand />
        <ContactSection actor={actor} />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
