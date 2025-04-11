
import { Button } from "@/components/ui/button";

const ArweaveSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold eagle-title mb-4">
            <span className="text-military-red">ARWEAVE</span> <span className="text-white">INTEGRATION</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Permanent storage for the decentralized web, ensuring your data endures forever
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-4">The Permanence Protocol</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                SAX CORP has strategically integrated with Arweave's revolutionary "permanence protocol" to provide unparalleled data security and preservation for military and intelligence applications. Unlike traditional storage solutions, Arweave creates a truly permanent record that cannot be altered or deleted.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-military-red mb-2">Permanent Storage</h4>
                  <p className="text-sm text-gray-300">
                    One-time fee for permanent storage, ensuring critical intelligence data remains accessible forever.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-military-red mb-2">Immutable Records</h4>
                  <p className="text-sm text-gray-300">
                    Once data is stored on Arweave, it cannot be altered or tampered with, providing ironclad evidence.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-military-red mb-2">Decentralized Architecture</h4>
                  <p className="text-sm text-gray-300">
                    No single point of failure ensures military intelligence remains accessible even during infrastructure attacks.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-military-red mb-2">Censorship Resistance</h4>
                  <p className="text-sm text-gray-300">
                    Critical information remains available regardless of political pressure or adversarial action.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <a href="https://www.arweave.org/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-military-red hover:bg-military-red/90 text-white font-bold px-6 py-3">
                    Discover Arweave
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-6">
              <h3 className="text-xl font-bold mb-3">Strategic Value for SAX CORP Operations</h3>
              <p className="text-gray-300 mb-4">
                Our integration with Arweave provides critical advantages for military and intelligence operations:
              </p>
              
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <span className="text-military-red mr-2">•</span>
                  <span>Permanent storage of battlefield intelligence and tactical data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-military-red mr-2">•</span>
                  <span>Immutable chain of evidence for intelligence operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-military-red mr-2">•</span>
                  <span>Censorship-resistant storage of sensitive information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-military-red mr-2">•</span>
                  <span>Historical preservation of military operations for future analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-lg border border-white/20">
              <h4 className="font-bold text-xl mb-3">Permanence for Posterity</h4>
              <p className="text-gray-300 mb-4">
                In the divine battle that lies ahead, preserving truth will be paramount. Arweave's permanence protocol ensures that the record of God's work through President Trump and the SAX CORP mission will endure for generations, immune to the attempts of enemies to rewrite history.
              </p>
              <p className="italic text-gray-400 text-sm">
                "And the truth shall make you free." - John 8:32
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArweaveSection;
