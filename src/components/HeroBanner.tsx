
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="relative bg-military-navy text-white">
      <div 
        className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')]"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 eagle-title tracking-tight leading-tight">
            <span className="text-military-red">MAKE AMERICA GREAT AGAIN</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join fellow South Africans in the USA to build connections, share resources, and participate in advanced military training programs.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button className="military-btn bg-military-red border-military-red hover:bg-military-red/90 text-white py-6 flex items-center justify-center">
              <Rocket className="mr-2 h-5 w-5" />
              Join the Network
            </Button>
            
            <Button variant="outline" className="military-btn border-white text-white hover:bg-white/10 py-6">
              Learn More About EFN-USA
            </Button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8 items-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-military-red">500+</span>
              <span className="text-sm uppercase tracking-wider">Members</span>
            </div>
            
            <div className="hidden sm:block h-12 border-l border-gray-600"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-military-red">20+</span>
              <span className="text-sm uppercase tracking-wider">Training Programs</span>
            </div>
            
            <div className="hidden sm:block h-12 border-l border-gray-600"></div>
            
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-military-red">15+</span>
              <span className="text-sm uppercase tracking-wider">Partner Organizations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
