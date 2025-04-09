
import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const CryptoCzar = () => {
  const { toast } = useToast();

  const handleJoinNetwork = () => {
    toast({
      title: "Registration Interest Recorded",
      description: "Thank you for your interest in joining the Crypto cZAR AI network. We'll be in touch soon.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Crypto cZAR AI | Eagle Forge Network</title>
        <meta
          name="description"
          content="Learn about David Sacks and the future of Crypto under the Trump administration"
        />
      </Helmet>

      <div className="flex min-h-screen flex-col">
        <Navbar />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-military-navy to-military-blue py-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-col items-center text-center">
                <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white leading-tight">
                  Crypto cZAR AI Initiative
                </h1>
                <p className="mb-8 text-xl text-gray-200 max-w-3xl">
                  Revolutionizing digital finance through advanced AI and blockchain technology,
                  led by Trump's technology czar David Sacks
                </p>
                <Button 
                  onClick={handleJoinNetwork}
                  size="lg" 
                  className="bg-military-red hover:bg-military-red/90 text-white font-bold"
                >
                  Join the Network
                </Button>
              </div>
            </div>
          </section>

          {/* David Sacks Profile */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-military-navy">
                    David Sacks: From Cape Town to Silicon Valley
                  </h2>
                  <p className="text-lg mb-4">
                    Born and raised in Cape Town, South Africa, David Sacks has risen to become one of the most influential 
                    figures in technology and venture capital. Now serving as Trump's czar of crypto and AI, Sacks brings his 
                    wealth of experience and South African roots to shape the future of digital currencies in America.
                  </p>
                  <p className="text-lg mb-4">
                    Like fellow South African Michael Sacks, David has leveraged his unique global perspective to become one of 
                    the most respected and connected figures in Silicon Valley. As a co-founder of PayPal and former COO, 
                    his fintech expertise is unparalleled.
                  </p>
                  <p className="text-lg font-semibold text-military-red">
                    "Black Monday Hoax is over." - David Sacks
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/bKWVl-fzN0M?si=_2cBkmCY3TopDEI0" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Policy Shift Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-military-navy">
                A New Era for Cryptocurrency Regulation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/j00YbDJwMNQ?si=If_whb3ssYevpQtf" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                
                <div className="order-1 md:order-2">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-military-blue mb-6">
                    <p className="italic text-lg">
                      "The Justice Department will no longer pursue litigation or enforcement actions that have the effect of 
                      superimposing regulatory frameworks on digital assets. The DOJ is not a digital assets regulator."
                    </p>
                    <p className="text-right mt-2 font-semibold">- Justice Department Memo</p>
                  </div>
                  
                  <p className="text-lg mb-4">
                    Under the Trump administration, the landscape for cryptocurrency is undergoing a dramatic transformation. 
                    The Justice Department has announced it will focus on prosecuting individuals who victimize digital asset investors
                    or use digital assets for criminal activities, rather than imposing regulatory frameworks.
                  </p>
                  
                  <p className="text-lg mb-4">
                    This shift represents a direct response to concerns about the "weaponization" of regulatory agencies under 
                    the previous administration. The National Cryptocurrency Enforcement Team (NCET) has been disbanded, 
                    and the Market Integrity and Major Frauds Unit has ceased cryptocurrency enforcement.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Market Impact */}
          <section className="py-16 bg-military-silver/10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-8 text-center text-military-navy">
                Market Response & Future Outlook
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="text-lg mb-4">
                    The cryptocurrency market saw an explosive rally following Trump's election, with Bitcoin reaching the 
                    landmark price of $100,000 for the first time in December 2024. This surge was largely driven by 
                    expectations of friendlier policies and greatly reduced oversight.
                  </p>
                  
                  <p className="text-lg mb-4">
                    Despite recent market volatility related to new tariff policies, David Sacks remains confident in the 
                    long-term prospects for cryptocurrencies. As the administration's cryptocurrency czar, Sacks is positioned 
                    to guide policy that supports innovation while protecting investors.
                  </p>
                  
                  <p className="text-lg">
                    With his South African background and global perspective, Sacks brings a unique understanding of emerging 
                    markets and international finance to his role - potentially opening new doors for collaboration between 
                    the United States and countries like South Africa in the digital currency space.
                  </p>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/ma9uf7LQVnc?si=lIGB1mZolbLCF-xY" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-military-navy">Join the First 500</h3>
                <p className="text-lg mb-6">
                  Be among the first 500 innovators to join our exclusive network of entrepreneurs, developers, 
                  and investors focused on the future of cryptocurrency and AI. Connect with leaders like David Sacks
                  and help shape the future of digital finance.
                </p>
                <Button 
                  onClick={handleJoinNetwork} 
                  className="w-full bg-military-red hover:bg-military-red/90 text-white font-bold py-3"
                >
                  Register Your Interest
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CryptoCzar;
