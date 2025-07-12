"use client"
import React, { useState } from 'react';
import { title } from "@/components/primitives";

export default function AirConditionerServicePage() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');

  const services: Record<'residential' | 'commercial', { title: string; description: string; icon: string; features: string[] }[]> = {
    residential: [
      {
        title: "AC Installation",
        description: "Professional installation of split, window, and central AC units with proper sizing and positioning",
        icon: "🏠",
        features: ["Free consultation", "Energy efficiency assessment", "Warranty included", "Same-day service"]
      },
      {
        title: "AC Repair",
        description: "Expert diagnosis and repair of all AC issues including cooling problems, electrical faults, and mechanical failures",
        icon: "🔧",
        features: ["24/7 emergency repair", "Genuine parts only", "Quick diagnosis", "Transparent pricing"]
      },
      {
        title: "AC Maintenance",
        description: "Regular maintenance packages to keep your AC running efficiently and prevent costly breakdowns",
        icon: "🛠️",
        features: ["Monthly/quarterly plans", "Filter cleaning/replacement", "Coil cleaning", "Performance optimization"]
      }
    ],
    commercial: [
      {
        title: "Central AC Systems",
        description: "Installation, maintenance, and repair of large-scale commercial HVAC systems for offices and retail spaces",
        icon: "🏢",
        features: ["System design", "Energy audits", "Preventive maintenance", "Emergency response"]
      },
      {
        title: "VRF Systems",
        description: "Variable Refrigerant Flow systems for multi-zone commercial buildings with precise temperature control",
        icon: "🎯",
        features: ["Multi-zone control", "Energy efficient", "Quiet operation", "Advanced diagnostics"]
      },
      {
        title: "Duct Cleaning",
        description: "Professional duct cleaning and sanitization services for improved air quality and system efficiency",
        icon: "💨",
        features: ["HEPA filtration", "Antimicrobial treatment", "Before/after inspection", "Health compliance"]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-cyan-300/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300/10 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">❄️</div>
            <h1 className={`${title()} text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent`}>
              Air Conditioner Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Beat Dubai's heat with our expert AC installation, repair, and maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Emergency AC Repair
              </button>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why AC Service is Critical in Dubai */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Dubai's Extreme Climate</h2>
              <p className="text-lg mb-4">
                With temperatures soaring above 45°C (113°F) in summer, your AC isn't just comfort—it's essential for health and productivity.
              </p>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">45°C+</div>
                  <div className="text-sm">Summer Highs</div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold">80%+</div>
                  <div className="text-sm">Humidity</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🌡️</div>
              <div className="text-xl font-semibold">Don't let the heat win</div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our AC Services</h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button 
                onClick={() => setActiveTab('residential')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === 'residential' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Residential
              </button>
              <button 
                onClick={() => setActiveTab('commercial')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === 'commercial' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services[activeTab].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common AC Problems */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Common AC Problems in Dubai</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                problem: "Not Cooling",
                cause: "Refrigerant leak, dirty filters, or compressor issues",
                icon: "🔥"
              },
              {
                problem: "High Electricity Bills",
                cause: "Poor maintenance, old unit, or incorrect sizing",
                icon: "💰"
              },
              {
                problem: "Strange Noises",
                cause: "Loose parts, worn bearings, or debris in unit",
                icon: "🔊"
              },
              {
                problem: "Water Leakage",
                cause: "Clogged drain, damaged pan, or installation issues",
                icon: "💧"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-red-500">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.problem}</h3>
                <p className="text-sm text-gray-600">{item.cause}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Packages */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Maintenance Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Care",
                price: "AED 199",
                period: "per visit",
                features: [
                  "Filter cleaning/replacement",
                  "Basic inspection",
                  "Thermostat check",
                  "Performance test"
                ],
                color: "blue"
              },
              {
                name: "Complete Care",
                price: "AED 399",
                period: "per visit",
                features: [
                  "Deep coil cleaning",
                  "Drain line cleaning",
                  "Electrical connections check",
                  "Refrigerant level check",
                  "Full system diagnosis"
                ],
                color: "cyan",
                popular: true
              },
              {
                name: "Premium Care",
                price: "AED 599",
                period: "per visit",
                features: [
                  "Everything in Complete Care",
                  "Duct inspection",
                  "Indoor air quality test",
                  "Energy efficiency report",
                  "Priority emergency service"
                ],
                color: "purple"
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-2 ${pkg.popular ? 'border-cyan-500 transform scale-105' : 'border-gray-200'} relative`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{pkg.price}</div>
                  <div className="text-gray-500 text-sm">{pkg.period}</div>
                </div>
                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className={`w-2 h-2 bg-${pkg.color}-500 rounded-full mr-3`}></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full mt-6 bg-${pkg.color}-500 hover:bg-${pkg.color}-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300`}>
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Service */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white mb-16">
          <div className="text-center">
            <div className="text-6xl mb-4">🚨</div>
            <h2 className="text-3xl font-bold mb-4">24/7 Emergency AC Repair</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              AC breakdown in Dubai's heat? We're here to help! Our emergency team responds within 30 minutes with fully equipped vans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white hover:bg-gray-100 text-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Call Emergency Line
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Cool Down?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let Dubai's heat get the best of you. Contact us today for professional AC services that keep you comfortable all year round.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-gray-600">+971 XX XXX XXXX</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">📱</div>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-gray-600">+971 XX XXX XXXX</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">📧</div>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-600">info@360care.ae</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}