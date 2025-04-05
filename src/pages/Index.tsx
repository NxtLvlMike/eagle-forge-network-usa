
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import TechnologySection from "@/components/TechnologySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturesSection />
        <TechnologySection />
        
        {/* Additional BCI Showcase Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 mx-auto block w-fit bg-military-navy">Advanced Equipment</Badge>
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
              Military-Grade Neural Interface Technology
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/90b3bab2-c8dd-46e8-9711-5aefff72972d.png" 
                  alt="Military HoloLens Combat Helmet" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Combat AR Integration</h3>
                  <p className="text-gray-600 mb-4">Military-grade Augmented Reality system integrated with tactical combat helmet for enhanced battlefield awareness.</p>
                  <Button className="w-full bg-military-navy hover:bg-military-navy/90 text-white font-bold">View Specifications</Button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <img 
                  src="/lovable-uploads/bb6363e7-519a-4dfa-a5b7-797abf33ec32.png" 
                  alt="VR Tactical Training" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Tactical VR Training</h3>
                  <p className="text-gray-600 mb-4">Immersive Virtual Reality training systems for simulated combat scenarios with neural monitoring feedback.</p>
                  <Button className="w-full bg-military-navy hover:bg-military-navy/90 text-white font-bold">Training Programs</Button>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md lg:col-span-1 md:col-span-2">
                <img 
                  src="/lovable-uploads/74dea0d6-de3c-4510-9bc5-ca04cced7710.png" 
                  alt="Brain EEG Monitoring" 
                  className="w-full h-64 object-cover object-top"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">BrainAccess EEG System</h3>
                  <p className="text-gray-600 mb-4">AI-enabled electroencephalography and brain-computer interface technology with military-grade specifications.</p>
                  <Button className="w-full bg-military-navy hover:bg-military-navy/90 text-white font-bold">Technical Details</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
