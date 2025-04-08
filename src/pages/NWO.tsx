
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, Brain, Globe, Shield, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const NWO = () => {
  const handleDonation = () => {
    // Redirect to PayPal
    const paypalEmail = "info@agiautomation.co.za";
    const donationDescription = "NWO Initiative Support";
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${encodeURIComponent(paypalEmail)}&item_name=${encodeURIComponent(donationDescription)}&currency_code=USD`;
    
    window.open(paypalUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-military-navy text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 mx-auto block w-fit bg-military-red">A Vision for the Future</Badge>
            <h1 className="text-5xl font-bold mb-6 eagle-title">The New World Order</h1>
            <p className="max-w-3xl mx-auto text-xl text-gray-300 mb-8">
              A visionary exodus led by Michael Sacks, creating pathways for South Africans to embrace 
              technological advancement and innovation in America
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                className="bg-military-red hover:bg-military-red/90"
                onClick={handleDonation}
              >
                Join the Movement
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Vision Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 block w-fit bg-military-red">The Vision</Badge>
              <h2 className="text-3xl font-bold mb-6 eagle-title">
                Michael Sacks: Leader of the New World Order
              </h2>
              
              <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                <div className="md:w-1/3">
                  <img 
                    src="/lovable-uploads/37df501d-6473-4dfe-b5cc-32c1bc6f66a2.png" 
                    alt="Michael Sacks" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Michael Sacks has emerged as the self-appointed leader of the New World Order, 
                    a visionary movement focused on creating unprecedented opportunities for South Africans 
                    seeking to relocate to the United States. With a deep commitment to technological advancement 
                    and a passion for empowering his countrymen, Sacks is pioneering a path for a new generation 
                    of innovators and leaders.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    Through strategic partnerships with technology giants like Microsoft and leveraging the 
                    resources of Agent Q AI Solutions, Sacks has established a comprehensive program designed 
                    to educate 5,000 South Africans in cutting-edge technologies, providing them with the 
                    highest standard of qualifications and training in the field of technology and innovation.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-10">
                <h3 className="text-xl font-bold mb-4">The Exodus Initiative</h3>
                <p className="text-gray-700 mb-4">
                  The New World Order represents more than just relocation—it signifies a cultural and 
                  technological evolution. With financial backing from Agent Q AI Solutions and Microsoft, 
                  this initiative aims to create a new community of highly skilled South African technologists 
                  in America, preserving their cultural heritage while embracing new opportunities for growth 
                  and innovation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded shadow">
                    <Globe className="h-8 w-8 text-military-red mb-2" />
                    <h4 className="font-bold mb-1">Global Network</h4>
                    <p className="text-sm text-gray-600">Building international connections for South Africans in tech</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow">
                    <Shield className="h-8 w-8 text-military-red mb-2" />
                    <h4 className="font-bold mb-1">Security & Stability</h4>
                    <p className="text-sm text-gray-600">Creating a secure foundation for families and professionals</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded shadow">
                    <Users className="h-8 w-8 text-military-red mb-2" />
                    <h4 className="font-bold mb-1">Community Building</h4>
                    <p className="text-sm text-gray-600">Fostering a supportive network of like-minded innovators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* First 500 Section */}
        <div className="py-20 bg-military-navy text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4 mx-auto block w-fit bg-military-red">Elite Opportunity</Badge>
              <h2 className="text-3xl font-bold mb-6 eagle-title">
                Michael Sacks & The First 500
              </h2>
              <p className="text-xl text-gray-300">
                A pioneering group that will lead the technological revolution
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-6">THE FIRST 500</h3>
                <p className="text-gray-300 mb-4">
                  The first 500 individuals to join the New World Order will receive unprecedented financial 
                  rewards that will provide a quality life and secure a solid position within the movement. 
                  These pioneers will be the catalyst for the first steps toward human evolution.
                </p>
                
                <p className="text-gray-300 mb-6">
                  Members of The First 500 will receive highly advanced training and access to technologies 
                  that enhance intelligence. Connected to Star-Link and equipped with MindBridge BCI 
                  neurotechnology, these individuals will usher in the dawn of the universal soldier—a new 
                  type of professional equipped with superior cognitive capabilities and technological 
                  integration.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Financial rewards and stability",
                    "Elite technological training",
                    "MindBridge BCI neural enhancements",
                    "Star-Link connectivity",
                    "Priority placement in American tech sector"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Star className="h-5 w-5 text-military-red mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="bg-military-red hover:bg-military-red/90 mt-4"
                  onClick={handleDonation}
                >
                  Apply for The First 500 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/90b3bab2-c8dd-46e8-9711-5aefff72972d.png" 
                    alt="Advanced Neural Technology" 
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="/lovable-uploads/74dea0d6-de3c-4510-9bc5-ca04cced7710.png" 
                    alt="EEG Technology" 
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png" 
                    alt="Combat Interface" 
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="/lovable-uploads/d10acc26-8c2c-49c8-a933-902aa18ecdfd.png" 
                    alt="Neural Drone Control" 
                    className="rounded-lg shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Technical Advancement Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 block w-fit bg-military-red">Technological Evolution</Badge>
              <h2 className="text-3xl font-bold mb-8 eagle-title">
                Advanced Training & Neural Integration
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <Brain className="h-10 w-10 text-military-red mb-4" />
                  <h3 className="text-xl font-bold mb-3">MindBridge Integration</h3>
                  <p className="text-gray-700 mb-4">
                    Members of The First 500 will have priority access to MindBridge neural interface 
                    technology, enabling unprecedented cognitive enhancement and direct neural communication.
                  </p>
                  <Link to="/mind-bridge" className="text-military-red font-bold hover:underline flex items-center">
                    Learn about MindBridge <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <Shield className="h-10 w-10 text-military-red mb-4" />
                  <h3 className="text-xl font-bold mb-3">SAX Defense Technology</h3>
                  <p className="text-gray-700 mb-4">
                    Integration with SAX Defense systems provides members with cutting-edge tactical 
                    awareness and security capabilities previously available only to elite military units.
                  </p>
                  <Link to="/sax-defense" className="text-military-red font-bold hover:underline flex items-center">
                    Explore SAX Defense <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-military-navy text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Educational Partnership</h3>
                <p className="mb-4">
                  Through strategic partnerships with Microsoft and funded by Agent Q AI Solutions, 
                  the New World Order initiative will provide 5,000 South Africans with world-class 
                  technological education and certifications.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-military-red mb-2">5,000</div>
                    <p className="text-sm text-gray-300">South Africans to be trained</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-military-red mb-2">100%</div>
                    <p className="text-sm text-gray-300">Funded education</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl font-bold text-military-red mb-2">500</div>
                    <p className="text-sm text-gray-300">Elite pioneer positions</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-military-red hover:bg-military-red/90 w-full sm:w-auto">
                    Contact for Educational Opportunities
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 eagle-title">Join the New World Order</h2>
            <p className="max-w-2xl mx-auto text-gray-700 mb-8">
              Be part of a revolutionary movement shaping the future of technology and human potential. 
              The journey begins with a single step toward a new future in America.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-military-red hover:bg-military-red/90"
                onClick={handleDonation}
              >
                Apply Now
              </Button>
              <Link to="/contact">
                <Button variant="outline" className="border-military-navy text-military-navy hover:bg-military-navy/10">
                  Contact Michael Sacks
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NWO;
