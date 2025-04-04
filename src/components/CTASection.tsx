
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-military-red">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 eagle-title">
          Ready to Join the Elite Network?
        </h2>
        
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
          Become part of a growing community of South African immigrants in the USA and access exclusive military training opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-military-red hover:bg-white/90 py-6 px-8 text-lg">
            Register Now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-8 text-lg">
            Learn More
          </Button>
        </div>
        
        <p className="text-white/60 text-sm mt-8">
          Join 500+ South Africans already networking and training on the Eagle Forge Network
        </p>
      </div>
    </section>
  );
};

export default CTASection;
