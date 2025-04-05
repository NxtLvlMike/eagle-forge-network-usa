
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const TechnologySection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <Badge className="mb-4 bg-military-red">Cutting Edge Technology</Badge>
            <h2 className="text-3xl font-bold mb-6 eagle-title">
              Advanced Combat Training with BCI EEG AI-Enabled Systems
            </h2>
            
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our military training program incorporates revolutionary Brain-Computer Interface (BCI) technology with EEG monitoring and AI assistance to develop enhanced combat capabilities.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Telekinesis-inspired neural control systems",
                "Real-time neural feedback and performance optimization",
                "Advanced tactical decision-making training",
                "Simulated combat environments with neural integration",
                "Stress management and mental resilience development"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-military-red mr-2 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="military-btn bg-military-navy hover:bg-military-navy/90 text-white font-bold">
              <Rocket className="mr-2 h-4 w-4" /> Learn About Training
            </Button>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="/lovable-uploads/67f80cc0-462f-4018-ad60-ee5cbc3fc929.png"
                  alt="BrainAccess EEG Technology" 
                  className="rounded-md w-full object-cover h-48"
                />
                <img 
                  src="/lovable-uploads/e4bb0faf-3e81-44dd-bd8a-625195520f26.png"
                  alt="Research AR Glasses" 
                  className="rounded-md w-full object-cover h-48"
                />
              </div>
              
              <div className="mt-6">
                <h3 className="font-bold text-lg mb-2">Neural Interface Technology</h3>
                <p className="text-gray-600 text-sm">
                  Our BCI-enabled combat systems integrate EEG headbands, AR glasses, and neural monitoring to provide real-time tactical information and neural command capabilities.
                </p>
                
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <span className="block text-military-red font-bold text-xl">98%</span>
                    <span className="text-xs text-gray-500">Accuracy Rate</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded text-center">
                    <span className="block text-military-red font-bold text-xl">50ms</span>
                    <span className="text-xs text-gray-500">Response Time</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/278a2427-ff80-4600-ad9f-512342c5a1b5.png"
                alt="BrainAccess HALO Headband" 
                className="rounded-md w-full h-40 object-cover shadow-md"
              />
              <img 
                src="/lovable-uploads/11cc0f67-5f71-4e12-82b8-6f3d7d750eff.png"
                alt="EEG Electrode Placement" 
                className="rounded-md w-full h-40 object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
