
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Brain, Network } from "lucide-react";

const RevolutionaryTechSection = () => {
  return (
    <section className="py-20 bg-military-navy text-white">
      <div className="container mx-auto px-4">
        <Badge className="mb-4 mx-auto block w-fit bg-military-red">Revolutionary Technology</Badge>
        <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
          Groundbreaking Neural Interface Capabilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1 bg-military-red p-3 rounded-full">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Direct Neural Control Systems</h3>
                <p className="text-gray-300">
                  Experience first-of-its-kind technology that enables direct mental command 
                  interfaces with advanced military equipment, allowing unprecedented control with thought alone.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-military-red p-3 rounded-full">
                <Network className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collective Neural Networks</h3>
                <p className="text-gray-300">
                  Our proprietary Hive Mind technology connects multiple operators into a unified 
                  tactical awareness system, amplifying capabilities through shared neural processing.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="mt-1 bg-military-red p-3 rounded-full">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Advanced Neural Enhancement</h3>
                <p className="text-gray-300">
                  Military-grade neural training programs that enhance cognitive capabilities, 
                  reaction times, and tactical decision-making beyond conventional human limits.
                </p>
              </div>
            </div>
            
            <Button className="mt-4 bg-military-red hover:bg-military-red/90 text-white font-bold flex items-center">
              Explore Technical Specifications <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/lovable-uploads/74dea0d6-de3c-4510-9bc5-ca04cced7710.png" 
              alt="Advanced EEG Monitoring" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="/lovable-uploads/90b3bab2-c8dd-46e8-9711-5aefff72972d.png" 
              alt="Military AR Integration" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="/lovable-uploads/d10acc26-8c2c-49c8-a933-902aa18ecdfd.png" 
              alt="Neural Drone Control" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <img 
              src="/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png" 
              alt="HoloLens Technical Architecture" 
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
          </div>
        </div>
        
        <div className="mt-16 bg-white/10 p-6 rounded-lg border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-military-red text-4xl font-bold">98%</h3>
              <p className="text-gray-300 mt-2">Higher Neural Response Accuracy</p>
            </div>
            <div>
              <h3 className="text-military-red text-4xl font-bold">300%</h3>
              <p className="text-gray-300 mt-2">Faster Decision Processing</p>
            </div>
            <div>
              <h3 className="text-military-red text-4xl font-bold">5x</h3>
              <p className="text-gray-300 mt-2">Enhanced Combat Effectiveness</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTechSection;
