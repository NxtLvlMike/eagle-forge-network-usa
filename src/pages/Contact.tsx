
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { MessageSquare, MapPin, Mail, Phone, User } from "lucide-react";

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
              Get in touch with the SAX Defense team
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <p className="mb-6 text-gray-700">
                Have questions about our technology, defense systems, or investment opportunities? 
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
                <div className="flex items-start space-x-3 mb-4">
                  <User className="h-5 w-5 text-military-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">CEO</h3>
                    <p className="text-gray-700">Michael Sacks</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 mb-4">
                  <Phone className="h-5 w-5 text-military-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Cell Number</h3>
                    <p className="text-gray-700">+27697933038</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 mb-4">
                  <Mail className="h-5 w-5 text-military-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-700">info@agiautomation.co.za</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-military-red mt-0.5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2c-2.8 0-5 2.2-5 5v3h10V7c0-2.8-2.2-5-5-5Z" />
                    <path d="M17 10H7v11h10V10Z" />
                  </svg>
                  <div>
                    <h3 className="font-bold text-lg">Website</h3>
                    <p className="text-gray-700">www.agent-q.ai</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-military-red mt-0.5" />
                  <div>
                    <h3 className="font-bold text-lg">Company Address</h3>
                    <p className="text-gray-700">122 Ranger Road</p>
                    <p className="text-gray-700">Fish Hoek</p>
                    <p className="text-gray-700">Cape Town</p>
                    <p className="text-gray-700">Western Cape</p>
                    <p className="text-gray-700">South Africa</p>
                    <p className="text-gray-700">7975</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-military-navy text-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-4">Important Notice</h3>
                <p className="mb-4">
                  SAX Defense is currently exploring options to relocate our headquarters to the United States of America.
                </p>
                <p>
                  We are in the process of evaluating strategic locations that will best support our mission to provide cutting-edge defense technologies and enhance our global partnerships.
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
