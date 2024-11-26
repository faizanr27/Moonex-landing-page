import tel from '../assets/tel.png'
import reddit from '../assets/reddit.png'
import Vector from '../assets/Vector.png'
import moonex from '../assets/moonex.png'
import contactus from '../assets/contactus.png'

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-12 w-[]">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src={moonex}
              alt="Moonex Logo"
            />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 mb-6 md:mb-0 font-bold">
            <a className="hover:text-yellow-400" to="#">
              About Us
            </a>
            <a className="hover:text-yellow-400" to="#">
              Roadmap
            </a>
            <a className="hover:text-yellow-400" to="#">
              FAQs
            </a>
            <a className="hover:text-yellow-400" to="#">
              Contact Us
            </a>
          </nav>
          <div className="flex flex-col items-center gap-4">
            {/* <h1 className="font-bold font-2xl">Contact <span className="text-yellow-400">Us</span></h1> */}
            <img src={contactus}/>
            <div className="flex flex-row items-center gap-4">
            <a className="text-gray-400 hover:text-white" to="#">
              <img src={tel}/>
            </a>
            <a className="text-gray-400 hover:text-white" to="#">
              <img src={reddit}/>
            </a>
            <a className="text-gray-400 hover:text-white" to="#">
              <img src={Vector}/>
            </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer