
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Phone } from "lucide-react";
import { useParams } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

// Career data with detailed information
const careerData = {
  recruitment: {
    title: "Recruitment Opportunities in America",
    icon: "Users",
    overview: "The American recruitment sector offers exceptional prospects for South African professionals, with high demand for international talent acquisition specialists who can connect global talent to US companies.",
    keyPoints: [
      "Average salaries 2-3x higher than in South Africa",
      "In-demand skills include tech recruitment, executive search, and international talent acquisition",
      "Robust agency and in-house recruitment sectors"
    ],
    faqs: [
      {
        question: "What qualifications do I need?",
        answer: "While a bachelor's degree is beneficial, demonstrated success in recruitment and placement is often more valuable. Certifications from bodies like SHRM (Society for Human Resource Management) can enhance your marketability."
      },
      {
        question: "How do visa sponsorships work?",
        answer: "Many larger recruitment firms sponsor H-1B visas for experienced recruiters, especially those specializing in technical or niche fields. Extraordinary ability visas (O-1) are also available for recruiters with exceptional track records."
      },
      {
        question: "What's the market like for South African recruiters?",
        answer: "South African recruiters are highly valued for their multilingual skills, international perspective, and adaptability. With the tech sector constantly expanding, recruiters who can source global talent are in high demand."
      }
    ],
    americanAdvantages: "America's corporate culture rewards performance with substantial bonuses and commission structures that far outpace South African compensation models. Additionally, the sheer volume of hiring in the US market creates abundant opportunities for skilled recruiters.",
    immigrationPath: "Recruitment professionals typically enter on H-1B visas, with a clear pathway to permanent residency through employer sponsorship after 1-3 years of service."
  },
  management: {
    title: "Management Careers in America",
    icon: "Briefcase",
    overview: "American corporations value South African managers for their adaptability, multilingual skills, and experience managing diverse teams. Management roles in the US offer substantially higher compensation and greater authority than similar positions in South Africa.",
    keyPoints: [
      "South African management experience is highly transferable to US corporate environments",
      "Significant opportunities in tech, finance, healthcare and manufacturing sectors",
      "Project management certification (PMP) greatly enhances employability"
    ],
    faqs: [
      {
        question: "What management styles are valued in American companies?",
        answer: "American companies typically value results-oriented leadership with strong emphasis on innovation, efficiency, and team development. South African managers' experience with diverse workforces is particularly valued."
      },
      {
        question: "How does compensation compare to South Africa?",
        answer: "Mid-level management positions typically offer 3-4x the South African salary equivalent, with senior management roles potentially reaching 5-7x when including equity and performance bonuses."
      },
      {
        question: "What industries have the highest demand?",
        answer: "Technology, healthcare, financial services and advanced manufacturing currently have the highest demand for experienced managers with international backgrounds."
      }
    ],
    americanAdvantages: "The American business ecosystem provides unparalleled opportunities for career advancement, with clear paths to executive leadership. The innovation-focused culture rewards managers who drive growth and develop high-performing teams.",
    immigrationPath: "Management professionals typically qualify for L-1 intracompany transfer visas if employed by multinational corporations, or H-1B visas for direct hires. Executive-level managers may qualify for EB-1C priority worker green cards."
  },
  // Additional career categories would be defined here...
};

const CareerDetail = () => {
  const { careerId } = useParams();
  const career = careerData[careerId as keyof typeof careerData] || careerData.recruitment; // Default to recruitment if not found

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/27697933038', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-military-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 eagle-title text-center">{career.title}</h1>
              <p className="max-w-3xl mx-auto text-lg text-gray-300 text-center mb-6">
                {career.overview}
              </p>
              <Button
                onClick={handleWhatsAppContact}
                className="bg-green-500 hover:bg-green-600 gap-2"
              >
                <Phone className="h-5 w-5" />
                Discuss Opportunities via WhatsApp
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 border-t-4 border-military-red">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-military-navy mb-4">Key Opportunities for South Africans</h2>
                  <ul className="space-y-4">
                    {career.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <div className="bg-military-navy/10 p-1 rounded-full mr-3 mt-1">
                          <svg className="h-4 w-4 text-military-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-military-navy mb-4">Why America Outperforms South Africa</h2>
                  <p className="text-gray-700 mb-6">{career.americanAdvantages}</p>
                  
                  <div className="bg-military-navy/5 p-4 rounded-lg mb-6">
                    <h3 className="font-bold text-lg text-military-navy mb-2">Immigration Pathway</h3>
                    <p className="text-gray-700">{career.immigrationPath}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <img 
                      src="https://www.bing.com/th?id=OIP.FfYqA6TWXGSYl0YvBfwkLwHaE7" 
                      alt="American opportunity" 
                      className="rounded-lg shadow-md max-w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-military-navy mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {career.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left font-medium">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700">{faq.answer}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden sticky top-6">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-military-navy mb-4">Take Action Now</h2>
                  <p className="text-gray-700 mb-6">
                    Don't wait to start your American success story. South Africans who act decisively are already building safer, more prosperous lives in America.
                  </p>
                  
                  <div className="space-y-4">
                    <Button
                      onClick={handleWhatsAppContact}
                      className="w-full bg-green-500 hover:bg-green-600 gap-2"
                    >
                      <Phone className="h-5 w-5" />
                      Contact via WhatsApp
                    </Button>
                    
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="font-semibold text-military-navy mb-2">Why South Africans Choose America</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-military-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          <span className="text-sm text-gray-700">Enhanced personal safety</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-military-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm text-gray-700">Significantly higher earnings</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-military-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="text-sm text-gray-700">Superior infrastructure</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-military-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                          <span className="text-sm text-gray-700">World-class education</span>
                        </li>
                        <li className="flex items-center">
                          <svg className="h-4 w-4 text-military-red mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span className="text-sm text-gray-700">Career advancement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/careers" className="text-military-navy font-bold flex items-center justify-center hover:underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Career Categories
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerDetail;
