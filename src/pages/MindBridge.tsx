
import Footer from "@/components/Footer";
import MindBridgeGallery from "@/components/MindBridgeGallery";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Brain, Zap, Users, Radio, LineChart } from "lucide-react";

const MindBridge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-military-navy text-white py-16">
          <div 
            className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')]"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-military-red">Advanced Neural Technology</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 eagle-title">
                  MIND BRIDGE: Neural Hive Mind for Military Operations
                </h1>
                
                <p className="text-xl mb-8 leading-relaxed">
                  A revolutionary Brain-Computer Interface (BCI) system enabling direct neural communication between soldiers, creating a tactical "hive mind" that dramatically enhances battlefield coordination and operational efficiency.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-military-red hover:bg-military-red/90 font-bold">
                    <Brain className="mr-2 h-5 w-5" /> Learn More
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 font-bold">
                    Request Demo
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/68bb2bcd-5d64-46b7-b7e2-b5b60fec2d77.png" 
                  alt="Combat Helmet with HoloLens Integration" 
                  className="max-w-full rounded-lg shadow-lg border-2 border-military-silver/30"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">Key Capabilities</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Zap className="h-10 w-10 text-military-red" />,
                  title: "Silent Neural Communication",
                  description: "Enable thought-based communication between squad members without detectable signals."
                },
                {
                  icon: <Users className="h-10 w-10 text-military-red" />,
                  title: "Tactical Perception Sharing",
                  description: "Real-time sharing of tactical perceptions and intentions between networked soldiers."
                },
                {
                  icon: <Radio className="h-10 w-10 text-military-red" />,
                  title: "Neural Synchronization",
                  description: "Enhanced team coordination through neural brain wave synchronization protocols."
                },
                {
                  icon: <Shield className="h-10 w-10 text-military-red" />,
                  title: "Thought-Controlled Systems",
                  description: "Direct neural control of weapons, vehicles, and tactical equipment."
                },
                {
                  icon: <Brain className="h-10 w-10 text-military-red" />,
                  title: "Distributed Cognitive Processing",
                  description: "Complex battlefield analysis through combined neural computing power."
                },
                {
                  icon: <LineChart className="h-10 w-10 text-military-red" />,
                  title: "Neural Redundancy",
                  description: "Resilient command structure through distributed neural network architecture."
                }
              ].map((capability, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{capability.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                  <p className="text-gray-600">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section with the uploaded images */}
        <MindBridgeGallery />

        {/* Technical Architecture */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-military-navy">Technical Overview</Badge>
              <h2 className="text-3xl font-bold mb-8 eagle-title">System Architecture</h2>
              
              <div className="mb-12">
                <div className="bg-gray-100 p-6 rounded-lg border border-gray-200">
                  <pre className="text-xs sm:text-sm md:text-base overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────────┐
│                        MIND BRIDGE NEURAL HIVE MIND                     │
└─────────────────────────────────────────────────────────────────────────┘
                                     │
                                     ▼
┌─────────────┐  ┌─────────────────────┐  ┌─────────────┐
│  SQUAD 1    │  │    SQUAD 2          │  │  SQUAD N    │
│  ┌───────┐  │  │    ┌───────┐        │  │  ┌───────┐  │
│  │ BCI   │◄─┼──┼───►│ BCI   │◄───────┼──┼─►│ BCI   │  │
│  └───┬───┘  │  │    └───┬───┘        │  │  └───┬───┘  │
└──────┼──────┘  └────────┼────────────┘  └──────┼──────┘
       │                  │                      │
       └──────────────────┼──────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      AZURE QUANTUM NETWORK                              │
└─────────────────────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                      COMMAND & CONTROL                                  │
└─────────────────────────────────────────────────────────────────────────┘`}
                  </pre>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Neural Interface Layer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Advanced 128-channel EEG headsets with military-grade specifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Real-time neural signal processing and feature extraction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Deep learning models for thought pattern recognition and intent classification</span>
                    </li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <img 
                    src="/lovable-uploads/244fc21f-2e43-42d3-8ba9-b8d6885a5fc8.png" 
                    alt="AR Glasses Components" 
                    className="rounded-lg shadow-md h-72 w-full object-cover border border-gray-200"
                  />
                  <img 
                    src="/lovable-uploads/055fb0ae-f387-4b4f-bcd1-e57158d58f8e.png" 
                    alt="Military VR Training" 
                    className="rounded-lg shadow-md h-72 w-full object-cover border border-gray-200"
                  />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Communication Layer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Azure Quantum-secured network with end-to-end encrypted neural data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Low-latency mesh network with &lt;10ms soldier-to-soldier communication</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Satellite uplink for extended neural network connectivity</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Integration Layer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>HoloLens Military Edition for augmented reality visualization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Tactical systems interface for neural control of equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-military-red mr-2 font-bold">✓</span>
                      <span>Biometric integration with physiological monitoring systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Value */}
        <section className="py-16 bg-military-navy text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">Strategic Military Value</h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-military-red">Tactical Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>Silent communication without compromising position</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>Instantaneous 360° team awareness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>Resilient command structure through neural redundancy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>300-500ms faster team reaction times</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-military-red">Force Multiplication</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>37% improved team performance through neural synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>Distributed processing allows specialized cognitive roles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>Neural pattern sharing enables rapid skill transfer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-military-red mr-2 font-bold">✓</span>
                    <span>42% reduction in mental fatigue through shared cognitive load</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Development Roadmap */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">Development Roadmap</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    phase: "Phase 1: Foundation",
                    timeline: "12 months",
                    budget: "$8.5M",
                    milestone: "Two-person neural link demonstration",
                    tasks: [
                      "Develop enhanced BCI hardware with military specifications",
                      "Create basic neural synchronization protocols",
                      "Implement secure Azure cloud infrastructure",
                      "Develop initial HoloLens visualization"
                    ]
                  },
                  {
                    phase: "Phase 2: Core Capabilities",
                    timeline: "18 months",
                    budget: "$14.2M",
                    milestone: "Squad-level field demonstration",
                    tasks: [
                      "Scale neural network to support 4-6 person squads",
                      "Develop tactical intent classification models",
                      "Create mesh network for battlefield deployment",
                      "Implement basic weapons systems neural control"
                    ]
                  },
                  {
                    phase: "Phase 3: Advanced Integration",
                    timeline: "24 months",
                    budget: "$22.8M",
                    milestone: "Full-scale combat exercise",
                    tasks: [
                      "Expand neural network to platoon level (20-40 soldiers)",
                      "Implement hierarchical neural command structures",
                      "Develop neural drone swarm control capabilities",
                      "Create advanced neural training protocols"
                    ]
                  },
                  {
                    phase: "Phase 4: Deployment & Scaling",
                    timeline: "18 months",
                    budget: "$18.5M",
                    milestone: "Field-ready system for special operations",
                    tasks: [
                      "Finalize production-ready hardware and software",
                      "Develop specialized training programs",
                      "Create deployment packages for various mission types",
                      "Establish manufacturing and support infrastructure"
                    ]
                  }
                ].map((phase, index) => (
                  <div key={index} className="border-l-4 border-military-red pl-6">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <h3 className="text-xl font-bold">{phase.phase}</h3>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline" className="border-military-navy">
                          {phase.timeline}
                        </Badge>
                        <Badge className="bg-military-navy">
                          {phase.budget}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-3 font-medium">
                      Milestone: {phase.milestone}
                    </p>
                    
                    <ul className="space-y-2 text-gray-600">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start">
                          <span className="text-military-red mr-2 font-bold">•</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-military-red">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 eagle-title">
              Join the Neural Revolution
            </h2>
            
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Mind Bridge represents a once-in-a-generation opportunity to revolutionize military operations. Request a demonstration or partnership information today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-military-red hover:bg-white/90 py-6 px-8 text-lg font-bold">
                Request Demo
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg font-bold">
                Partnership Information
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MindBridge;
