import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import ParkingSection from "@/components/ParkingSection";
import CtaSection from "@/components/CtaSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <GallerySection />
      <TeamSection />
      <ReviewsSection />
      <FAQSection />
      <ParkingSection />
      <CtaSection />
      <AboutSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
