import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Briefcase, Users, Megaphone, Stethoscope, Shield, 
  Brush, Calculator, UserRound, UserPlus, Book, Code, 
  Cpu, Gamepad, Brain, GraduationCap, Heart, Phone
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Career categories with their respective icons
  const categories = [
    { 
      id: "recruitment", 
      label: "Recruitment", 
      icon: Users,
      description: "Connect talented South Africans with leading American companies",
      benefits: "Competitive salaries and comprehensive benefits packages await South African recruitment professionals in the USA"
    },
    { 
      id: "management", 
      label: "Management", 
      icon: Briefcase,
      description: "Lead dynamic teams in America's thriving business landscape",
      benefits: "American companies value South African leadership skills and global perspective"
    },
    { 
      id: "pr", 
      label: "Public Relations", 
      icon: Megaphone,
      description: "Shape narratives for America's most innovative brands",
      benefits: "South African PR professionals bring unique international insight to American media relations"
    },
    { 
      id: "medical", 
      label: "Medical Doctors", 
      icon: Stethoscope,
      description: "Join America's world-class healthcare system",
      benefits: "South African doctors are highly respected in the US healthcare system with excellent compensation"
    },
    { 
      id: "police", 
      label: "Police Officers", 
      icon: Shield,
      description: "Serve and protect in America's diverse communities",
      benefits: "South African law enforcement experience is valued for community policing initiatives"
    },
    { 
      id: "nurses", 
      label: "Nurses", 
      icon: Heart,
      description: "Provide compassionate care in America's top hospitals",
      benefits: "Critical nursing shortage means expedited visa processing and signing bonuses for South African nurses"
    },
    { 
      id: "military", 
      label: "Military", 
      icon: Shield,
      description: "Defend America's interests and protect its citizens",
      benefits: "South African military professionals bring valuable experience and expertise to the US military"
    },
    { 
      id: "creative", 
      label: "Creative", 
      icon: Brush,
      description: "Create innovative solutions for America's businesses",
      benefits: "South African creatives bring unique perspectives and ideas to American markets"
    },
    { 
      id: "accounting", 
      label: "Accountants", 
      icon: Calculator,
      description: "Manage financial operations for America's companies",
      benefits: "South African accountants bring expertise in tax law and financial management"
    },
    { 
      id: "senior", 
      label: "Senior Management", 
      icon: UserRound,
      description: "Lead large-scale projects and initiatives in America",
      benefits: "South African senior management professionals bring extensive experience and leadership skills"
    },
    { 
      id: "hr", 
      label: "Human Resources", 
      icon: UserPlus,
      description: "Manage employee relations and policies in America",
      benefits: "South African HR professionals bring a deep understanding of American workplace culture and policies"
    },
    { 
      id: "teaching", 
      label: "Teachers", 
      icon: GraduationCap,
      description: "Inspire and educate America's youth",
      benefits: "South African teachers bring a wealth of knowledge and experience to American classrooms"
    },
    { 
      id: "development", 
      label: "Developers", 
      icon: Code,
      description: "Build software and applications for America's businesses",
      benefits: "South African developers bring cutting-edge technology and innovative solutions to American markets"
    },
    { 
      id: "ai", 
      label: "AI Engineers", 
      icon: Cpu,
      description: "Develop and implement AI solutions for America's industries",
      benefits: "South African AI engineers bring expertise in machine learning and data analysis"
    },
    { 
      id: "gaming", 
      label: "Gamers", 
      icon: Gamepad,
      description: "Play and create games for America's entertainment industry",
      benefits: "South African gamers bring unique perspectives and creativity to American gaming"
    },
    { 
      id: "gamedev", 
      label: "Game Developers", 
      icon: Code,
      description: "Develop and publish video games for America's markets",
      benefits: "South African game developers bring innovative ideas and technical skills to American gaming"
    },
    { 
      id: "neuro", 
      label: "Neuroscientists", 
      icon: Brain,
      description: "Study the brain and nervous system for America's research institutions",
      benefits: "South African neuroscientists bring valuable insights and expertise to American scientific research"
    },
    { 
      id: "soldiers", 
      label: "Soldiers", 
      icon: Shield,
      description: "Defend America's interests and protect its citizens",
      benefits: "South African soldiers bring valuable experience and expertise to the US military"
    },
    { 
      id: "electrical", 
      label: "Electrical Engineers", 
      icon: Briefcase,
      description: "Design and build electrical systems for America's infrastructure",
      benefits: "South African electrical engineers bring expertise in power systems and electrical engineering"
    },
    { 
      id: "mechanical", 
      label: "Mechanical Engineers", 
      icon: Briefcase,
      description: "Design and build mechanical systems for America's industries",
      benefits: "South African mechanical engineers bring expertise in mechanical engineering and manufacturing"
    }
  ];

  const filteredCategories = searchQuery 
    ? categories.filter(cat => cat.label.toLowerCase().includes(searchQuery.toLowerCase())) 
    : categories;

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/27697933038', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-military-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Briefcase className="h-16 w-16 text-military-red mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 eagle-title">Career Opportunities for South Africans</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-6">
              Join thousands of South Africans building successful careers in America - 
              the land of opportunity where your skills and experience are valued and rewarded
            </p>
            <div className="max-w-md mx-auto mb-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search careers..."
                  className="pl-10 bg-white/10 border-white/20 text-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <Button
              onClick={handleWhatsAppContact}
              className="mt-3 bg-green-500 hover:bg-green-600 gap-2"
            >
              <Phone className="h-5 w-5" />
              Contact via WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-military-navy mb-4">Why America is the Best Choice for South Africans</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              America offers unparalleled opportunities for South African professionals seeking safety, prosperity, 
              and a better future for their families. With strong historical ties and shared values, 
              South Africans consistently thrive in American society.
            </p>
          </div>
          
          <Tabs defaultValue={filteredCategories.length > 0 ? filteredCategories[0].id : "recruitment"} className="w-full">
            <TabsList className="flex flex-wrap gap-2 justify-center mb-8">
              {filteredCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex items-center gap-2 px-4 py-2"
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {filteredCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="border-2 border-military-navy/20">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="bg-military-navy/10 p-3 rounded-full">
                        <category.icon className="h-8 w-8 text-military-red" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{category.label} Opportunities</CardTitle>
                        <CardDescription className="text-base mt-1">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-military-navy/5 p-4 rounded-lg">
                        <h3 className="font-bold text-lg text-military-navy mb-2">Benefits for South Africans</h3>
                        <p className="text-gray-700">{category.benefits}</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-military-navy/5 p-4 rounded-lg">
                          <h3 className="font-bold text-lg text-military-navy mb-2">Visa Pathways</h3>
                          <p className="text-gray-700">
                            Various visa options including H1-B, O-1, and employment-based green cards
                            are available for qualified South African professionals.
                          </p>
                        </div>
                        <div className="bg-military-navy/5 p-4 rounded-lg">
                          <h3 className="font-bold text-lg text-military-navy mb-2">Salary Expectations</h3>
                          <p className="text-gray-700">
                            {category.label} professionals from South Africa can expect significantly higher
                            compensation packages compared to similar roles in South Africa.
                          </p>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Link to={`/career/${category.id}`} className="text-military-navy font-bold flex items-center hover:underline">
                          View detailed information
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-gray-200 pt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Join other South Africans thriving in America
                    </div>
                    <Button
                      onClick={handleWhatsAppContact}
                      className="bg-green-500 hover:bg-green-600 gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Inquire About {category.label} Positions
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-16 bg-military-navy/10 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-military-navy mb-3">America: The Land of Opportunity for South Africans</h2>
            <p className="mb-6 text-lg text-gray-700">
              America continues to welcome skilled South Africans who contribute to its economy, culture, and innovation. 
              With growing safety concerns in South Africa, the USA offers peace of mind, stability, and prosperity.
            </p>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-military-red hover:bg-military-red/90 gap-2"
            >
              <Phone className="h-5 w-5" />
              Start Your American Journey Today
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
