import dollar from '../assets/dollar.png'
import tik from '../assets/tik.png'
import call from '../assets/call.png'
import support from '../assets/support.png'
import {motion} from 'motion/react'

const FeaturesSection = () => {
  const features = [
    {
      img: dollar,
      title: "Cheapest TXs",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      img: tik,
      title: "CerTIK",
      description: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
    },
    {
      img: call,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
    },
    {
      img: support,
      title: "CrossDex Support",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ]

  return (
    <div className="px-6 py-24 text-white max-w-7xl mx-auto">
      <motion.h2 
      initial={{opacity:0, y: 30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.5 ,duration:0.4}}
      className="text-4xl font-bold text-center mb-12 ">
        Our <span className="text-yellow-400">Features</span>
      </motion.h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          return (
            <motion.div
              key={index}
              initial={{opacity:0, y: 30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}  transition={{ delay: 0.3 * index, duration: 0.4 }}
              className="p-6 bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-800"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <img src={feature.img} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}

export default FeaturesSection