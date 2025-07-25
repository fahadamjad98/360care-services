"use client";
import React, { useState } from "react";
import { title } from "@/components/primitives";
import ContactModal from "../components/forms/contact-modal";

export default function PlumbingServicesPage() {
  const [activeService, setActiveService] = useState<
    "residential" | "commercial"
  >("residential");
  const [showForm, setShowForm] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
 

  const services = {
    residential: [
      {
        title: "Leak Detection & Repair",
        description:
          "Advanced leak detection technology to find and fix hidden leaks before they cause damage",
        icon: "🔍",
        features: [
          "Non-invasive detection",
          "Hidden leak finding",
          "Pipe repair",
          "Water damage prevention",
        ],
      },
      {
        title: "Bathroom & Kitchen Plumbing",
        description:
          "Complete plumbing solutions for bathrooms and kitchens including fixtures and pipe installations",
        icon: "🚿",
        features: [
          "Fixture installation",
          "Pipe fitting",
          "Drain cleaning",
          "Water heater service",
        ],
      },
      {
        title: "Emergency Plumbing",
        description:
          "24/7 emergency plumbing services for burst pipes, major leaks, and urgent repairs",
        icon: "🚨",
        features: [
          "24/7 availability",
          "Rapid response",
          "Emergency repairs",
          "Damage control",
        ],
      },
    ],
    commercial: [
      {
        title: "Commercial Plumbing",
        description:
          "Complete plumbing systems for offices, retail spaces, and commercial buildings",
        icon: "🏢",
        features: [
          "System design",
          "Installation",
          "Maintenance",
          "Compliance checks",
        ],
      },
      {
        title: "Industrial Plumbing",
        description:
          "Heavy-duty plumbing solutions for industrial facilities and manufacturing plants",
        icon: "🏭",
        features: [
          "Process piping",
          "Industrial fixtures",
          "Waste management",
          "Safety systems",
        ],
      },
      {
        title: "Preventive Maintenance",
        description:
          "Regular maintenance programs to prevent costly plumbing failures and ensure smooth operations",
        icon: "🔧",
        features: [
          "Scheduled inspections",
          "Preventive repairs",
          "System optimization",
          "Cost savings",
        ],
      },
    ],
  };

  const emergencyIssues = [
    {
      issue: "Burst Pipes",
      description: "Water flooding from broken pipes",
      icon: "💥",
      severity: "Critical",
    },
    {
      issue: "Sewage Backup",
      description: "Sewage coming up drains",
      icon: "🚫",
      severity: "Critical",
    },
    {
      issue: "No Hot Water",
      description: "Water heater failure",
      icon: "🔥",
      severity: "High",
    },
    {
      issue: "Blocked Drains",
      description: "Complete drain blockage",
      icon: "🚰",
      severity: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated water drops */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-cyan-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-teal-300/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">🔧</div>
            <h1
              className={`${title()} text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent`}
            >
              Plumbing Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Expert plumbing solutions for Dubai's residential and commercial
              properties - from leaks to complete installations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open("https://wa.me/+971585671289", "_blank")
                }
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Emergency Plumber
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Dubai Water Challenges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Dubai's Unique Plumbing Challenges
              </h2>
              <p className="text-lg mb-6">
                Dubai's desert climate, hard water, and modern infrastructure
                create specific plumbing challenges that require expert
                knowledge and specialized solutions.
              </p>
              <div className="space-y-3">
                {[
                  "Hard water causing mineral buildup and pipe damage",
                  "Extreme temperatures affecting pipe expansion",
                  "Sand and dust infiltration in outdoor systems",
                  "High-rise building pressure requirements",
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🏜️</div>
              <div className="text-xl font-semibold">
                We know Dubai's plumbing
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Plumbing Services
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
                Residential
              </button>
              <button
                onClick={() => setActiveService("commercial")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeService === "commercial"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600"
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

      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Plumbing */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Emergency Plumbing Services
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold mb-4">
                24/7 Emergency Plumber
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Plumbing emergencies can cause serious damage. Our emergency
                plumbers are available 24/7 with rapid response times across
                Dubai.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">30 min</div>
                  <div className="text-sm">Average Response</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm">Always Available</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    Licensed
                  </div>
                  <div className="text-sm">Certified Plumbers</div>
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

        {/* Common Plumbing Issues */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Common Plumbing Issues in Dubai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                problem: "Low Water Pressure",
                cause: "Mineral buildup from hard water",
                solution: "Pipe descaling and fixture cleaning",
                icon: "💧",
              },
              {
                problem: "Pipe Corrosion",
                cause: "Hard water and high mineral content",
                solution: "Pipe replacement with corrosion-resistant materials",
                icon: "🔩",
              },
              {
                problem: "Blocked Drains",
                cause: "Sand, debris, and grease buildup",
                solution: "Professional drain cleaning and maintenance",
                icon: "🚰",
              },
              {
                problem: "Water Heater Issues",
                cause: "Sediment buildup and extreme usage",
                solution: "Regular maintenance and timely repairs",
                icon: "🔥",
              },
              {
                problem: "Toilet Problems",
                cause: "Hard water deposits and wear",
                solution: "Component replacement and adjustment",
                icon: "🚽",
              },
              {
                problem: "Faucet Leaks",
                cause: "Worn seals and mineral deposits",
                solution: "Seal replacement and fixture servicing",
                icon: "🚿",
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

        {/* Water Quality Solutions */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Water Quality Solutions
          </h2>
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Improve Your Water Quality
                </h3>
                <p className="text-lg mb-6">
                  Dubai's hard water can damage pipes, fixtures, and appliances.
                  Our water treatment solutions protect your plumbing investment
                  and improve water quality.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Water Softeners",
                    "Filtration Systems",
                    "Scale Prevention",
                    "Taste Enhancement",
                    "Pipe Protection",
                    "Appliance Longevity",
                  ].map((solution, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">💎</div>
                <button className="bg-white hover:bg-gray-100 text-teal-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Water Quality Test
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Packages */}
        {/* <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Plumbing Maintenance Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Maintenance",
                price: "AED 249",
                period: "per visit",
                features: [
                  "Fixture inspection",
                  "Leak detection",
                  "Drain cleaning",
                  "Water pressure check",
                ],
                color: "blue",
              },
              {
                name: "Complete Care",
                price: "AED 449",
                period: "per visit",
                features: [
                  "Full system inspection",
                  "Pipe condition assessment",
                  "Water heater service",
                  "Preventive maintenance",
                  "Emergency priority",
                ],
                color: "teal",
                popular: true,
              },
              {
                name: "Premium Protection",
                price: "AED 699",
                period: "per visit",
                features: [
                  "Comprehensive system audit",
                  "Water quality testing",
                  "Pipe descaling service",
                  "Fixture optimization",
                  "24/7 emergency service",
                ],
                color: "cyan",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 ${pkg.popular ? "border-teal-500 transform scale-105" : "border-gray-200"} relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
            Why Choose Our Plumbing Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Licensed & Insured",
                description:
                  "Fully licensed plumbers with comprehensive insurance coverage",
                icon: "🛡️",
              },
              {
                title: "Dubai Expertise",
                description:
                  "Deep understanding of Dubai's plumbing codes and challenges",
                icon: "🏙️",
              },
              {
                title: "Quality Guarantee",
                description:
                  "All work guaranteed with warranty on parts and labor",
                icon: "✅",
              },
              {
                title: "Emergency Response",
                description: "24/7 emergency service with rapid response times",
                icon: "⚡",
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
            Need a Plumber?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From minor leaks to major installations, our expert plumbers are
            ready to solve your plumbing problems quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Emergency Plumber
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Book Service
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
                <div className="text-gray-600">30 min average</div>
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
