
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Users, Target } from "lucide-react";

const InvestorSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Badge className="mb-6 mx-auto block w-fit bg-military-navy">Investor Relations</Badge>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold eagle-title mb-4">
            Unparalleled Growth Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in revolutionizing the global defense landscape with next-generation autonomous systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
            <TrendingUp className="h-10 w-10 text-military-red mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">$12.8B</h3>
            <p className="text-gray-600">Projected Market Size by 2028</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
            <Award className="h-10 w-10 text-military-red mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">142%</h3>
            <p className="text-gray-600">Year-over-Year Revenue Growth</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
            <Users className="h-10 w-10 text-military-red mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">14</h3>
            <p className="text-gray-600">National Defense Partners</p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
            <Target className="h-10 w-10 text-military-red mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-2">98.7%</h3>
            <p className="text-gray-600">System Effectiveness Rate</p>
          </div>
        </div>
        
        <div className="bg-military-navy text-white rounded-xl overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">Strategic Investment Opportunity</h3>
              <p className="mb-6 text-gray-300">
                SAX CORP Defense represents a unique opportunity to invest in the future of defense technology. Our revolutionary NEXUS™ platform is positioned to transform military and security operations globally.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="font-bold">Current Valuation:</span>
                  <span>$1.4 Billion</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Funding Round:</span>
                  <span>Series D</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Minimum Investment:</span>
                  <span>$5 Million</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Target Raise:</span>
                  <span>$200 Million</span>
                </div>
              </div>
              
              <Button className="bg-military-red hover:bg-military-red/90 w-full">
                Request Investor Prospectus
              </Button>
            </div>
            
            <div className="bg-gray-800 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-4">Growth Trajectory</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Revenue Growth</span>
                    <span className="font-bold">142%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-military-red h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Market Penetration</span>
                    <span className="font-bold">38%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-military-red h-2.5 rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Contract Backlog</span>
                    <span className="font-bold">$1.2B</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-military-red h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>R&D Pipeline</span>
                    <span className="font-bold">76%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-military-red h-2.5 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-yellow-500/20 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-300 font-bold">
                  Projected 5-year CAGR: 86% — outperforming defense industry average by 4.3x
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Our Strategic Partners</h3>
          <div className="flex justify-center flex-wrap gap-12 opacity-70">
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Pentagon</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Northrop</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Lockheed</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Boeing</div>
            <div className="w-32 h-12 bg-gray-300 rounded flex items-center justify-center">Raytheon</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
