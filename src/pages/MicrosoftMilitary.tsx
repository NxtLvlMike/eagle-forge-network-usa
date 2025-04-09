
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Users, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const MicrosoftMilitary = () => {
  const handleJoinFirstFiveHundred = () => {
    // Open modal or form for sign-up
    toast({
      title: "Thank you for your interest!",
      description: "You'll be among the first 500 to receive updates about our military technology initiatives.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="bg-military-navy py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-military-red">Microsoft Military Initiative</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 eagle-title">
                  Empowering America's Finest Through Technology
                </h1>
                <p className="text-lg mb-8">
                  Microsoft's unwavering commitment to the U.S. Armed Forces, veterans, and military families 
                  through cutting-edge technology, education, and comprehensive support programs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-military-red hover:bg-military-red/90"
                    onClick={handleJoinFirstFiveHundred}
                  >
                    Join the First 500
                  </Button>
                  <Link to="/mind-bridge">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-military-navy"
                    >
                      Explore Technology
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
                  <iframe 
                    className="w-full h-[300px] lg:h-[400px]"
                    src="https://www.youtube.com/embed/jlLNMpJSEq8?si=nHixDLMq_snUzc7x" 
                    title="Microsoft Military Support Initiative" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Military Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 mx-auto block w-fit bg-military-navy">Military Support</Badge>
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
              Comprehensive Military Support Programs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Veteran Career Development</CardTitle>
                  <CardDescription>Career transition resources and training programs</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/67f80cc0-462f-4018-ad60-ee5cbc3fc929.png" 
                    alt="Military Veterans Career Training" 
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">
                    Microsoft's veteran career program has trained over 17,000 service members in high-demand 
                    technology skills, with certification pathways for cybersecurity, cloud computing, and AI.
                  </p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Free certification courses</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Career placement assistance</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Mentorship from industry leaders</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Military Technology Innovation</CardTitle>
                  <CardDescription>Advanced battlefield technology development</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/90b3bab2-c8dd-46e8-9711-5aefff72972d.png" 
                    alt="Military Integrated Helmet Technology" 
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">
                    The $21.9 billion IVAS (Integrated Visual Augmentation System) contract brings 
                    HoloLens technology to frontline soldiers, enhancing tactical awareness 
                    and battlefield visualization.
                  </p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Integrated thermal and night vision</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Tactical awareness visualization</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>AI-powered threat detection</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>
              
              <Card className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Military Family Support</CardTitle>
                  <CardDescription>Comprehensive programs for military families</CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src="/lovable-uploads/11cc0f67-5f71-4e12-82b8-6f3d7d750eff.png" 
                    alt="Military Family Support" 
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-700">
                    Microsoft's Military Affairs division provides dedicated support for military 
                    spouses through education scholarships, remote work opportunities, and 
                    community building programs.
                  </p>
                </CardContent>
                <CardFooter>
                  <ul className="space-y-2 w-full">
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Spouse employment initiatives</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Education assistance programs</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-600" />
                      <span>Military community resources</span>
                    </li>
                  </ul>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Founders Fund and Resource Access */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 mx-auto block w-fit bg-military-red">Strategic Resources</Badge>
            <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
              Azure Founders Fund & Quantum Computing Access
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <img 
                  src="/lovable-uploads/81db5763-0764-4f56-b0ff-94d1ed111fe0.png" 
                  alt="Azure Cloud Military Computing" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Empowering Military Technology Innovators</h3>
                <p className="text-gray-700 mb-6">
                  The Azure Founders Fund provides essential resources to visionary developers 
                  like Michael Sacks and Palmer Luckey, who have revolutionized military technology 
                  with innovations that protect and empower American soldiers.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Quantum Computing Access</h4>
                    <p className="text-gray-700">
                      Privileged access to Microsoft's quantum computing infrastructure enables 
                      military contractors to solve previously impossible computational problems, 
                      creating breakthrough advancements in encryption, simulation, and AI.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Azure Military-Grade Cloud</h4>
                    <p className="text-gray-700">
                      Department of Defense IL5/IL6 compliant cloud infrastructure specifically 
                      designed for classified military operations and data with the highest 
                      security standards.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-2">Microsoft Military Affairs Budget</h4>
                    <p className="text-gray-700">
                      Substantial investment in military technology research, veteran support programs, 
                      and strategic partnerships with defense contractors to enhance America's 
                      technological superiority.
                    </p>
                  </div>
                </div>
                
                <Link to="/anduril">
                  <Button className="bg-military-navy hover:bg-military-navy/90 text-white">
                    Explore Defense Partnerships
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Innovators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <Badge className="mb-4 mx-auto block w-fit bg-military-navy">Visionary Leaders</Badge>
            <h2 className="text-3xl font-bold text-center mb-4 eagle-title">
              Technology Pioneers Enhancing Military Capabilities
            </h2>
            <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
              Meet the forward-thinking innovators who are revolutionizing military technology 
              through Microsoft's platforms and resources.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                      <img 
                        src="/lovable-uploads/ae98c665-d6eb-4aea-a154-166a3cc33f58.png" 
                        alt="Michael Sacks, MindBridge Developer" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Michael Sacks</h3>
                    <p className="text-military-red font-semibold mb-4">MindBridge BCI Developer</p>
                    <p className="text-gray-700 mb-4">
                      A pioneer in brain-computer interface technology, Michael Sacks has developed 
                      groundbreaking neural interface code that positions the MindBridge BCI Halo-Lens 
                      at the forefront of military cognitive enhancement technology.
                    </p>
                    <div className="flex gap-3">
                      <Link to="/mind-bridge">
                        <Button variant="outline" className="text-military-navy border-military-navy hover:bg-military-navy hover:text-white">
                          MindBridge Technology
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/3">
                    <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
                      <img 
                        src="/lovable-uploads/506562e7-d9c2-4a34-bc2b-976ade00acb6.png" 
                        alt="Palmer Luckey, Anduril Founder" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Palmer Luckey</h3>
                    <p className="text-military-red font-semibold mb-4">Anduril Industries Founder</p>
                    <p className="text-gray-700 mb-4">
                      Founder of Anduril Industries, Palmer Luckey has created cutting-edge defense 
                      technology platforms powered by Microsoft Azure infrastructure, including autonomous 
                      systems that enhance battlefield awareness and soldier safety.
                    </p>
                    <div className="flex gap-3">
                      <Link to="/anduril">
                        <Button variant="outline" className="text-military-navy border-military-navy hover:bg-military-navy hover:text-white">
                          Anduril Partnership
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* First 500 Call To Action */}
        <section className="py-16 bg-military-red/10">
          <div className="container mx-auto px-4 text-center">
            <Badge className="mb-4 mx-auto w-fit bg-military-red">Limited Opportunity</Badge>
            <h2 className="text-3xl font-bold mb-6 eagle-title">
              Join the First 500
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8">
              Be among the first 500 visionaries to join our collective effort to advance military 
              technology and support American superiority. Together, we can make America great again 
              through innovation, commitment, and patriotic collaboration.
            </p>
            
            <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-6 rounded-lg border border-gray-200">
                    <Shield className="h-12 w-12 text-military-navy mb-4" />
                    <h3 className="text-xl font-bold mb-2">Priority Access</h3>
                    <p className="text-center text-gray-600">
                      Get first access to breakthrough military technology demonstrations and events.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center p-6 rounded-lg border border-gray-200">
                    <Users className="h-12 w-12 text-military-navy mb-4" />
                    <h3 className="text-xl font-bold mb-2">Exclusive Network</h3>
                    <p className="text-center text-gray-600">
                      Connect with military technology innovators, defense contractors, and veterans.
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-center p-6 rounded-lg border border-gray-200">
                    <Check className="h-12 w-12 text-military-navy mb-4" />
                    <h3 className="text-xl font-bold mb-2">Direct Impact</h3>
                    <p className="text-center text-gray-600">
                      Contribute to initiatives that directly support America's military personnel.
                    </p>
                  </div>
                </div>
                
                <Button 
                  size="lg" 
                  className="bg-military-red hover:bg-military-red/90 text-white font-bold px-8 py-6 text-lg"
                  onClick={handleJoinFirstFiveHundred}
                >
                  Join the Movement Today
                </Button>
                
                <p className="mt-4 text-sm text-gray-500">
                  Limited to the first 500 participants. Be part of something historic.
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

export default MicrosoftMilitary;
