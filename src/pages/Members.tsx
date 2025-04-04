
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Star, User } from "lucide-react";

const Members = () => {
  // Sample member data
  const members = [
    {
      id: 1,
      name: "Johan Pretorius",
      role: "Former SANDF Officer",
      location: "Texas",
      skills: ["Combat Training", "Leadership", "Tactical Planning"],
      avatar: "JP"
    },
    {
      id: 2,
      name: "Annika van der Merwe",
      role: "Systems Engineer",
      location: "California",
      skills: ["Technology", "AI Systems", "Defense"],
      avatar: "AM"
    },
    {
      id: 3,
      name: "Themba Nkosi",
      role: "Security Consultant",
      location: "Virginia",
      skills: ["Security", "Risk Analysis", "Combat"],
      avatar: "TN"
    },
    {
      id: 4,
      name: "Elizabeth Botha",
      role: "Military Medic",
      location: "Florida",
      skills: ["Medical", "Emergency Response", "Training"],
      avatar: "EB"
    },
    {
      id: 5,
      name: "David van Wyk",
      role: "Communications Specialist",
      location: "New York",
      skills: ["Communications", "Technology", "Strategy"],
      avatar: "DW"
    },
    {
      id: 6,
      name: "Sarah Khumalo",
      role: "Logistics Officer",
      location: "Washington",
      skills: ["Logistics", "Planning", "Operations"],
      avatar: "SK"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-military-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <User className="h-16 w-16 text-military-red mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 eagle-title">Network Members</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Connect with fellow South Africans in America with military and technical backgrounds
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Find Members</h2>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input 
                    placeholder="Search by name, skills, or location..." 
                    className="pl-10"
                  />
                </div>
                <Button className="bg-military-navy">Search</Button>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  Combat Training
                </Badge>
                <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  Technology
                </Badge>
                <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  Leadership
                </Badge>
                <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  Medical
                </Badge>
                <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  California
                </Badge>
                <Badge className="bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer">
                  Texas
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <Card key={member.id} className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-start">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage src="" alt={member.name} />
                      <AvatarFallback className="bg-military-navy text-white">{member.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold text-lg">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                      <p className="text-xs text-gray-400">{member.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.skills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-4 flex justify-between">
                  <Button variant="outline" size="sm" className="flex-1 mr-2">
                    Profile
                  </Button>
                  <Button size="sm" className="flex-1 bg-military-red">
                    Connect
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-300">
              Load More Members
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Members;
