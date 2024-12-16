import { Button } from "./ui/button"
import star from '../assets/star.png'
import star2 from '../assets/star2.png'
import star3 from '../assets/star3.png'
import sphere from '../assets/sphere.png'
import { motion } from "motion/react"
import { spring } from "motion"

const HeroSection = () => {
  return (
    <div className="relative px-6 py-24 max-w-7xl mx-auto sm:mt-12">
       <motion.img src={star2} initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.4, duration:0.4}} className="absolute sm:top-12 sm:left-16 h-12 w-12"/>
      <motion.img src={star} initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.6 ,duration:0.4}} className="absolute sm:top-4 top-16 right-20 sm:right-20 h-8 w-8"/>

      <motion.img src={star3} initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.5 ,duration:0.4}} className="absolute hidden sm:block sm:top-[400px] sm:right-28 h-12 w-12"/>

      {/** bg circles **/}

      <div className="absolute bottom-40 left-8 sm:w-78 sm:h-78 w-56 h-56 rounded-7xl bg-[#EDD955]/20 blur-3xl" />
      <div className="absolute top-52 right-4 md:w-96 md:h-96 w-56 h-56 sm:w-78 sm:h-78 hidden sm:block rounded-7xl bg-[#EDD955]/20 blur-3xl" />

      <div className='flex flex-col-reverse sm:flex-row justify-between items-center max-w-7xl z-30'>
      <div className="max-w-4xl flex flex-col text-center sm:text-left z-30">
        <motion.h1 initial={{opacity:0, y:50}} animate={{opacity:1,y:0}} transition={{delay:0.5 ,duration:0.6}} className="text-6xl font-bold tracking-tighter mb-6 text-white">
          Trusted Multi-Chain
          <br />
          <span className="text-yellow-400">DEX</span> Platform
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-400 mb-8"
          initial={{opacity:0, y:50}} animate={{opacity:1,y:0}} transition={{delay:0.7 ,duration:0.7}}
        >
          Trade, earn, and own crypto on the all-in-one multi-chain DEX
        </motion.p>
        <div className="flex justify-center sm:justify-start gap-4"
                    
        >
          <motion.button 
          initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.5 ,duration:0.4}}
          className="bg-gradient-to-r p-2 from-[#E4B40D]  to-[#FFE68F] text-black hover:bg-yellow-500 rounded-2xl">
            Connect Wallet
          </motion.button>
          <motion.button  
          initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{delay:0.5 ,duration:0.4}}
          className="border border-yellow-400 p-2 text-yellow-400 rounded-2xl hover:text-white hover:bg-yellow-400/10">
            Trade Crypto
          </motion.button>
        </div>
      </div>
      <motion.img src={sphere} 
      initial={{opacity:0, scale:0.5}} animate={{opacity:1,scale:1}} transition={{delay:0.5 ,duration:0.4}}
      className="z-30"/>
      </div>

    </div>
  )
}

export default HeroSection