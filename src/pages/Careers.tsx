
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

const Careers = () => {
  // Career categories with their respective icons
  const categories = [
    { id: "recruitment", label: "Recruitment", icon: Users },
    { id: "management", label: "Management", icon: Briefcase },
    { id: "pr", label: "Public Relations", icon: Megaphone },
    { id: "medical", label: "Medical Doctors", icon: Stethoscope },
    { id: "police", label: "Police Officers", icon: Shield },
    { id: "nurses", label: "Nurses", icon: Heart },
    { id: "military", label: "Military", icon: Shield },
    { id: "creative", label: "Creative", icon: Brush },
    { id: "accounting", label: "Accountants", icon: Calculator },
    { id: "senior", label: "Senior Management", icon: UserRound },
    { id: "hr", label: "Human Resources", icon: UserPlus },
    { id: "teaching", label: "Teachers", icon: GraduationCap },
    { id: "development", label: "Developers", icon: Code },
    { id: "ai", label: "AI Engineers", icon: Cpu },
    { id: "gaming", label: "Gamers", icon: Gamepad },
    { id: "gamedev", label: "Game Developers", icon: Code },
    { id: "neuro", label: "Neuroscientists", icon: Brain },
    { id: "soldiers", label: "Soldiers", icon: Shield },
    { id: "electrical", label: "Electrical Engineers", icon: Briefcase },
    { id: "mechanical", label: "Mechanical Engineers", icon: Briefcase }
  ];

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
            <h1 className="text-4xl font-bold mb-4 eagle-title">Career Opportunities</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Join our elite force of professionals shaping the future of technology and defense
            </p>
            <Button
              onClick={handleWhatsAppContact}
              className="mt-6 bg-green-500 hover:bg-green-600 gap-2"
            >
              <Phone className="h-5 w-5" />
              Contact via WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <Tabs defaultValue={categories[0].id} className="w-full">
            <TabsList className="flex flex-wrap gap-2 justify-center mb-8">
              {categories.map((category) => (
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

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <category.icon className="h-6 w-6 text-military-red" />
                    {category.label} Opportunities
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Explore career opportunities in {category.label.toLowerCase()}. 
                    Contact us directly through WhatsApp to learn more about positions in this field.
                  </p>
                  <Button
                    onClick={handleWhatsAppContact}
                    className="bg-green-500 hover:bg-green-600 gap-2"
                  >
                    <Phone className="h-5 w-5" />
                    Inquire About {category.label} Positions
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
