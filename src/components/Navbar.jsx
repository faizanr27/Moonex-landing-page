import { Button } from "./ui/button";
import t3c from '../assets/t3c.png'
import { motion } from "motion/react"
import { useState,useEffect } from "react";
import { Menu, X } from "lucide-react";
import moonexfull from "../assets/moonexfull.png"

const Navbar = ({children}) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clicked")
  }
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="">

        <img
          src={t3c}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />

      <div className={`${isScrolled && 'bg-gray-900/70 z-50 sticky top-0'}`}> 
      <nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${"max-w-7xl mx-auto flex items-center justify-between p-6 w-full "}${isMenuOpen && 'bg-gray-900/95 border-b z-50 sticky top-0'}`}>
        <div className="flex items-center">
          <a href="/" className="flex items-center">
          <img
            alt="Moonex Logo"
            className="h-16 w-auto"
            src={moonexfull}
          /> 
          </a>
        </div>
        <div className="hidden md:flex items-center md:gap-4 lg:gap-8 z-30 -ml-10">
          <h1 className="text-[#FFFFFF] font-bold hover:text-[#EDD955]" to="#">
            Home
          </h1>
          <h1 className="text-[#FFFFFF] font-bold hover:text-[#EDD955]" to="#">
            About Us
          </h1>
          <h1 className="text-[#FFFFFF] font-bold hover:text-[#EDD955]" to="#">
            Roadmap
          </h1>
          <h1 className="text-[#FFFFFF] font-bold hover:text-[#EDD955]" to="#">
            FAQs
          </h1>
          <h1 className="text-[#FFFFFF] font-bold hover:text-[#EDD955]" to="#">
            Contact Us
          </h1>
        </div>
        {/* <Button className="bg-gradient-to-r h-4 w-24 text-xs sm:h-auto sm:w-auto sm:text-[14px] from-[#E4B40D]  to-[#FFE68F] rounded-2xl p-4 z-30">
          Connect Wallet
        </Button> */}

          <div className="hidden md:block">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 rounded-full">
              Connect Wallet
            </Button>
          </div>

          <div className="block md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6"/>
              ) : (
                <Menu className="h-8 w-8"/>
              )}
            </button>
          </div>

        {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={isMenuOpen ? { opacity: 1, y: 100 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed inset-0 z-20 bg-gray-900/95">
          
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col space-y-6 font-medium text-xl text-center">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              About Us
            </a>
            <a
              href="/roadmap"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              Roadmap
            </a>
            <a
              href="/faqs"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-400 hover:bg-gray-800/30 transition-colors"
            >
              FAQs
            </a>
            <div className="px-4 py-3">
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 rounded-full">
              Connect Wallet
            </Button>
          </div>
            </div>
          </div>
        </motion.div>
      )}
      </nav>
      </div>
      {children}
    </div>
  );
}

export default Navbar
