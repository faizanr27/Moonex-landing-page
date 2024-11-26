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
    <div className="px-6 py-24 overflow-hidden max-w-7xl mx-auto mt-20 xl:mt-40">
      <h2 className="text-4xl text-white font-bold text-center sm:text-left mb-12">
        Why <span className="text-yellow-400">MoonEX</span> ?
      </h2>
      <div className="absolute lg:left-[580px] md:left-[350px] sm:left-[200px] sm:top-[1000px] left-16 top-[1300px] w-56 h-56 sm:w-96 sm:h-96 rounded-7xl bg-[#EDD955]/20 blur-3xl " />
      <div className="sm:mx-auto bg-gray-800/30 backdrop-blur-xl rounded-xl p-4 sm:p-12 max-w-7xl ">
        <div className="grid grid-cols-3 ">
          <div className="text-xl font-bold border-r border-gray-800">
            <img
              alt="Moonex Logo"
              className="object-cover h-2 sm:h-4 xs:h-4 mx-auto mb-2"
              src={Comparison}
            />
            </div>
          <div className="text-center border-r border-gray-800">
            <img
              alt="Moonex Logo"
              className="sm:h-12 object-cover h-4 xs:h-8 mx-auto mb-2"
              src={Group10}
            />
          </div>
          <div className="text-center">
            <img
              alt="Uniswap Logo"
              className="sm:h-8 object-cover h-4 xs:h-8 mx-auto mb-2"
              src={uniswap}
            />
          </div>
          {comparisonPoints.map((point, index) => (
            <React.Fragment key={`point-${index}`}>
              <div className="py-4 border-t border-r border-gray-800 text-gray-400 text-xs xs:text-sm sm:text-lg">
                <ol type='1'>
                  <li>{point}</li>
                </ol>
              </div>
              <div className="py-4 border-t border-r border-gray-800 text-center">
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