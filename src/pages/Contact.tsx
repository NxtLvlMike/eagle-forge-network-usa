
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-military-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <MessageSquare className="h-16 w-16 text-military-red mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4 eagle-title">Contact Us</h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300">
              Get in touch with the Eagle Forge Network team
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="mb-6 text-gray-700">
                Have questions about membership, training programs, or how to get involved? 
                We're here to help. Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is your message about?" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your inquiry..." 
                    rows={6}
                  />
                </div>
                
                <Button className="w-full bg-military-red hover:bg-military-red/90">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="font-bold text-lg mb-4">Headquarters</h3>
                <p className="text-gray-700 mb-1">1234 Military Avenue</p>
                <p className="text-gray-700 mb-1">Suite 500</p>
                <p className="text-gray-700 mb-4">Washington, DC 20001</p>
                
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Email:</span> info@eagleforge-network.usa
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> (202) 555-1234
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="font-bold text-lg mb-4">Training Facility</h3>
                <p className="text-gray-700 mb-1">5678 Tactical Road</p>
                <p className="text-gray-700 mb-1">Building B</p>
                <p className="text-gray-700 mb-4">Fort Worth, TX 76101</p>
                
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Email:</span> training@eagleforge-network.usa
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Phone:</span> (817) 555-5678
                </p>
              </div>
              
              <div className="bg-military-navy text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Membership Inquiries</h3>
                <p className="mb-4">
                  Interested in joining the Eagle Forge Network? Contact our membership team directly:
                </p>
                <p className="mb-1">
                  <span className="font-semibold">Email:</span> join@eagleforge-network.usa
                </p>
                <p>
                  <span className="font-semibold">Phone:</span> (202) 555-9876
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
