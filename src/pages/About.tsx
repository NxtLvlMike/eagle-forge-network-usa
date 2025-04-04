
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-military-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Shield className="h-16 w-16 text-military-red mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 eagle-title">About Eagle Forge Network</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Uniting South Africans in America through community, innovation and advanced training
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="mb-8 text-gray-700 leading-relaxed">
              The Eagle Forge Network was established to create a strong, supportive community for South African immigrants in the United States while offering advanced military training opportunities. Our mission is to unite our community through shared heritage and values while preparing individuals for excellence in military and security fields.
            </p>
            
            <h2 className="text-2xl font-bold mb-6">Advanced Combat Training Technology</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              At the heart of our organization is our commitment to cutting-edge military training. We leverage the latest advancements in Brain-Computer Interface (BCI) technology, EEG monitoring, and artificial intelligence to offer training experiences that are unparalleled in their sophistication and effectiveness.
            </p>
            <p className="mb-8 text-gray-700 leading-relaxed">
              Our training programs incorporate telekinetic-inspired control systems, allowing participants to interact with simulated environments using neural commands. This technology represents the future of combat training and preparedness.
            </p>
            
            <h2 className="text-2xl font-bold mb-6">Our Community</h2>
            <p className="mb-4 text-gray-700 leading-relaxed">
              The Eagle Forge Network brings together South Africans from all backgrounds who have made America their home. We understand the unique challenges faced by immigrants and provide resources, connections, and opportunities to help our community thrive.
            </p>
            <p className="mb-8 text-gray-700 leading-relaxed">
              Beyond our military focus, we serve as a comprehensive networking platform where members can connect professionally, socially, and culturally with others who share similar experiences and values.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Leadership</h3>
              <p className="mb-4 text-gray-700">
                Our organization is led by a dedicated team of professionals with backgrounds in military service, technology development, and community building. We bring together expertise from both South Africa and the United States to create a unique and valuable resource for our members.
              </p>
              <p className="text-gray-700">
                We are committed to the values of excellence, innovation, integrity, and community service in everything we do.
              </p>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Join the Network</h2>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a recent arrival from South Africa or have been in the United States for years, the Eagle Forge Network offers a place to connect, grow, and contribute. Join us in our mission to strengthen our community while exploring the frontiers of military training and technology.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
