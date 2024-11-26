import { Button } from "./ui/button";
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import circle1 from '../assets/circle1.png'
import circle2 from '../assets/circle2.png'
import circle3 from '../assets/circle3.png'

const Navbar = ({children}) => {
  return (
    <div className="">

      <img src={circle1} className="absolute 2xl:-top-12 xl:top-4 xl:left-0 lg:bottom-4 lg:right-4 md:top-20 md:right-2 hidden sm:block z-20 "/>
      <img src={circle2} className="absolute 2xl:-top-12 2xl:left-4 xl:top-0 xl:right-24 lg:bottom-24 lg:right-16 md:top-24 md:right-8 hidden sm:block z-20 "/>
      <img src={circle3} className="absolute 2xl:top-4 2xl:-left-12 xl:top-32 xl:left-4 lg:top-32 lg:right-52 md:top-32 md:right-24 hidden sm:block z-20 "/>

      <nav className="max-w-7xl mx-auto flex items-center justify-between p-6 w-full">
        <div className="flex items-center gap-2">
          <img
            alt="Moonex Logo"
            className="h-10 w-10 sm:h-auto sm:w-auto"
            src={logo2}
          />
          <img
            alt="Moonex Logo"
            // className="h-10 w-10"
            src={logo1}/>
        </div>
        <div className="hidden md:flex items-center gap-8 z-30">
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
        <Button className="bg-gradient-to-r h-4 w-24 text-xs sm:h-auto sm:w-auto sm:text-[14px] from-[#E4B40D]  to-[#FFE68F] rounded-2xl p-4 z-30">
          Connect Wallet
        </Button>
      </nav>
      {children}
    </div>
  );
}

export default Navbar