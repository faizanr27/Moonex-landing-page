import { Button } from "./ui/button";
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'

const Navbar = ({children}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <nav className="flex items-center justify-between p-6 w-full">
        <div className="flex items-center gap-2">
          <img
            alt="Moonex Logo"
            // className="h-10 w-10"
            src={logo2}
          />
          <img
            alt="Moonex Logo"
            // className="h-10 w-10"
            src={logo1}/>
        </div>
        <div className="hidden md:flex items-center gap-8">
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
        <Button className="bg-gradient-to-r from-[#E4B40D]  to-[#FFE68F] rounded-2xl p-4">
          Connect Wallet
        </Button>
      </nav>
      {children}
    </div>
  );
}

export default Navbar