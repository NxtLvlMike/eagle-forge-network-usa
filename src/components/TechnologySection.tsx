
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
            
            <Button className="military-btn bg-military-navy hover:bg-military-navy/90 text-white">
              <Rocket className="mr-2 h-4 w-4" /> Learn About Training
            </Button>
          </div>
          
          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-xl border border-gray-200">
            <div className="aspect-video bg-gray-200 rounded-md overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-military-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8 text-white">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">Training Technology Demo</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-2">Combat Helmet Technology</h3>
              <p className="text-gray-600 text-sm">
                Our BCI-enabled combat helmets integrate multiple sensors to monitor brain activity, vital signs, and environmental awareness while providing real-time tactical information and neural command capabilities.
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
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
