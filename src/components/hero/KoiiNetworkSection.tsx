
import { Button } from "@/components/ui/button";

const KoiiNetworkSection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold eagle-title mb-4">
            <span className="text-blue-300">KOII</span> <span className="text-white">NETWORK</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Creating a decentralized internet that rewards attention and content creation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-2xl font-bold mb-4">The Attention Economy Revolutionized</h3>
              <p className="text-gray-200 mb-6 leading-relaxed">
                SAX CORP is proud to integrate with the Koii Network, a revolutionary blockchain ecosystem that values attention and creative content. Unlike traditional content platforms that profit from user attention, Koii Network directly rewards content creators based on the genuine attention their work receives.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-300 mb-2">Attention Tracking</h4>
                  <p className="text-sm text-gray-300">
                    Koii's revolutionary attention tracking system ensures fair compensation for content that truly engages audiences.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-300 mb-2">Decentralized Storage</h4>
                  <p className="text-sm text-gray-300">
                    Content lives forever on the Koii Network, resistant to censorship and platform control.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-300 mb-2">Koii Tokens</h4>
                  <p className="text-sm text-gray-300">
                    Earn Koii tokens when people view your content, creating a sustainable ecosystem for creators.
                  </p>
                </div>
                
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-300 mb-2">Gradual Consensus</h4>
                  <p className="text-sm text-gray-300">
                    Energy-efficient proof system that's thousands of times more efficient than traditional blockchain.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <a href="https://www.koii.network/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3">
                    Explore Koii Network
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-bold mb-3">SAX CORP + Koii Integration</h3>
              <p className="text-gray-200 mb-4">
                Our integration with Koii Network enhances SAX CORP's technological offerings by providing:
              </p>
              
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  <span>Decentralized content distribution for military and intelligence applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  <span>Enhanced data security through distributed storage architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  <span>Trustless verification of information critical to national security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-300 mr-2">•</span>
                  <span>Tokenized reward systems for intelligence gathering and analysis</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-lg border border-white/20 text-center">
              <p className="text-xl font-bold mb-3">
                "Koii Network's attention economy aligns perfectly with SAX CORP's mission to create value-driven technologies that serve the greater good."
              </p>
              <p className="italic text-blue-200">- Michael Sacks, Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoiiNetworkSection;
