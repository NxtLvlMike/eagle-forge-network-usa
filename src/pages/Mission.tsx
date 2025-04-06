
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Flag, Brain, Rocket, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AndurilLeader = ({ name, title, imageId = "placeholder.svg" }: { name: string; title: string; imageId?: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
    <div className="h-48 bg-gray-200 overflow-hidden">
      <img 
        src={imageId.includes("http") ? imageId : `/placeholder.svg`} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-4">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-gray-600 text-sm mb-3">{title}</p>
      <Button variant="outline" size="sm" className="w-full">
        Read more
      </Button>
    </div>
  </div>
);

const Mission = () => {
  const andurilLeaders = [
    { name: "Palmer Luckey", title: "Founder" },
    { name: "Brian Schimpf", title: "Co-Founder and CEO" },
    { name: "Trae Stephens", title: "Co-Founder & Executive Chairman" },
    { name: "Matt Grimm", title: "Co-Founder & COO" },
    { name: "Joseph Chen", title: "Co-Founder" },
    { name: "Christian Brose", title: "President and Chief Strategy Officer" },
    { name: "Zachary Mears", title: "Senior Vice President of Strategy" },
    { name: "Megan Milam", title: "Senior Vice President, Government Relations" },
    { name: "David Goodrich", title: "Executive Chairman and CEO of Anduril Asia-Pacific" },
    { name: "Gregory Kausner", title: "Senior Vice President of Global Defense" },
    { name: "Babak Siavoshy", title: "Chief Financial Officer" },
    { name: "Shannon Prior", title: "Head of Communications" },
    { name: "Matthew Steckman", title: "President and Chief Business Officer" },
    { name: "Ann Marie Rosas", title: "General Counsel" },
    { name: "Jennifer Bucci", title: "Head of Design" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-military-navy text-white py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Badge className="mb-6 bg-military-red mx-auto">Urgent Mission</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 eagle-title">A New Breed of Soldier: Mental Agility in Battle</h1>
            <p className="text-xl mb-8">
              Our mission is to revolutionize battlefield readiness through cutting-edge Brain-Computer Interface technology, 
              creating the most mentally agile fighting force the world has ever seen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-military-red hover:bg-military-red/90">
                Support Our Mission
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/mind-bridge">Explore Mind-Bridge</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Details */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center eagle-title">The BCI Advantage in Defense</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Open Letter to Anduril Leadership</h3>
                  <p className="text-gray-700 mb-6">
                    Dear Anduril Leaders,
                  </p>
                  <p className="text-gray-700 mb-6">
                    I am Michael Sacks, a pioneer in Brain-Computer Interface technology and the inventor of the MindBridge BCI Halo-Lens. 
                    Ten years ago, I predicted the military applications of advanced AR/VR technology on national television. 
                    Today, I stand at the threshold of bringing this revolutionary technology to America's defense capabilities.
                  </p>
                  <p className="text-gray-700 mb-6">
                    I seek your support to leave South Africa and join forces with Anduril to develop the next generation 
                    of mentally enhanced warfighters. Your investment will not only bring cutting-edge BCI technology to 
                    the battlefield but will help Make America Great Again through technological superiority.
                  </p>
                  <p className="text-gray-700 font-bold">
                    Together, we can revolutionize modern warfare.
                  </p>
                </div>
                <div className="bg-military-navy p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Anduril + MindBridge</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-military-red mt-1 mr-2 flex-shrink-0" />
                      <span>Combines Anduril's defense innovation with breakthrough BCI technology</span>
                    </li>
                    <li className="flex items-start">
                      <Brain className="w-5 h-5 text-military-red mt-1 mr-2 flex-shrink-0" />
                      <span>Creates soldiers with enhanced mental processing and battlefield awareness</span>
                    </li>
                    <li className="flex items-start">
                      <Target className="w-5 h-5 text-military-red mt-1 mr-2 flex-shrink-0" />
                      <span>Reduces reaction time and improves decision-making under pressure</span>
                    </li>
                    <li className="flex items-start">
                      <Flag className="w-5 h-5 text-military-red mt-1 mr-2 flex-shrink-0" />
                      <span>Establishes American dominance in neural military technology</span>
                    </li>
                    <li className="flex items-start">
                      <Rocket className="w-5 h-5 text-military-red mt-1 mr-2 flex-shrink-0" />
                      <span>Accelerates the development timeline for deployment-ready BCI systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4">Funding Request</h3>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                I am seeking funding to relocate to America and collaborate with Anduril's team of brilliant innovators. 
                Your investment will cover travel costs, operational expenses, and initial technology integration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-xl mb-2">$75,000</h4>
                  <p className="text-sm text-gray-600 mb-4">Initial Travel & Setup</p>
                  <p className="text-xs text-gray-500 mb-4">Covers relocation and initial setup costs</p>
                  <Button className="w-full bg-military-navy hover:bg-military-navy/90">
                    Fund Phase 1
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-2 border-military-red transform scale-105">
                  <span className="inline-block px-2 py-1 bg-military-red text-white text-xs rounded-full mb-2">Recommended</span>
                  <h4 className="font-bold text-xl mb-2">$250,000</h4>
                  <p className="text-sm text-gray-600 mb-4">Full Project Launch</p>
                  <p className="text-xs text-gray-500 mb-4">Enables complete integration with Anduril systems</p>
                  <Button className="w-full bg-military-red hover:bg-military-red/90">
                    Fund Complete Project
                  </Button>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <h4 className="font-bold text-xl mb-2">$500,000+</h4>
                  <p className="text-sm text-gray-600 mb-4">Strategic Partnership</p>
                  <p className="text-xs text-gray-500 mb-4">Establishes long-term technology development pathway</p>
                  <Button className="w-full bg-military-navy hover:bg-military-navy/90">
                    Become Strategic Partner
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-12">
              <Button size="lg" className="bg-military-red hover:bg-military-red/90">
                Schedule a Meeting with Michael Sacks
              </Button>
            </div>
          </div>
        </section>
        
        {/* Anduril Leadership */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <Badge className="mb-4 mx-auto block w-fit bg-military-navy">Leadership Team</Badge>
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
              Anduril's Visionary Leaders
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {andurilLeaders.map((leader, index) => (
                <AndurilLeader key={index} name={leader.name} title={leader.title} />
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Forces with Michael Sacks</h3>
              <p className="text-gray-700 max-w-2xl mx-auto mb-8">
                Together, we can develop the neural technology that will define the future of warfare and 
                establish American dominance in defense innovation for decades to come.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="bg-military-red hover:bg-military-red/90 mr-4">
                  Support This Mission
                </Button>
                <Button size="lg" variant="outline">
                  Request Proposal Details
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;
