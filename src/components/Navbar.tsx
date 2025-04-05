
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-military-navy text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <div className="flex items-center mb-4 sm:mb-0">
          <Shield className="h-8 w-8 text-military-red mr-2" />
          <span className="text-2xl font-bold eagle-title">Eagle Forge Network</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          <Link to="/" className="text-white hover:text-military-silver transition-colors duration-200">
            Home
          </Link>
          <Link to="/members" className="text-white hover:text-military-silver transition-colors duration-200">
            Members
          </Link>
          <Link to="/about" className="text-white hover:text-military-silver transition-colors duration-200">
            About
          </Link>
          <Link to="/mind-bridge" className="text-white hover:text-military-silver transition-colors duration-200">
            Mind Bridge
          </Link>
          <Link to="/contact" className="text-white hover:text-military-silver transition-colors duration-200">
            Contact
          </Link>
        </div>
        
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-military-navy">
            Login
          </Button>
          <Button className="bg-military-red hover:bg-military-red/90">
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
