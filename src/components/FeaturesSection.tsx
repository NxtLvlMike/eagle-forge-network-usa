
import { Flag, Shield, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="h-12 w-12 text-military-red mb-4" />,
      title: "Network & Connect",
      description: "Build meaningful connections with fellow South Africans in the USA through our secure networking platform."
    },
    {
      icon: <Shield className="h-12 w-12 text-military-red mb-4" />,
      title: "Military Training",
      description: "Participate in cutting-edge combat simulations with BCI EEG AI-enabled training technology."
    },
    {
      icon: <Flag className="h-12 w-12 text-military-red mb-4" />,
      title: "Community Support",
      description: "Access resources, support, and opportunities designed specifically for South African immigrants."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 eagle-title">Why Join Eagle Forge Network?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
