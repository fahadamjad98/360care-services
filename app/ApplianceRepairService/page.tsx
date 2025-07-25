"use client";
import React, { useState } from "react";
import ContactModal from "../components/forms/contact-modal";

export default function ApplianceRepairPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<"home" | "commercial">(
    "home"
  );

  const services = {
    home: [
      {
        title: "Washing Machine Repair",
        description:
          "Expert repair for all washing machine brands including Samsung, LG, Bosch, and Whirlpool",
        icon: "🔧",
        features: [
          "All brands serviced",
          "Drum replacement",
          "Motor repair",
          "Control board fixes",
        ],
      },
      {
        title: "Refrigerator Repair",
        description:
          "Complete refrigerator and freezer repair services including cooling system restoration",
        icon: "❄️",
        features: [
          "Cooling system repair",
          "Compressor service",
          "Thermostat replacement",
          "Ice maker fixes",
        ],
      },
      {
        title: "Dishwasher Repair",
        description:
          "Professional dishwasher repair and maintenance for optimal cleaning performance",
        icon: "🍽️",
        features: [
          "Pump replacement",
          "Spray arm cleaning",
          "Door seal repair",
          "Control panel fixes",
        ],
      },
    ],
    commercial: [
      {
        title: "Commercial Laundry",
        description:
          "Heavy-duty laundry equipment repair for hotels, hospitals, and laundromats",
        icon: "🏢",
        features: [
          "Industrial washers",
          "Commercial dryers",
          "Coin-operated machines",
          "Maintenance contracts",
        ],
      },
      {
        title: "Restaurant Equipment",
        description:
          "Kitchen appliance repair for restaurants, cafes, and food service establishments",
        icon: "🍳",
        features: [
          "Commercial refrigeration",
          "Ovens and ranges",
          "Ice machines",
          "Food processors",
        ],
      },
      {
        title: "Office Appliances",
        description:
          "Repair and maintenance of office appliances including water coolers and coffee machines",
        icon: "☕",
        features: [
          "Water dispensers",
          "Coffee machines",
          "Microwave ovens",
          "Mini fridges",
        ],
      },
    ],
  };

  const emergencyIssues = [
    {
      issue: "Flooding Washer",
      description: "Water leaking everywhere",
      icon: "💧",
      severity: "Critical",
    },
    {
      issue: "Fridge Not Cooling",
      description: "Complete cooling failure",
      icon: "🔥",
      severity: "Critical",
    },
    {
      issue: "Sparking Appliance",
      description: "Electrical issues or sparks",
      icon: "⚡",
      severity: "Critical",
    },
    {
      issue: "Strange Noises",
      description: "Unusual sounds from appliance",
      icon: "🔊",
      severity: "High",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-blue-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-purple-300/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">🔧</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Appliance Repair Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Expert appliance repair services in Dubai - from washing machines
              to refrigerators, we fix them all
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/+971585671289?text=Hi%2C%20I%20need%20an%20emergency%20appliance%20repair%20at%20my%20location.",
                    "_blank"
                  )
                }
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Emergency Appliance Repair
              </button>
              {/* <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Free Diagnosis
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Dubai Climate Challenges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Dubai's Appliance Challenges
              </h2>
              <p className="text-lg mb-6">
                Dubai's extreme climate, power fluctuations, and dust exposure
                create unique challenges for home appliances that require
                specialized repair expertise.
              </p>
              <div className="space-y-3">
                {[
                  "Extreme heat affecting appliance efficiency",
                  "Power surges damaging electronic components",
                  "Dust infiltration causing mechanical issues",
                  "Hard water damaging washing machines and dishwashers",
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🌡️</div>
              <div className="text-xl font-semibold">
                We understand Dubai's conditions
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Repair Services
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveService("home")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeService === "home"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Home Appliances
              </button>
              <button
                onClick={() => setActiveService("commercial")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeService === "commercial"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services[activeService].map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="p-8">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                  >
                    Book Service
                  </button>

                  <ContactModal
                    isOpen={isModalOpen}
                    onClose={() => setModalOpen(false)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Repairs */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Emergency Appliance Repair
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold mb-4">
                24/7 Emergency Technician
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Appliance emergencies can disrupt your daily life. Our certified
                technicians are available 24/7 with rapid response times across
                Dubai.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-400">
                    45 min
                  </div>
                  <div className="text-sm">Average Response</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm">Always Available</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    Certified
                  </div>
                  <div className="text-sm">Expert Technicians</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyIssues.map((emergency, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-lg p-4 border-l-4 ${
                    emergency.severity === "Critical"
                      ? "border-red-500"
                      : emergency.severity === "High"
                        ? "border-yellow-500"
                        : "border-blue-500"
                  }`}
                >
                  <div className="text-2xl mb-2">{emergency.icon}</div>
                  <h4 className="font-semibold mb-2">{emergency.issue}</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    {emergency.description}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      emergency.severity === "Critical"
                        ? "bg-red-500"
                        : emergency.severity === "High"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}
                  >
                    {emergency.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Appliance Problems */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Common Appliance Issues in Dubai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                problem: "Washing Machine Not Spinning",
                cause: "Motor failure or belt issues",
                solution: "Motor repair or belt replacement",
                icon: "🌪️",
              },
              {
                problem: "Refrigerator Not Cooling",
                cause: "Compressor failure or refrigerant leak",
                solution: "Compressor repair or refrigerant refill",
                icon: "🧊",
              },
              {
                problem: "Dishwasher Not Cleaning",
                cause: "Blocked spray arms or pump failure",
                solution: "Deep cleaning and pump repair",
                icon: "🧽",
              },
              {
                problem: "Dryer Not Heating",
                cause: "Heating element failure or thermostat issues",
                solution: "Element replacement and calibration",
                icon: "🔥",
              },
              {
                problem: "Microwave Not Working",
                cause: "Magnetron failure or door sensor issues",
                solution: "Component replacement and safety check",
                icon: "📱",
              },
              {
                problem: "AC Not Cooling",
                cause: "Refrigerant leak or compressor issues",
                solution: "System diagnosis and repair",
                icon: "❄️",
              },
            ].map((issue, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200"
              >
                <div className="text-3xl mb-3">{issue.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {issue.problem}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Cause:</strong> {issue.cause}
                </p>
                <p className="text-sm text-purple-600">
                  <strong>Solution:</strong> {issue.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brands We Service */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Brands We Service
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  All Major Appliance Brands
                </h3>
                <p className="text-lg mb-6">
                  Our certified technicians are trained to service all major
                  appliance brands with genuine parts and manufacturer-approved
                  repair methods.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Samsung",
                    "LG",
                    "Bosch",
                    "Whirlpool",
                    "Siemens",
                    "Electrolux",
                    "Haier",
                    "Panasonic",
                    "Sharp",
                    "Hitachi",
                    "Toshiba",
                    "And Many More",
                  ].map((brand, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🏷️</div>
                <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Check Your Brand
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Packages */}
        {/* <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Maintenance Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Check",
                price: "AED 199",
                period: "per visit",
                features: [
                  "Visual inspection",
                  "Basic cleaning",
                  "Performance check",
                  "Safety assessment",
                ],
                color: "blue",
              },
              {
                name: "Complete Service",
                price: "AED 349",
                period: "per visit",
                features: [
                  "Thorough inspection",
                  "Deep cleaning",
                  "Parts lubrication",
                  "Performance optimization",
                  "6-month warranty",
                ],
                color: "purple",
                popular: true,
              },
              {
                name: "Premium Care",
                price: "AED 549",
                period: "per visit",
                features: [
                  "Complete system check",
                  "Preventive maintenance",
                  "Parts replacement",
                  "Energy efficiency tune-up",
                  "12-month warranty",
                ],
                color: "indigo",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 ${pkg.popular ? "border-purple-500 transform scale-105" : "border-gray-200"} relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-gray-500 text-sm">{pkg.period}</div>
                </div>
                <div className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div
                        className={`w-2 h-2 bg-${pkg.color}-500 rounded-full mr-3`}
                      ></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full mt-6 bg-${pkg.color}-500 hover:bg-${pkg.color}-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300`}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Repair Service?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Certified Technicians",
                description: "Factory-trained experts with years of experience",
                icon: "👨‍🔧",
              },
              {
                title: "Genuine Parts",
                description:
                  "Only authentic manufacturer parts for lasting repairs",
                icon: "⚙️",
              },
              {
                title: "Warranty Coverage",
                description: "All repairs backed by comprehensive warranty",
                icon: "🛡️",
              },
              {
                title: "Same-Day Service",
                description: "Most repairs completed on the same day",
                icon: "⏰",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-lg p-6 shadow-md"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Appliance Repair?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From washing machines to refrigerators, our expert technicians are
            ready to fix your appliances quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/+971585671289?text=Hi%2C%20I%20need%20an%20emergency%20appliance%20repair%20at%20my%20location.",
                  "_blank"
                )
              }
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Emergency Appliance Repair
            </button>
            {/* <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Service
            </button> */}
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-semibold">Emergency Line</div>
                <div className="text-gray-600">Available 24/7</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">🕒</div>
              <div>
                <div className="font-semibold">Quick Response</div>
                <div className="text-gray-600">45 min average</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">💰</div>
              <div>
                <div className="font-semibold">Fair Pricing</div>
                <div className="text-gray-600">No hidden fees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
