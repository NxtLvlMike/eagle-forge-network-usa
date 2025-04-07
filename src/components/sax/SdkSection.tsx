
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Server, Rocket, Database } from "lucide-react";

const SdkSection = () => {
  return (
    <section className="py-20 bg-military-navy text-white">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 mx-auto block w-fit bg-military-red">Developer Tools</Badge>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold eagle-title mb-4">
            NEXUS™ Development Kit
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Build powerful defense applications with our comprehensive SDK
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-8">
              <pre className="text-green-400 text-sm overflow-x-auto">
                <code>
{`// Initialize NEXUS platform
import { NexusPlatform } from '@saxcorp/nexus-sdk';

// Configure your defense application
const app = new NexusPlatform({
  apiKey: 'your-api-key',
  environment: 'production',
  capabilities: ['counter-uas', 'perimeter']
});

// Deploy autonomous defense system
app.deployDefenseSystem({
  location: { lat: 34.0522, lng: -118.2437 },
  radius: 5000, // meters
  threatResponse: 'graduated',
  notification: true
});

// Register event handlers
app.on('threatDetected', (threat) => {
  console.log(\`Threat detected: \${threat.type} at \${threat.location}\`);
  
  // Execute autonomous response
  if (threat.confidenceScore > 0.85) {
    app.executeCountermeasure(threat.id);
  }
});`}
                </code>
              </pre>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Code className="h-6 w-6 text-military-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Simple API</h3>
                  <p className="text-gray-300">
                    Intuitive, well-documented API designed for rapid implementation with minimal boilerplate code.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Server className="h-6 w-6 text-military-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Cloud Integration</h3>
                  <p className="text-gray-300">
                    Seamless cloud deployment with built-in scalability, redundancy, and edge computing capabilities.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Rocket className="h-6 w-6 text-military-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                  <p className="text-gray-300">
                    Get defense systems operational in minutes with pre-configured templates and deployment wizards.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Database className="h-6 w-6 text-military-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure Data Handling</h3>
                  <p className="text-gray-300">
                    Military-grade encryption with comprehensive audit logging and access controls built in.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-4">SDK Features</h3>
              <ul className="space-y-3">
                {[
                  "Full access to all NEXUS platform capabilities",
                  "Integration with third-party security systems",
                  "Real-time threat detection and response APIs",
                  "Comprehensive analytics and reporting tools",
                  "Simulation environment for testing and training",
                  "Cross-platform support (web, mobile, embedded)",
                  "Custom hardware integration toolkit",
                  "AI model extension and customization"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-military-red/10 p-6 rounded-lg border border-military-red/30">
              <h3 className="text-xl font-bold mb-2">Developer Support</h3>
              <p className="mb-4">
                Our expert engineering team provides comprehensive support to ensure your defense applications meet the highest standards.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/10 p-3 rounded">
                  <span className="block font-bold text-2xl">24/7</span>
                  <span className="text-sm">Technical Support</span>
                </div>
                <div className="bg-white/10 p-3 rounded">
                  <span className="block font-bold text-2xl">48hr</span>
                  <span className="text-sm">Response Time</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button className="bg-military-red hover:bg-military-red/90 w-full py-6 text-lg">
                Request Developer Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SdkSection;
