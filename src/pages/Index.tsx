
import CTASection from "@/components/CTASection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import RevolutionaryTechSection from "@/components/RevolutionaryTechSection";
import TechnologySection from "@/components/TechnologySection";
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
        
        {/* Funding Call To Action Section */}
        <section className="py-16 bg-military-red/10">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 mx-auto block w-fit bg-military-red">Urgent Funding Appeal</Badge>
            <h2 className="text-3xl font-bold text-center mb-6 eagle-title">
              Support the Mission to Make America Great Again
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Help Michael Sacks Rally the Troops</h3>
                <p className="text-gray-700 mb-6 text-center">
                  Your donation will directly fund travel costs and operational expenses as Michael Sacks prepares to leave 
                  South Africa and embark on the crucial mission of Making America Great Again with revolutionary BCI technology.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200 hover:border-military-red transition-colors">
                    <h4 className="font-bold text-xl mb-2">$100</h4>
                    <p className="text-sm text-gray-600 mb-4">Supporter</p>
                    <Button className="w-full bg-military-navy hover:bg-military-navy/90">
                      Contribute
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg text-center border-2 border-military-red shadow-lg transform scale-105">
                    <span className="inline-block px-2 py-1 bg-military-red text-white text-xs rounded-full mb-2">Recommended</span>
                    <h4 className="font-bold text-xl mb-2">$500</h4>
                    <p className="text-sm text-gray-600 mb-4">Patriot Sponsor</p>
                    <Button className="w-full bg-military-red hover:bg-military-red/90">
                      Contribute
                    </Button>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-200 hover:border-military-red transition-colors">
                    <h4 className="font-bold text-xl mb-2">$1,000+</h4>
                    <p className="text-sm text-gray-600 mb-4">Visionary Investor</p>
                    <Button className="w-full bg-military-navy hover:bg-military-navy/90">
                      Contribute
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="italic text-sm text-gray-500 mb-4">
                    "With your support, we can bring this revolutionary technology to America and change the world." - Michael Sacks
                  </p>
                  <Button size="lg" className="bg-military-red hover:bg-military-red/90 text-white font-bold px-8">
                    Make A Custom Donation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Visionary Leadership Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 mx-auto block w-fit bg-military-red">Visionary Leadership</Badge>
            <h2 className="text-3xl font-bold text-center mb-6 eagle-title">
              Michael Sacks: Pioneer of BCI Innovation
            </h2>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-military-navy/10 rounded-full text-military-navy font-semibold mb-8">
                Inventor of The MindBridge BCI Halo-Lens
              </span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4">A Decade of Visionary Insight</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ten years ago, Michael Sacks appeared on South Africa's national TV show "The Expresso Show" 
                  discussing the future of Microsoft HoloLens technology. With remarkable foresight, he predicted 
                  that such technology would primarily benefit policing, medical, and military applications - 
                  a prediction that has proven extraordinarily accurate.
                </p>
                
                <div className="mb-8">
                  <h4 className="font-bold text-lg mb-3">Pioneering AI Innovation:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-military-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                      <span>Developed cutting-edge neural interface code that positions the MindBridge BCI Halo-Lens at the forefront of brain-computer interface technology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-military-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                      <span>Created Agent Q AI Solutions, providing free education and certificates through the Microsoft AI Skills campaign</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-military-navy text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                      <span>Positioned in the elite 2% of companies globally accepted as candidates for the Microsoft Start-up Accelerator Founders Fund</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-military-red hover:bg-military-red/90 text-white font-bold px-8 py-3">
                    Investor Relations
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 bg-black">
                    <iframe 
                      className="w-full h-[300px] md:h-[400px]"
                      src="https://www.youtube.com/embed/KIfa58S5NHE?si=jqXAGC8JbMQ4wPby" 
                      title="Michael Sacks on The Expresso Show discussing Microsoft HoloLens"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="bg-white p-4 border-t border-gray-100">
                    <p className="text-sm text-gray-600 italic">
                      Michael Sacks appearing on SABC 3's The Expresso Show as a recognized holography expert, 
                      discussing his forward-thinking vision for Microsoft HoloLens technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <RevolutionaryTechSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
