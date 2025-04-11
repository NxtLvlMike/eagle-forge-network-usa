
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
                  src="https://th.bing.com/th/id/OIP.c0XUHcmSPF1YkXe86ALxwwHaHa?pid=ImgDet&w=198&h=198&c=7" 
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
      
      {/* Visionary Leadership Video Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 eagle-title text-military-navy">
              Michael Sacks: Visionary Leadership
            </h2>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden mb-8">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-[300px] md:h-[400px]"
                  src="https://www.youtube.com/embed/P-xCUNZElm8?si=lskWn-r8l7rScLqS" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-sm text-gray-600 italic">
                  Michael Sacks discusses visionary technology advancements and the future of SAX CORP's revolutionary innovations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* South Africa Article Section */}
      <div className="py-16 bg-military-navy/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 eagle-title">
              <span className="text-military-red">AMERICA'S STANCE</span> <span className="text-white">ON SOUTH AFRICA</span>
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 mb-8">
              <h3 className="text-2xl font-bold mb-4">America Is Right To Cut Funding To South Africa</h3>
              
              <div className="flex flex-col md:flex-row gap-6 mb-6">
                <div className="md:w-1/3">
                  <img 
                    src="https://th.bing.com/th/id/OIP.6m8mCb4bZbV2uNdG6SdQ4wHaE0?rs=1&pid=ImgDetMain" 
                    alt="Donald Trump making a point" 
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    South African businessman Rob Hersov has publicly supported the United States' decision to cut funding to South Africa, placing the blame squarely on the ANC government's leadership failures and anti-American stance.
                  </p>
                  
                  <p className="text-gray-200 mb-4 leading-relaxed">
                    "South Africa is increasingly aligning itself with totalitarian regimes and taking positions against America and its allies," Hersov stated, noting that the country's diplomatic missteps have consequences.
                  </p>
                  
                  <p className="text-gray-200 leading-relaxed">
                    This development highlights the growing divide between South Africa's current political establishment and Western democracies, creating an urgent opportunity for South Africans with technological skills and pro-American values.
                  </p>
                </div>
              </div>
              
              <div className="border-t border-white/20 pt-6 mt-6">
                <h4 className="text-xl font-bold mb-4 text-military-red">A CRITICAL MOMENT FOR SOUTH AFRICANS</h4>
                <p className="text-white text-lg font-semibold mb-6">
                  "With South Africa's deteriorating relationship with the United States, now is the time for skilled South Africans to join SAX CORP and be part of the movement to Make America Great Again."
                </p>
                
                <div className="flex justify-center">
                  <Link to="/nwo">
                    <Button className="bg-military-red hover:bg-military-red/90 text-white font-bold px-10 py-4 text-lg">
                      JOIN SAX CORP TODAY
                    </Button>
                  </Link>
                </div>
                
                <p className="text-sm text-gray-300 text-center mt-4">
                  <a 
                    href="https://www.msn.com/en-za/news/other/america-is-right-to-cut-funding-to-south-africa-rob-hersov-blames-anc/ar-AA1CBVdy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-300"
                  >
                    Read the full article on MSN
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Koii Network Section */}
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
      
      {/* Arweave Section */}
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
    </div>
  );
};

export default HeroBanner;
