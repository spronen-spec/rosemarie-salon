import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import HighlightsSection from "@/components/HighlightsSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationMapSection from "@/components/LocationMapSection";
import ParkingSection from "@/components/ParkingSection";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { FRESHA_URL, WHATSAPP_URL } from "@/data/services";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <Hero />
      <ServicesSection />
      <HighlightsSection />
      <GallerySection />
      <TeamSection />
      <ReviewsSection />
      <div className="lg:flex lg:items-stretch">
        <LocationMapSection className="lg:w-1/2 lg:flex-shrink-0" />
        <ParkingSection className="lg:w-1/2" />
      </div>
      <FAQSection />
      <AboutSection />
      <Footer />
      <WhatsAppFab />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/95 backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2 p-3">
          <a
            href={FRESHA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-sm bg-primary px-4 py-3 text-center font-body text-[10px] font-medium tracking-[0.2em] uppercase text-primary-foreground"
          >
            Book Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-sm border border-border bg-secondary px-4 py-3 text-center font-body text-[10px] font-medium tracking-[0.2em] uppercase text-foreground"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
