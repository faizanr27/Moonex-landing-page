import { TextIcon as Telegram, RssIcon as Reddit, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white py-12 w-[]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img
              src="/placeholder.svg?height=40&width=40"
              alt="Moonex Logo"
              className="h-10 w-10"
            />
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-6 mb-6 md:mb-0">
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
          <div className="flex gap-4">
            <a className="text-gray-400 hover:text-white" to="#">
              <Telegram size={24} />
            </a>
            <a className="text-gray-400 hover:text-white" to="#">
              <Reddit size={24} />
            </a>
            <a className="text-gray-400 hover:text-white" to="#">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer