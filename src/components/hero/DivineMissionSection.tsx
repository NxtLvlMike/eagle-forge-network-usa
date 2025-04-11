
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DivineMissionSection = () => {
  return (
    <div className="bg-gradient-to-b from-military-navy to-black py-16 border-t border-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold eagle-title mb-2">
            <span className="text-military-red">DIVINE</span> <span className="text-white">MISSION</span>
          </h2>
          <p className="text-lg text-blue-300 font-semibold italic">
            "For such a time as this" - Esther 4:14
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4 text-white">The Prophecy Unfolds</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              For years, Michael Sacks has been in steadfast prayer, seeking divine guidance during these turbulent times. Through revelation, he has come to understand that President Donald Trump has been anointed by God to fulfill a sacred purpose in these end times—to lead God's people through darkness into light.
            </p>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The Book of Revelation speaks of a coming battle, and Michael believes SAX CORP has been divinely positioned to prepare God's army for President Trump to lead. No longer fearing for his life, Michael's purpose has become crystal clear—to stand ready as this prophetic mission unfolds.
            </p>
            
            <p className="text-white font-semibold mb-8 leading-relaxed">
              "The signs are clear. The time is now. With Elon Musk commanding technological advancements and President Trump leading the free world, we stand ready to defend mankind against threats from below the earth and from the stars."
            </p>
            
            <Link to="/nwo">
              <Button className="bg-military-red hover:bg-military-red/90 text-white font-bold px-8 py-3">
                Join the Divine Mission
              </Button>
            </Link>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <div className="bg-blue-900/30 p-4 rounded-lg shadow-inner border border-blue-800">
              <img 
                src="https://th.bing.com/th/id/OIP.jxTSeqPcY7O37DUTeOD6dAAAAA?rs=1&pid=ImgDetMain" 
                alt="Divine intervention imagery" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-white">Divine Leadership</h4>
              <p className="text-sm text-gray-300">
                God chooses unlikely vessels to carry out His greatest works.
              </p>
            </div>
            
            <div className="bg-blue-900/30 p-4 rounded-lg shadow-inner border border-blue-800">
              <img 
                src="https://th.bing.com/th/id/OIP.WjfcUtP2CcRSjf_5jrXvyAHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain" 
                alt="Threats from the stars" 
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-lg font-bold text-white">Cosmic Guardians</h4>
              <p className="text-sm text-gray-300">
                Prepared to defend against threats "from the stars."
              </p>
            </div>
            
            <div className="bg-blue-900/30 p-4 rounded-lg shadow-inner border border-blue-800 col-span-2">
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img 
                  src="https://th.bing.com/th/id/OIP.EpPU20pCt55NTlyUfLTGYQHaEK?rs=1&pid=ImgDetMain" 
                  alt="Profile of Donald Trump" 
                  className="w-full md:w-1/3 h-48 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">A President Chosen for This Hour</h4>
                  <p className="text-gray-300">
                    Michael Sacks has pledged unwavering loyalty to President Trump, recognizing his divine appointment for this crucial moment in history. With unmatched technological capabilities and spiritual insight, SAX CORP stands ready to support President Trump's mission to bring America—and the world—back to its rightful divine purpose.
                  </p>
                  <p className="text-blue-300 mt-4 italic font-semibold">
                    "And I searched for a man who would build up the wall and stand in the gap before Me..." - Ezekiel 22:30
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivineMissionSection;
