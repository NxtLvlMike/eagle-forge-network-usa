
import { Badge } from "@/components/ui/badge";

const MindBridgeGallery = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <Badge className="mb-4 bg-military-navy mx-auto block w-fit">Advanced Equipment</Badge>
        <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
          Neural Hive Mind Technology
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/37df501d-6473-4dfe-b5cc-32c1bc6f66a2.png" 
                alt="Military HoloLens Integration" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Military HoloLens Integration</h3>
                <p className="text-gray-600 text-sm">
                  Combat-ready mixed reality headset integrated with tactical helmet systems
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/d10acc26-8c2c-49c8-a933-902aa18ecdfd.png" 
                alt="Tactical Drone Control" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Neural Drone Control</h3>
                <p className="text-gray-600 text-sm">
                  SkySurfer drones with neural control systems for direct mind-based operation
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 md:mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png" 
                alt="HoloLens 2 Components" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">HoloLens Technical Architecture</h3>
                <p className="text-gray-600 text-sm">
                  Advanced component system for Mixed Reality neural integration
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/decc9c22-2beb-4718-b422-914b0567aa5d.png" 
                alt="VR Training Simulation" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Advanced VR Training</h3>
                <p className="text-gray-600 text-sm">
                  Immersive pilot training with neural feedback system
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/b83e69e7-7cf0-41ea-a488-ca91e3ccb64c.png" 
                alt="Combat AR Headset" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">Combat AR Headset</h3>
                <p className="text-gray-600 text-sm">
                  Military-grade AR headset with integrated neural control systems
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src="/lovable-uploads/9217c02b-ff8c-4cd6-8ee7-75a7a10b57ac.png" 
                alt="VR Combat Training" 
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1">VR Combat Training</h3>
                <p className="text-gray-600 text-sm">
                  Tactical training with neural response monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/lovable-uploads/74dea0d6-de3c-4510-9bc5-ca04cced7710.png" 
              alt="Satellite Network for UAV Control" 
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Satellite Network UAV System</h3>
              <p className="text-gray-600">
                Unlimited range UAV system with neural control interface, enabling direct mental operation of drones across vast distances with satellite connectivity.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/lovable-uploads/81db5763-0764-4f56-b0ff-94d1ed111fe0.png" 
              alt="Advanced Tactical Visualization" 
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">Neural Tactical Visualization</h3>
              <p className="text-gray-600">
                Mixed reality battlefield visualization with neural input, allowing commanders to control operations through direct mental commands and real-time tactical analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MindBridgeGallery;
