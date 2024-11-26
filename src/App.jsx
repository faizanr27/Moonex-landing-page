import  Navbar  from "./components/Navbar.jsx"
import  HeroSection  from "./components/HeroSection.jsx"
import  ComparisonSection  from "./components/ComparisonSection.jsx"
import  FeaturesSection  from "./components/FeaturesSection.jsx"
import  FaqSection  from "./components/FaqSection.jsx"
import  Footer  from "./components/Footer.jsx"

const App = () => {
  return (
    <div className='flex flex-col bg-gradient-to-br from-[#0a192f] via-[#0a1f2f] to-[#0a192f] z-10'>
    <Navbar>
      <HeroSection />
      <ComparisonSection />
      <FeaturesSection />
      <FaqSection />
      <Footer />
    </Navbar>
    </div>

  )
}

export default App