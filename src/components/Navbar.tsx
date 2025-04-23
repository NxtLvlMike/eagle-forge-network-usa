import { Button } from "@/components/ui/button";
import { Ruler, Square, Briefcase, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-military-navy text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <Link to="/">
            <div className="flex items-center">
              <Square className="h-8 w-8 text-military-red mr-2" strokeWidth={1.5}>
                <Ruler className="h-5 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" strokeWidth={1.5} />
              </Square>
              <span className="text-2xl font-bold eagle-title">SAX CORP</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center justify-center">
          <ul className="flex flex-wrap gap-1 md:gap-3 rounded-lg bg-military-navy/80 p-1 shadow-inner">
            <li>
              <Link to="/" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/members" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/about" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                About
              </Link>
            </li>
            <li className="relative group">
              <Link to="/mind-bridge" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Mind-Bridge
              </Link>
            </li>
            <li>
              <Link to="/sax-defense" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Defense
              </Link>
            </li>
            <li>
              <Link to="/nwo" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                NWO
              </Link>
            </li>
            <li>
              <Link to="/anduril" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Anduril
              </Link>
            </li>
            <li>
              <Link to="/microsoft-military" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Microsoft
              </Link>
            </li>
            <li>
              <Link to="/crypto-czar" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Crypto
              </Link>
            </li>
            <li>
              <Link to="/learn-ai" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                AI Skills
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block px-3 py-2 text-sm rounded-md hover:bg-white/10 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="flex gap-2 mt-4 sm:mt-0">
          <a 
            href="https://wa.me/27697933038" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span className="text-sm font-bold">WhatsApp</span>
          </a>
          <Button variant="outline" className="text-military-navy bg-white border-white hover:bg-white/90 hover:text-military-navy text-sm font-bold">
            Login
          </Button>
          <Button className="bg-military-red hover:bg-military-red/90 text-sm font-bold">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
