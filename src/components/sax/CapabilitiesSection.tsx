
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Shield, 
  Radar,
  Eye
} from "lucide-react";

const CapabilitiesSection = () => {
  const capabilities = [
    {
      id: 1,
      title: "Counter UAS",
      description: "Advanced multi-layer drone detection and neutralization system capable of identifying, tracking, and countering hostile unmanned aerial systems with surgical precision.",
      icon: Target,
      image: "/lovable-uploads/90b3bab2-c8dd-46e8-9711-5aefff72972d.png"
    },
    {
      id: 2,
      title: "Counter Intrusion",
      description: "Autonomous ground defense systems integrating AI-powered sensors, thermal imaging, and machine learning to detect and respond to perimeter threats without human intervention.",
      icon: Shield,
      image: "/lovable-uploads/68bb2bcd-5d64-46b7-b7e2-b5b60fec2d77.png"
    },
    {
      id: 3,
      title: "Maritime Counter Intrusion",
      description: "Comprehensive underwater and surface vessel detection network with autonomous response capabilities, designed to protect ports, harbors, and critical maritime infrastructure.",
      icon: Radar,
      image: "/lovable-uploads/d10acc26-8c2c-49c8-a933-902aa18ecdfd.png"
    },
    {
      id: 4,
      title: "Integrated Battlefield Awareness",
      description: "Synchronized multi-domain sensor fusion providing commanders with unprecedented situational awareness and AI-augmented decision support across all operational theaters.",
      icon: Eye,
      image: "/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 mx-auto block w-fit bg-military-navy">Core Capabilities</Badge>
        
        <h2 className="text-3xl md:text-4xl font-bold text-center eagle-title mb-16">
          Integrated Defense Solutions
        </h2>
        
        <div className="space-y-20">
          {capabilities.map((capability, index) => (
            <div key={capability.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="lg:w-1/2">
                <div className="flex items-center mb-4">
                  <div className="bg-military-navy p-2 rounded-md text-white mr-3">
                    <capability.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">{capability.title}</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {capability.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="block text-military-red font-bold text-2xl mb-1">99.8%</span>
                    <span className="text-sm text-gray-600">Detection Rate</span>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <span className="block text-military-red font-bold text-2xl mb-1">&lt;0.5s</span>
                    <span className="text-sm text-gray-600">Response Time</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
