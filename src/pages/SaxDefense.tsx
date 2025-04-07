
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PlatformOverview from "@/components/sax/PlatformOverview";
import CapabilitiesSection from "@/components/sax/CapabilitiesSection";
import ProductsSection from "@/components/sax/ProductsSection";
import SdkSection from "@/components/sax/SdkSection";
import InvestorSection from "@/components/sax/InvestorSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SaxDefense = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/81db5763-0764-4f56-b0ff-94d1ed111fe0.png" 
              alt="SAX Defense Background" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-military-navy/70 to-military-navy"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <Badge className="mb-6 mx-auto bg-military-red">SAX CORP Defense</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white eagle-title mb-6">
              Future-Ready <br /> Autonomous Defense
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Revolutionary AI-powered defense systems unifying battlefield awareness across land, sea, air, and space
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-military-red hover:bg-military-red/90 text-white px-8 py-6 text-lg">
                Discover Our Solutions
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Investor Relations
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-0 right-0 text-center">
            <div className="animate-bounce">
              <svg className="h-6 w-6 text-white mx-auto" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>
        
        <PlatformOverview />
        <CapabilitiesSection />
        <ProductsSection />
        <SdkSection />
        <InvestorSection />
        
        {/* CTA Section */}
        <section className="py-20 bg-military-navy text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold eagle-title mb-6">
              Ready to Transform Your Defense Capabilities?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Contact our team to schedule a demonstration of our revolutionary NEXUS™ platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-military-red hover:bg-military-red/90 text-white px-8 py-6 text-lg">
                Schedule Demonstration
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SaxDefense;
