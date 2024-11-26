import { Check, X } from 'lucide-react'
import React from 'react'
import uniswap from '../assets/uniswap.png'
import Group10 from '../assets/Group10.png'
import Comparison from '../assets/Comparison.png'

const ComparisonSection = () => {
  const comparisonPoints = [
    "Point no one",
    "Point no two this",
    "Point no two this",
    "Point no two this",
    "Point no two this",
  ]

  return (
    <div className="px-6 py-24 overflow-hidden ">
      <h2 className="text-4xl text-white font-bold text-center sm:text-left mb-12">
        Why <span className="text-yellow-400">MoonEX</span> ?
      </h2>
      <div className="absolute sm:left-[680px] sm:top-[820px] left-16 top-[1260px] w-96 h-96 rounded-7xl bg-[#EDD955]/20 blur-3xl " />
      <div className="mx-auto bg-gray-800/30 backdrop-blur-xl rounded-xl p-12 max-w-7xl ">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-xl font-bold">
            <img
              alt="Moonex Logo"
              className="h-8 mx-auto mb-2"
              src={Comparison}
            />
            </div>
          <div className="text-center">
            <img
              alt="Moonex Logo"
              className="h-12 mx-auto mb-2"
              src={Group10}
            />
            {/* <span className="text-yellow-400 font-bold">Moonex</span> */}
          </div>
          <div className="text-center">
            <img
              alt="Uniswap Logo"
              className="h-8 mx-auto mb-2"
              src={uniswap}
            />
            {/* <span className="text-pink-500 font-bold">UNISWAP</span> */}
          </div>
          {comparisonPoints.map((point, index) => (
            <React.Fragment key={`point-${index}`}>
              <div className="py-4 border-t border-gray-800 text-gray-400">
                <ol type='1'>
                  <li>{point}</li>
                </ol>
              </div>
              <div className="py-4 border-t border-gray-800 text-center">
                <Check className="inline-block text-green-500" />
              </div>
              <div className="py-4 border-t border-gray-800 text-center">
                <X className="inline-block text-red-500" />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComparisonSection