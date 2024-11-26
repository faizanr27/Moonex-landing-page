import { Button } from "./ui/button"
import star from '../assets/star.png'
import star2 from '../assets/star2.png'
import star3 from '../assets/star3.png'
import sphere from '../assets/sphere.png'

const HeroSection = () => {
  return (
    <div className="relative px-6 py-24">
       <img src={star2} className="absolute top-20 left-20"/>
      <img src={star} className="absolute top-20 right-20"/>

      <img src={star3} className="absolute top-96 right-20"/>
      <div className="absolute bottom-40 left-8 w-96 h-96 rounded-7xl bg-[#EDD955]/20 blur-3xl" />
      <div className="absolute top-52 right-4 w-96 h-96 rounded-7xl bg-[#EDD955]/20 blur-3xl" />

      <div className='flex flex-col-reverse sm:flex-row justify-between items-center max-w-7xl'>
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        <h1 className="text-6xl font-bold tracking-tighter mb-6 text-white">
          Trusted Multi-Chain
          <br />
          <span className="text-yellow-400">DEX</span> Platform
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </p>
        <div className="flex justify-center sm:justify-start gap-4">
          <Button className="bg-gradient-to-r from-[#E4B40D]  to-[#FFE68F] text-black hover:bg-yellow-500 rounded-2xl">
            Connect Wallet
          </Button>
          <Button variant="outline" className="border-yellow-400 text-yellow-400 rounded-2xl hover:bg-yellow-400/10">
            Trade Crypto
          </Button>
        </div>
      </div>
      <img src={sphere}/>
      </div>

    </div>
  )
}

export default HeroSection