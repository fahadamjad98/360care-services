"use client";
import React, { useState } from "react";
import { title } from "@/components/primitives";
import ContactModal from "../components/forms/contact-modal";

export default function ElectricalServicesPage() {
  const [activeCategory, setActiveCategory] = useState<
    "residential" | "commercial"
  >("residential");
  const [isModalOpen, setModalOpen] = useState(false);

  const services: Record<
    "residential" | "commercial",
    { title: string; description: string; icon: string; features: string[] }[]
  > = {
    residential: [
      {
        title: "Wiring & Rewiring",
        description:
          "Complete electrical wiring solutions for new installations and upgrades to existing systems",
        icon: "🔌",
        features: [
          "New home wiring",
          "Rewiring old properties",
          "Circuit upgrades",
          "Panel replacements",
        ],
      },
      {
        title: "Lighting Solutions",
        description:
          "Modern lighting installations including LED upgrades, smart lighting, and decorative fixtures",
        icon: "💡",
        features: [
          "LED conversions",
          "Smart lighting systems",
          "Chandelier installation",
          "Outdoor lighting",
        ],
      },
      {
        title: "Power Solutions",
        description:
          "Electrical outlet installations, power distribution, and surge protection systems",
        icon: "⚡",
        features: [
          "Additional outlets",
          "USB charging points",
          "Surge protectors",
          "Generator connections",
        ],
      },
    ],
    commercial: [
      {
        title: "Office Electrical",
        description:
          "Complete electrical solutions for offices, retail spaces, and commercial buildings",
        icon: "🏢",
        features: [
          "Office wiring",
          "Data center power",
          "Emergency lighting",
          "Fire alarm systems",
        ],
      },
      {
        title: "Industrial Systems",
        description:
          "Heavy-duty electrical installations for industrial facilities and manufacturing units",
        icon: "🏭",
        features: [
          "Motor installations",
          "Control panels",
          "High-voltage systems",
          "Safety systems",
        ],
      },
      {
        title: "Maintenance Contracts",
        description:
          "Ongoing electrical maintenance and inspection services for commercial properties",
        icon: "📋",
        features: [
          "Regular inspections",
          "Preventive maintenance",
          "Emergency repairs",
          "Compliance audits",
        ],
      },
    ],
  };

  const emergencyTypes = [
    {
      type: "Power Outage",
      description: "Complete or partial power loss",
      icon: "🔴",
      urgency: "Critical",
    },
    {
      type: "Electrical Fire Risk",
      description: "Burning smell or sparks",
      icon: "🔥",
      urgency: "Critical",
    },
    {
      type: "Shock Hazard",
      description: "Electric shocks from outlets",
      icon: "⚠️",
      urgency: "High",
    },
    {
      type: "Circuit Overload",
      description: "Frequent breaker trips",
      icon: "🔄",
      urgency: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated electrical elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-white/50 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-3 h-3 bg-amber-300 rounded-full animate-bounce"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">⚡</div>
            <h1
              className={`${title()} text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent`}
            >
              Electrical Services
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Safe, reliable, and compliant electrical solutions for Dubai's
              residential and commercial properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/+971585671289?text=Hi%2C%20I%20need%20an%20emergency%20plumber%20at%20my%20location.",
                    "_blank"
                  )
                }
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Emergency Plumber
              </button>

              {/* <button className="bg-white hover:bg-gray-100 text-yellow-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Free Safety Inspection
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Safety Warning Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="text-6xl mr-4">⚠️</div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Electrical Safety First
              </h2>
              <p className="text-lg">
                Licensed electricians • Dubai Municipality approved • Safety
                guaranteed
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">DEWA Approved</div>
              <div className="text-sm">
                Certified by Dubai Electricity & Water Authority
              </div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Licensed</div>
              <div className="text-sm">
                Qualified electricians with proper certifications
              </div>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <div className="text-2xl font-bold mb-2">Insured</div>
              <div className="text-sm">
                Full insurance coverage for your protection
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Electrical Services
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveCategory("residential")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeCategory === "residential"
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-yellow-600"
                }`}
              >
                Residential
              </button>
              <button
                onClick={() => setActiveCategory("commercial")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeCategory === "commercial"
                    ? "bg-yellow-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-yellow-600"
                }`}
              >
                Commercial
              </button>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {services[activeCategory].map((service, index) => (
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
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
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

        {/* Emergency Electrical Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Emergency Electrical Issues
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🚨</div>
              <h3 className="text-2xl font-bold mb-4">
                24/7 Emergency Electrician
              </h3>
              <p className="text-lg text-gray-300">
                Electrical emergencies don't wait. Neither do we. Available 24/7
                for urgent electrical issues.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyTypes.map((emergency, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 rounded-lg p-4 border-l-4 ${
                    emergency.urgency === "Critical"
                      ? "border-red-500"
                      : emergency.urgency === "High"
                        ? "border-yellow-500"
                        : "border-blue-500"
                  }`}
                >
                  <div className="text-2xl mb-2">{emergency.icon}</div>
                  <h4 className="font-semibold mb-2">{emergency.type}</h4>
                  <p className="text-sm text-gray-400 mb-2">
                    {emergency.description}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      emergency.urgency === "Critical"
                        ? "bg-red-500"
                        : emergency.urgency === "High"
                          ? "bg-yellow-500"
                          : "bg-blue-500"
                    }`}
                  >
                    {emergency.urgency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Electrical Inspections */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Electrical Safety Inspections
          </h2>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Why Regular Inspections Matter
                </h3>
                <p className="text-lg mb-6">
                  Dubai's electrical codes require regular inspections to ensure
                  safety and compliance. Our certified electricians provide
                  thorough inspections and detailed reports.
                </p>
                <div className="space-y-3">
                  {[
                    "Identify potential hazards before they become dangerous",
                    "Ensure compliance with Dubai Municipality regulations",
                    "Prevent electrical fires and accidents",
                    "Optimize energy efficiency and reduce costs",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🔍</div>
                <button className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Schedule Inspection
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Common Electrical Problems */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Common Electrical Issues in Dubai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                problem: "Frequent Power Trips",
                cause: "Overloaded circuits or faulty wiring",
                solution: "Circuit upgrades and load balancing",
                icon: "🔄",
              },
              {
                problem: "Flickering Lights",
                cause: "Loose connections or voltage fluctuations",
                solution: "Connection tightening and voltage stabilizers",
                icon: "💡",
              },
              {
                problem: "High Electricity Bills",
                cause: "Inefficient wiring or appliances",
                solution: "Energy audit and system optimization",
                icon: "💰",
              },
              {
                problem: "Electrical Shocks",
                cause: "Grounding issues or damaged wiring",
                solution: "Grounding system repair and wiring replacement",
                icon: "⚠️",
              },
              {
                problem: "Outdated Electrical Panel",
                cause: "Old panels can't handle modern loads",
                solution: "Panel upgrade to modern standards",
                icon: "📋",
              },
              {
                problem: "No GFCI Protection",
                cause: "Missing safety devices in wet areas",
                solution: "GFCI outlet installation",
                icon: "🛡️",
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
                <p className="text-sm text-green-600">
                  <strong>Solution:</strong> {issue.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Home Integration */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Smart Home Electrical Solutions
          </h2>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold mb-4">Future-Ready Homes</h3>
              </div>
              <div>
                <p className="text-lg mb-6">
                  Transform your Dubai home into a smart, efficient, and secure
                  living space with our modern electrical solutions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Smart Switches",
                    "Home Automation",
                    "Security Systems",
                    "Energy Management",
                    "Voice Control",
                    "Mobile Apps",
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        {/* <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Service Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Electrical",
                price: "AED 299",
                period: "starting from",
                features: [
                  "Electrical inspection",
                  "Minor repairs",
                  "Outlet installation",
                  "Light fixture setup",
                ],
                color: "yellow",
              },
              {
                name: "Complete Electrical",
                price: "AED 599",
                period: "starting from",
                features: [
                  "Full electrical audit",
                  "Panel upgrades",
                  "Wiring repairs",
                  "Safety compliance",
                  "Emergency support",
                ],
                color: "amber",
                popular: true,
              },
              {
                name: "Smart Home Package",
                price: "AED 1,299",
                period: "starting from",
                features: [
                  "Smart switches installation",
                  "Home automation setup",
                  "Security system wiring",
                  "Energy management",
                  "Full smart integration",
                ],
                color: "orange",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 ${pkg.popular ? "border-amber-500 transform scale-105" : "border-gray-200"} relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div> */}

        {/* Contact Section */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need an Electrician?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't take risks with electrical work. Contact our certified
            electricians for safe, reliable, and compliant electrical services
            in Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Emergency Call
            </button>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Service
            </button> */}
          </div>
          <div className="text-center text-gray-500">
            <p>Licensed • Insured • DEWA Approved • 24/7 Emergency Service</p>
          </div>
        </div>
      </div>
    </div>
  );
}
