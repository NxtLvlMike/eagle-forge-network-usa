
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturesSection />
        <TechnologySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
