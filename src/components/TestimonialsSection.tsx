
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Johan Pretorius",
      role: "Former SANDF Officer",
      content: "The Eagle Forge Network has been instrumental in helping me connect with fellow South Africans in the military field. The training programs are cutting-edge and unlike anything I've experienced before.",
      avatar: "JP"
    },
    {
      name: "Annika van der Merwe",
      role: "Systems Engineer",
      content: "As a tech professional with military background, I've found the BCI training incredibly advanced. The network has connected me with opportunities I wouldn't have found elsewhere.",
      avatar: "AM"
    },
    {
      name: "Themba Nkosi",
      role: "Security Consultant",
      content: "Moving from South Africa to the USA was challenging, but the EFN community made the transition smoother. The advanced training programs have significantly enhanced my professional skills.",
      avatar: "TN"
    }
  ];

  return (
    <section className="py-20 bg-military-navy text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 eagle-title">
          Hear From Our <span className="text-military-red">Network Members</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-military-red/50 transition-colors"
            >
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 text-military-red">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="mb-6 text-gray-300 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src="" alt={testimonial.name} />
                  <AvatarFallback className="bg-military-red text-white">{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
