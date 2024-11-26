import React, { useState } from "react"
import arrow from '../assets/arrow.png'
import plus from '../assets/plus.png'

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I get a Referral Code?",
      answer: "Contact our support team to receive your unique referral code.",
    },
    {
      question: "Do I get rewarded in tokens or ETH when I refer buyers?",
      answer: "You receive your rewards in ETH instantly once someone you refer makes a transaction!",
    },
    {
      question: "How do I get a Referral Code?",
      answer: "Contact our support team to receive your unique referral code.",
    },
  ]

  return (
    <div className="px-6 p-8 bg-gray-800/30 backdrop-blur-xl rounded-xl max-w-7xl w-[90%] mx-auto text-white mb-20">
      <h2 className="text-4xl font-bold text-center mb-2">
        <span className="text-yellow-400">FAQs</span>
      </h2>
      <div className="max-w-3xl mx-auto space-y-4 border-t border-gray-800">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-800"
          >
            <button
              className="w-full py-6 flex items-center justify-between text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? (
                <img src={arrow}/>
              ) : (
                <img src={plus}/>
              )}
            </button>
            {openIndex === index && (
              <div className="pb-6 text-gray-400">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqSection