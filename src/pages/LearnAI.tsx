
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, ChevronRight, Lightbulb, PersonStanding, School } from "lucide-react";

const LearnAI = () => {
  const handleMicrosoftAISkillsFest = () => {
    window.open("https://aiskillsfest.event.microsoft.com/?wt.mc_id=aiskillsfest_eventpage_blog_wwl_rn", "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-military-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 mx-auto block w-fit bg-military-red">Advance Your AI Skills</Badge>
            <h1 className="text-5xl font-bold mb-6 eagle-title">Learn AI Skills</h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-8">
              Access world-class AI training through our partnership with Microsoft and prepare for 
              the technological revolution with expert-led courses and certification
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-military-red hover:bg-military-red/90"
                onClick={handleMicrosoftAISkillsFest}
              >
                Join Microsoft AI Skills Fest <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Microsoft AI Skills Fest Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4 mx-auto block w-fit bg-military-red">Official Partner</Badge>
              <h2 className="text-3xl font-bold mb-6 eagle-title">Microsoft AI Skills Fest</h2>
              <p className="text-lg text-gray-700">
                As part of our mission to enable South Africans with cutting-edge technology skills, 
                we've partnered with Microsoft to provide access to premium AI training resources.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-md mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why Microsoft AI Skills Fest?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-military-red shrink-0 mt-0.5" />
                      <span className="ml-2">Learn from industry experts and Microsoft AI specialists</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-military-red shrink-0 mt-0.5" />
                      <span className="ml-2">Access comprehensive curriculum covering AI fundamentals to advanced applications</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-military-red shrink-0 mt-0.5" />
                      <span className="ml-2">Earn recognized certificates that enhance your professional profile</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-6 w-6 text-military-red shrink-0 mt-0.5" />
                      <span className="ml-2">Network with fellow technologists and potential employers</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6">
                    <Button 
                      className="bg-military-navy hover:bg-military-navy/90 text-white"
                      onClick={handleMicrosoftAISkillsFest}
                    >
                      Explore Microsoft AI Skills Fest
                    </Button>
                  </div>
                </div>
                
                <div className="order-first md:order-last">
                  <img 
                    src="/lovable-uploads/e4bb0faf-3e81-44dd-bd8a-625195520f26.png" 
                    alt="AI Training Program" 
                    className="rounded-lg shadow-lg w-full border border-gray-200"
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <School className="h-10 w-10 text-military-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Free Education</h3>
                <p className="text-gray-700 mb-4">
                  Through our partnership with Agent Q AI Solutions, all NWO members receive free access to premium 
                  Microsoft AI courses and certifications.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <PersonStanding className="h-10 w-10 text-military-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Career Transition</h3>
                <p className="text-gray-700 mb-4">
                  Gain the skills necessary for high-paying positions in the US technology sector, with dedicated 
                  placement support for NWO members.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="mb-4">
                  <Lightbulb className="h-10 w-10 text-military-red" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation Track</h3>
                <p className="text-gray-700 mb-4">
                  Special advanced courses for The First 500, including neural interface programming and advanced 
                  AI development with real-world applications.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your Future?</h3>
              <Button 
                size="lg" 
                className="bg-military-red hover:bg-military-red/90 px-8 py-6"
                onClick={handleMicrosoftAISkillsFest}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Start Your AI Journey Today
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4 mx-auto block w-fit bg-military-navy">Success Stories</Badge>
              <h2 className="text-3xl font-bold mb-4 eagle-title">From South Africa to Silicon Valley</h2>
              <p className="text-lg text-gray-700">
                Hear from South Africans who have transformed their careers through our AI training programs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="/lovable-uploads/278a2427-ff80-4600-ad9f-512342c5a1b5.png" 
                        alt="Sarah J." 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah J.</h4>
                    <p className="text-sm text-gray-600">Cape Town to San Francisco</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The Microsoft AI Skills program completely transformed my career prospects. Within 6 months of 
                  completing my certification, I received three job offers from top tech companies in the US. 
                  Michael Sacks and the NWO team supported me throughout the entire immigration process."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                      <img 
                        src="/lovable-uploads/68bb2bcd-5d64-46b7-b7e2-b5b60fec2d77.png" 
                        alt="David M." 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold">David M.</h4>
                    <p className="text-sm text-gray-600">Johannesburg to Austin</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As part of The First 500, I received specialized training in neural interface programming. 
                  The advanced skills I gained opened doors at defense contractors and tech giants alike. 
                  My salary has tripled, and I'm now working on cutting-edge technologies I never thought possible."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnAI;
