
import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-military-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-military-red mr-2" />
              <span className="text-xl font-bold">Eagle Forge Network</span>
            </div>
            <p className="mt-2 text-sm text-gray-300">
              Uniting South Africans in America through strength and innovation
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Links</h3>
              <ul className="space-y-1">
                <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
                <li><a href="/members" className="text-gray-300 hover:text-white">Members</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Eagle Forge Network USA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
