"use client";
import React, { useState } from "react";
import ContactModal from "../components/forms/contact-modal";

export default function CleaningServicesPage() {
  const [activeService, setActiveService] = useState<
    "residential" | "commercial"
  >("residential");
  const [isModalOpen, setModalOpen] = useState(false);

  const services = {
    residential: [
      {
        title: "House Deep Cleaning",
        description:
          "Comprehensive deep cleaning for homes including all rooms, bathrooms, and kitchens",
        icon: "🏠",
        features: [
          "All rooms covered",
          "Bathroom sanitization",
          "Kitchen deep clean",
          "Furniture dusting",
        ],
      },
      {
        title: "Villa Cleaning",
        description:
          "Specialized cleaning services for large villas and luxury homes in Dubai",
        icon: "🏰",
        features: [
          "Multiple floors",
          "Outdoor areas",
          "Pool cleaning",
          "Garden maintenance",
        ],
      },
      {
        title: "Apartment Cleaning",
        description:
          "Efficient cleaning services tailored for apartments and smaller living spaces",
        icon: "🏢",
        features: [
          "Compact space expertise",
          "Balcony cleaning",
          "Quick turnaround",
          "Flexible scheduling",
        ],
      },
    ],
    commercial: [
      {
        title: "Office Cleaning",
        description:
          "Professional office cleaning services for businesses, co-working spaces, and corporate buildings",
        icon: "🏢",
        features: [
          "Daily maintenance",
          "Sanitization",
          "Carpet cleaning",
          "Window cleaning",
        ],
      },
      {
        title: "Restaurant Cleaning",
        description:
          "Specialized cleaning for restaurants, cafes, and food service establishments",
        icon: "🍽️",
        features: [
          "Kitchen deep clean",
          "Food safety compliance",
          "Grease removal",
          "Equipment sanitization",
        ],
      },
      {
        title: "Retail Store Cleaning",
        description:
          "Cleaning services for retail spaces, showrooms, and shopping centers",
        icon: "🛍️",
        features: [
          "Customer area focus",
          "Display cleaning",
          "Floor maintenance",
          "Restroom sanitization",
        ],
      },
    ],
  };

  const urgentIssues = [
    {
      issue: "Mold Growth",
      description: "Mold and mildew in humid areas",
      icon: "🦠",
      severity: "Critical",
    },
    {
      issue: "Pest Infestation",
      description: "Cleaning after pest control treatment",
      icon: "🐛",
      severity: "High",
    },
    {
      issue: "Water Damage",
      description: "Flood or leak cleanup",
      icon: "💧",
      severity: "Critical",
    },
    {
      issue: "Odor Removal",
      description: "Strong odors requiring immediate attention",
      icon: "🫧",
      severity: "High",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated cleaning bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-cyan-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-blue-300/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">🧽</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              Professional Cleaning Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Pristine cleaning solutions for homes and businesses in Dubai -
              residential, commercial, and specialized services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/+971585671289?text=Hi%2C%20I%20need%20an%20emergency%20Cleaning%20at%20my%20location.",
                    "_blank"
                  )
                }
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </button>
              {/* <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Cleaning
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Dubai Climate Challenges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Dubai's Cleaning Challenges
              </h2>
              <p className="text-lg mb-6">
                Dubai's desert environment, high humidity, and urban pollution
                create unique cleaning challenges that require specialized
                knowledge and equipment.
              </p>
              <div className="space-y-3">
                {[
                  "Constant dust accumulation from desert winds",
                  "High humidity causing mold and mildew growth",
                  "Sand particles requiring specialized removal techniques",
                  "Air conditioning systems spreading dust and allergens",
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🌪️</div>
              <div className="text-xl font-semibold">
                We handle Dubai's unique challenges
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Cleaning Services
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveService("residential")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeService === "residential"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Residential Cleaning
              </button>
              <button
                onClick={() => setActiveService("commercial")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeService === "commercial"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Commercial Cleaning
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
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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

        {/* Urgent Cleaning Issues */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Emergency Cleaning Services
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">
                Rapid Response Cleaning
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Some cleaning situations require immediate attention to prevent
                health risks and further damage. Our emergency team is ready
                24/7.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-cyan-400">24/7</div>
                  <div className="text-sm">Emergency Response</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">Safe</div>
                  <div className="text-sm">Eco-Friendly Products</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    Certified
                  </div>
                  <div className="text-sm">Professional Team</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {urgentIssues.map((issue, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-lg p-4 border-l-4 ${
                    issue.severity === "Critical"
                      ? "border-red-500"
                      : issue.severity === "High"
                        ? "border-yellow-500"
                        : "border-blue-500"
                  }`}
                >
                  <div className="text-2xl mb-2">{issue.icon}</div>
                  <h4 className="font-semibold mb-2">{issue.issue}</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    {issue.description}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      issue.severity === "Critical"
                        ? "bg-red-500"
                        : issue.severity === "High"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}
                  >
                    {issue.severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Cleaning Problems */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Common Cleaning Challenges in Dubai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                problem: "Dust Accumulation",
                cause: "Desert winds and sandstorms",
                solution: "Regular deep cleaning and HEPA filtration",
                icon: "🌪️",
              },
              {
                problem: "Mold and Mildew",
                cause: "High humidity and poor ventilation",
                solution: "Anti-fungal treatments and humidity control",
                icon: "🦠",
              },
              {
                problem: "Stubborn Stains",
                cause: "Spills, food, and daily wear",
                solution: "Professional stain removal techniques",
                icon: "🧽",
              },
              {
                problem: "Allergen Buildup",
                cause: "Dust mites, pet dander, and pollutants",
                solution: "Deep sanitization and allergen removal",
                icon: "🤧",
              },
              {
                problem: "Grease and Grime",
                cause: "Kitchen cooking and food preparation",
                solution: "Degreasing agents and steam cleaning",
                icon: "🍳",
              },
              {
                problem: "Odor Problems",
                cause: "Cooking, pets, and poor ventilation",
                solution: "Odor neutralization and air purification",
                icon: "🫧",
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
                <p className="text-sm text-blue-600">
                  <strong>Solution:</strong> {issue.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Cleaning Products & Equipment */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Professional Cleaning Products
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Eco-Friendly & Effective Solutions
                </h3>
                <p className="text-lg mb-6">
                  We use premium, eco-friendly cleaning products that are safe
                  for your family and pets while being tough on dirt and germs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Karcher",
                    "Nilfisk",
                    "Diversey",
                    "Ecolab",
                    "3M",
                    "Rubbermaid",
                    "Vileda",
                    "Unger",
                    "Bissell",
                    "Hoover",
                    "Dyson",
                    "Tennant",
                  ].map((brand, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🧴</div>
                {/* <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Our Products
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Cleaning Packages */}
        {/* <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Cleaning Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Clean",
                price: "AED 120",
                period: "per session",
                features: [
                  "Surface cleaning",
                  "Vacuum and mop",
                  "Bathroom sanitization",
                  "Trash removal"
                ],
                color: "blue"
              },
              {
                name: "Deep Clean",
                price: "AED 200",
                period: "per session",
                features: [
                  "Comprehensive cleaning",
                  "Inside appliances",
                  "Detailed sanitization",
                  "Window cleaning",
                  "Satisfaction guarantee"
                ],
                color: "cyan",
                popular: true
              },
              {
                name: "Premium Service",
                price: "AED 300",
                period: "per session",
                features: [
                  "White-glove service",
                  "Eco-friendly products",
                  "Carpet deep cleaning",
                  "Air purification",
                  "Monthly maintenance"
                ],
                color: "teal"
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
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Cleaning Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Trained Staff",
                description: "Professional cleaners with extensive training",
                icon: "👨‍🔧",
              },
              {
                title: "Eco-Friendly",
                description: "Safe, non-toxic cleaning products",
                icon: "🌱",
              },
              {
                title: "Fully Insured",
                description: "Complete insurance coverage for peace of mind",
                icon: "🛡️",
              },
              {
                title: "Flexible Scheduling",
                description: "Convenient timing that fits your schedule",
                icon: "📅",
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
            Ready for a Spotless Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From homes to offices, our professional cleaning team is ready to
            make your space shine with attention to detail and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button> */}
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-semibold">Free Estimates</div>
                <div className="text-gray-600">No hidden costs</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">🕒</div>
              <div>
                <div className="font-semibold">Same Day</div>
                <div className="text-gray-600">Emergency service</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">✅</div>
              <div>
                <div className="font-semibold">Satisfaction Guaranteed</div>
                <div className="text-gray-600">100% guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
