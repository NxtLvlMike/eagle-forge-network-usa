
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Shield, Server, Map } from "lucide-react";

const PlatformOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-military-navy to-military-navy/90 text-white">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 mx-auto block w-fit bg-military-red">Revolutionary Defense Platform</Badge>
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold eagle-title mb-4">
            NEXUS™ Platform
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            The world's first fully integrated autonomous defense ecosystem with real-time battlefield awareness
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="text-military-red mb-4">
              <Target className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Autonomous Defense</h3>
            <p className="text-gray-300">
              AI-powered threat detection and neutralization with autonomous decision-making capabilities
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="text-military-red mb-4">
              <Shield className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Multi-Domain Awareness</h3>
            <p className="text-gray-300">
              Seamless integration across land, sea, air, space, and cyber domains for comprehensive protection
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="text-military-red mb-4">
              <Server className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Edge Computing</h3>
            <p className="text-gray-300">
              Distributed intelligence architecture with battlefield-ready computing power and minimal latency
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
            <div className="text-military-red mb-4">
              <Map className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Battlespace</h3>
            <p className="text-gray-300">
              Real-time 3D mapping with AI-enhanced terrain analysis and tactical recommendation engine
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="bg-military-red hover:bg-military-red/90 text-white px-8 py-6 text-lg">
            Request Platform Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlatformOverview;
