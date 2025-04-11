
import { Badge } from "@/components/ui/badge";

const VisionaryLeadershipSection = () => {
  return (
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
  );
};

export default VisionaryLeadershipSection;
