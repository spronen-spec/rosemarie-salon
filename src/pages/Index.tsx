import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import ReviewsSection from "@/components/ReviewsSection";
import InstagramSection from "@/components/InstagramSection";
import FAQSection from "@/components/FAQSection";
import ParkingSection from "@/components/ParkingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <TeamSection />
      <ReviewsSection />
      <InstagramSection />
      <FAQSection />
      <ParkingSection />
      <CtaSection />
      <Footer />
      <WhatsAppFab />
    </div>
  );
};

export default Index;
