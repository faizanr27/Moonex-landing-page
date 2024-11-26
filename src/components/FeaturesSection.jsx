import { DollarSign, Shield, LinkIcon, Waves } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Cheapest TXs",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: Shield,
      title: "CerTIK",
      description: "We are Audited by Certik. CertiK is the leading security-focused ranking platform to",
    },
    {
      icon: LinkIcon,
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
    },
    {
      icon: Waves,
      title: "CrossDex Support",
      description: "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ]

  return (
    <div className="px-6 py-24 text-white ">
      <h2 className="text-4xl font-bold text-center mb-12 ">
        Our <span className="text-yellow-400">Features</span>
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="p-6 bg-gray-800/30 backdrop-blur-xl rounded-xl border border-gray-800"
            >
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default FeaturesSection