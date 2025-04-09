
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div className="relative bg-military-navy text-white">
      <div 
        className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')]"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 eagle-title tracking-tight leading-tight">
              <span className="text-white">Let us</span><br />
              <span className="text-blue-500">MAKE AMERICA</span><br />
              <span className="text-military-red">GREAT AGAIN</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Join fellow South Africans in the USA to build connections, share resources, and participate in advanced military training programs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
              <Link to="/nwo">
                <Button className="military-btn bg-military-red border-military-red hover:bg-military-red/90 text-white py-6 flex items-center justify-center font-bold w-full">
                  <Rocket className="mr-2 h-5 w-5" />
                  Join the Network
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="outline" className="military-btn border-white text-white bg-transparent hover:bg-white hover:text-military-navy py-6 font-bold w-full">
                  Learn More About SAX CORP
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/ae98c665-d6eb-4aea-a154-166a3cc33f58.png" 
              alt="Advanced Military Combat Helmet" 
              className="max-w-full rounded-lg shadow-lg border-2 border-military-silver/30"
              style={{ maxHeight: '400px' }}
            />
          </div>
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
      
      {/* Divine Mission Section */}
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
                  src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="American flag symbolizing freedom" 
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-bold text-white">Divine Leadership</h4>
                <p className="text-sm text-gray-300">
                  God chooses unlikely vessels to carry out His greatest works.
                </p>
              </div>
              
              <div className="bg-blue-900/30 p-4 rounded-lg shadow-inner border border-blue-800">
                <img 
                  src="https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Stars in night sky" 
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
                    src="https://images.unsplash.com/photo-1614119075118-aef97f6a603f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
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
    </div>
  );
};

export default HeroBanner;
