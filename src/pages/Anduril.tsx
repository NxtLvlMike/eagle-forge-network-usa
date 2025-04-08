
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, Award, Check, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Anduril = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-military-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Badge className="mb-4 bg-military-red">Military Technology</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 eagle-title">
                  Microsoft HoloLens IVAS: <br />
                  A $21.9 Billion Military Revolution
                </h1>
                <p className="text-lg mb-8">
                  The future of warfare is here. Microsoft's Integrated Visual Augmentation System (IVAS) 
                  based on HoloLens technology represents the largest augmented reality contract in history.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-military-red hover:bg-military-red/90 text-white font-bold">
                    Learn About IVAS <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="text-white border-white hover:bg-white/10">
                    Military Applications
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl border-4 border-military-red">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/bHbdTnfmYJg?si=hdFE-wKN3mVouHUX" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contract Details Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-military-red mx-auto">Historic Contract</Badge>
              <h2 className="text-3xl font-bold eagle-title">
                Microsoft's $21.9 Billion IVAS Contract
              </h2>
              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                In March 2021, Microsoft secured one of the largest military hardware contracts 
                in recent history, delivering cutting-edge augmented reality technology to U.S. soldiers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="h-12 w-12 rounded-full bg-military-navy flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Integrated Combat System</h3>
                <p className="text-gray-600">
                  The IVAS headset combines multiple systems into one device: night vision, 
                  thermal sensing, tactical awareness, and target acquisition.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="h-12 w-12 rounded-full bg-military-navy flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Production Scale</h3>
                <p className="text-gray-600">
                  The contract includes production of up to 120,000 custom HoloLens devices for the U.S. Army,
                  spanning over 10 years of development and deployment.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <div className="h-12 w-12 rounded-full bg-military-red flex items-center justify-center mb-4">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Combat Tested</h3>
                <p className="text-gray-600">
                  After extensive field testing with soldiers, the IVAS system has proven to 
                  enhance situational awareness and combat effectiveness in various scenarios.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technology Features */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png" 
                  alt="HoloLens Military Application" 
                  className="rounded-lg shadow-xl"
                />
              </div>
              
              <div className="md:w-1/2 md:pl-12">
                <Badge className="mb-4 bg-military-navy">Advanced Technology</Badge>
                <h2 className="text-3xl font-bold mb-6 eagle-title">
                  Revolutionary Battlefield Capabilities
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-military-red p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Enhanced Situational Awareness</h3>
                      <p className="text-gray-600">
                        Provides soldiers with real-time battlefield information, showing friendly forces, 
                        identified threats, and navigation data directly in their field of view.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-military-red p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Night and Thermal Vision</h3>
                      <p className="text-gray-600">
                        Advanced sensors enable clear visibility in complete darkness and 
                        the ability to detect heat signatures through smoke, fog, and light cover.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-military-red p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">AI-Powered Target Recognition</h3>
                      <p className="text-gray-600">
                        Machine learning algorithms help identify and classify potential threats, 
                        reducing cognitive load on soldiers and improving reaction time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 bg-military-red p-1 rounded-full">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Squad Communication</h3>
                      <p className="text-gray-600">
                        Integrated communications allow soldiers to share views, mark targets, 
                        and coordinate tactics without verbal communication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Industry Integration */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 bg-military-red mx-auto block w-fit">Strategic Partnerships</Badge>
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
              The Military-Tech Industrial Complex
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Microsoft's Defense Division</h3>
                <p className="mb-4 text-gray-600">
                  Despite internal controversy, Microsoft has expanded its defense operations, 
                  recognizing the strategic importance of military contracts and national security applications.
                </p>
                <p className="text-gray-600">
                  The company has established dedicated teams focused solely on defense innovation, ensuring 
                  that commercial technologies can be rapidly adapted for military use.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Anduril & Defense Tech Startups</h3>
                <p className="mb-4 text-gray-600">
                  Companies like Anduril Industries represent a new wave of defense technology startups, 
                  developing AI-powered defense systems alongside established contractors.
                </p>
                <p className="text-gray-600">
                  The $21.9 billion IVAS contract has accelerated investment in the military AR/VR sector, 
                  creating new opportunities for innovation in battlefield technology.
                </p>
              </div>
            </div>
            
            <div className="mt-12 bg-military-navy text-white p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-3xl font-bold text-military-red">$21.9B</h3>
                  <p className="text-gray-300 mt-2">Contract Value</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-military-red">120,000</h3>
                  <p className="text-gray-300 mt-2">Headsets</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-military-red">10 Years</h3>
                  <p className="text-gray-300 mt-2">Development Timeline</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-military-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 eagle-title">
              Join the Next Generation of Military Technology
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Eagle Forge Network is partnering with leading defense contractors to train 
              the next generation of AR/VR developers for military applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/nwo">
                <Button className="bg-military-red hover:bg-military-red/90 text-white font-bold">
                  Join NWO Initiative
                </Button>
              </Link>
              <Link to="/learn-ai">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Explore AR/VR Training
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Anduril;
