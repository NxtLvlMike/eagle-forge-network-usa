
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SouthAfricaArticleSection = () => {
  return (
    <div className="py-16 bg-military-navy/80 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 eagle-title">
            <span className="text-military-red">AMERICA'S STANCE</span> <span className="text-white">ON SOUTH AFRICA</span>
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 mb-8">
            <h3 className="text-2xl font-bold mb-4">America Is Right To Cut Funding To South Africa</h3>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-1/3">
                <img 
                  src="https://th.bing.com/th/id/OIP.6m8mCb4bZbV2uNdG6SdQ4wHaE0?rs=1&pid=ImgDetMain" 
                  alt="Donald Trump making a point" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-200 mb-4 leading-relaxed">
                  South African businessman Rob Hersov has publicly supported the United States' decision to cut funding to South Africa, placing the blame squarely on the ANC government's leadership failures and anti-American stance.
                </p>
                
                <p className="text-gray-200 mb-4 leading-relaxed">
                  "South Africa is increasingly aligning itself with totalitarian regimes and taking positions against America and its allies," Hersov stated, noting that the country's diplomatic missteps have consequences.
                </p>
                
                <p className="text-gray-200 leading-relaxed">
                  This development highlights the growing divide between South Africa's current political establishment and Western democracies, creating an urgent opportunity for South Africans with technological skills and pro-American values.
                </p>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-6 mt-6">
              <h4 className="text-xl font-bold mb-4 text-military-red">A CRITICAL MOMENT FOR SOUTH AFRICANS</h4>
              <p className="text-white text-lg font-semibold mb-6">
                "With South Africa's deteriorating relationship with the United States, now is the time for skilled South Africans to join SAX CORP and be part of the movement to Make America Great Again."
              </p>
              
              <div className="flex justify-center">
                <Link to="/nwo">
                  <Button className="bg-military-red hover:bg-military-red/90 text-white font-bold px-10 py-4 text-lg">
                    JOIN SAX CORP TODAY
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-gray-300 text-center mt-4">
                <a 
                  href="https://www.msn.com/en-za/news/other/america-is-right-to-cut-funding-to-south-africa-rob-hersov-blames-anc/ar-AA1CBVdy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-300"
                >
                  Read the full article on MSN
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SouthAfricaArticleSection;
