"use client";
import React, { useState } from "react";
import ContactModal from "../components/forms/contact-modal";

export default function PaintingServicesPage() {
  const [activeService, setActiveService] = useState<"interior" | "exterior">(
    "interior"
  );
  const [isModalOpen, setModalOpen] = useState(false);

  const services = {
    interior: [
      {
        title: "Interior Wall Painting",
        description:
          "Professional interior painting for homes, offices, and commercial spaces with premium paints",
        icon: "🎨",
        features: [
          "All room types",
          "Color consultation",
          "Premium paints",
          "Furniture protection",
        ],
      },
      {
        title: "Ceiling Painting",
        description:
          "Specialized ceiling painting services including textured and decorative finishes",
        icon: "🏠",
        features: [
          "Smooth finishes",
          "Textured ceilings",
          "Stain coverage",
          "Height accessibility",
        ],
      },
      {
        title: "Decorative Painting",
        description:
          "Custom decorative painting including murals, accent walls, and artistic finishes",
        icon: "🖼️",
        features: [
          "Custom murals",
          "Accent walls",
          "Faux finishes",
          "Artistic designs",
        ],
      },
    ],
    exterior: [
      {
        title: "Exterior House Painting",
        description:
          "Complete exterior painting services using weather-resistant paints for Dubai's climate",
        icon: "🏘️",
        features: [
          "Weather protection",
          "UV resistance",
          "Moisture barriers",
          "Long-lasting finish",
        ],
      },
      {
        title: "Building Facades",
        description:
          "Professional facade painting for commercial buildings and high-rise structures",
        icon: "🏢",
        features: [
          "High-rise access",
          "Safety equipment",
          "Commercial grade paints",
          "Scheduled maintenance",
        ],
      },
      {
        title: "Outdoor Structures",
        description:
          "Painting services for fences, gates, outdoor furniture, and recreational areas",
        icon: "🌳",
        features: [
          "Metal structures",
          "Wood protection",
          "Pool areas",
          "Garden features",
        ],
      },
    ],
  };

  const urgentIssues = [
    {
      issue: "Water Damage Stains",
      description: "Ceiling or wall water stains",
      icon: "💧",
      severity: "Critical",
    },
    {
      issue: "Peeling Paint",
      description: "Paint peeling off walls",
      icon: "🔨",
      severity: "High",
    },
    {
      issue: "Mold Growth",
      description: "Mold spots on painted surfaces",
      icon: "🦠",
      severity: "Critical",
    },
    {
      issue: "Fading Colors",
      description: "Sun-damaged exterior paint",
      icon: "☀️",
      severity: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated paint drops */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-yellow-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-orange-300/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">🎨</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Professional Painting Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your space with expert painting services in Dubai -
              interior, exterior, and decorative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/+971585671289?text=Hi%2C%20I%20need%20an%20emergency%20Painting%20Services%20at%20my%20location.",
                    "_blank"
                  )
                }
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dubai Climate Challenges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 text-white mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Dubai's Painting Challenges
              </h2>
              <p className="text-lg mb-6">
                Dubai's extreme climate, sandstorms, and intense UV radiation
                create unique challenges for paint durability that require
                specialized knowledge and materials.
              </p>
              <div className="space-y-3">
                {[
                  "Intense UV rays causing rapid paint fading",
                  "Sandstorms damaging and abrading paint surfaces",
                  "Extreme temperature fluctuations causing cracking",
                  "High humidity affecting paint adhesion and drying",
                ].map((challenge, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4">🌞</div>
              <div className="text-xl font-semibold">
                We use climate-resistant paints
              </div>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Painting Services
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveService("interior")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeService === "interior"
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                Interior Painting
              </button>
              <button
                onClick={() => setActiveService("exterior")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeService === "exterior"
                    ? "bg-orange-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                Exterior Painting
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
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

        {/* Urgent Painting Issues */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Urgent Painting Issues
          </h2>
          <div className="bg-gray-900 rounded-2xl p-8 text-white mb-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4">Quick Paint Solutions</h3>
              <p className="text-lg text-gray-300 mb-6">
                Some painting issues require immediate attention to prevent
                further damage. Our rapid response team can handle urgent
                painting needs.
              </p>
              <div className="flex justify-center space-x-8 text-center">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-400">
                    Same Day
                  </div>
                  <div className="text-sm">Emergency Response</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">
                    Quality
                  </div>
                  <div className="text-sm">Premium Materials</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="text-2xl font-bold text-yellow-400">
                    Licensed
                  </div>
                  <div className="text-sm">Professional Painters</div>
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

        {/* Common Painting Problems */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Common Painting Issues in Dubai
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                problem: "Paint Fading",
                cause: "Intense UV radiation and heat exposure",
                solution: "UV-resistant paints and proper surface preparation",
                icon: "☀️",
              },
              {
                problem: "Peeling and Cracking",
                cause: "Temperature fluctuations and poor adhesion",
                solution: "Quality primers and flexible paint systems",
                icon: "🔨",
              },
              {
                problem: "Dust Accumulation",
                cause: "Sandstorms and desert environment",
                solution: "Easy-clean finishes and protective coatings",
                icon: "🌪️",
              },
              {
                problem: "Moisture Damage",
                cause: "High humidity and condensation",
                solution: "Moisture-resistant paints and proper ventilation",
                icon: "💧",
              },
              {
                problem: "Color Inconsistency",
                cause: "Poor mixing and application techniques",
                solution: "Professional color matching and application",
                icon: "🎨",
              },
              {
                problem: "Poor Coverage",
                cause: "Inadequate surface preparation",
                solution: "Proper priming and multiple coat application",
                icon: "🖌️",
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
                <p className="text-sm text-orange-600">
                  <strong>Solution:</strong> {issue.solution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Paint Types & Brands */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Premium Paint Brands
          </h2>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Quality Paints for Dubai Climate
                </h3>
                <p className="text-lg mb-6">
                  We use only premium paint brands specifically chosen for
                  Dubai's challenging climate conditions, ensuring long-lasting
                  and beautiful results.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Dulux",
                    "Jotun",
                    "Asian Paints",
                    "Berger Paints",
                    "Nippon Paint",
                    "Sika",
                    "Caparol",
                    "National Paints",
                    "Kansai Paint",
                    "Hempel",
                    "Tikkurila",
                    "PPG Paints",
                  ].map((brand, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🏆</div>
                <button className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Color Catalog
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Painting Packages */}
        {/* <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Painting Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic Paint",
                price: "AED 15",
                period: "per sq ft",
                features: [
                  "Surface preparation",
                  "One coat primer",
                  "Two coats paint",
                  "Basic cleanup",
                ],
                color: "orange",
              },
              {
                name: "Premium Paint",
                price: "AED 25",
                period: "per sq ft",
                features: [
                  "Detailed surface prep",
                  "High-quality primer",
                  "Two coats premium paint",
                  "Complete cleanup",
                  "3-year warranty",
                ],
                color: "red",
                popular: true,
              },
              {
                name: "Luxury Finish",
                price: "AED 35",
                period: "per sq ft",
                features: [
                  "Expert surface treatment",
                  "Premium primer system",
                  "Luxury paint application",
                  "Decorative finishes",
                  "5-year warranty",
                ],
                color: "pink",
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg border-2 ${pkg.popular ? "border-red-500 transform scale-105" : "border-gray-200"} relative`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Our Painting Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Painters",
                description:
                  "Skilled painters with years of experience in Dubai",
                icon: "👨‍🎨",
              },
              {
                title: "Quality Materials",
                description: "Premium paints and tools for lasting results",
                icon: "🎨",
              },
              {
                title: "Color Expertise",
                description: "Professional color consultation and matching",
                icon: "🌈",
              },
              {
                title: "Clean Service",
                description: "Neat and tidy work with complete cleanup",
                icon: "✨",
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
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            From interior walls to exterior facades, our professional painters
            are ready to bring your vision to life with quality and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button> */}
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">📞</div>
              <div>
                <div className="font-semibold">Free Estimates</div>
                <div className="text-gray-600">No obligation quotes</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">🕒</div>
              <div>
                <div className="font-semibold">Quick Start</div>
                <div className="text-gray-600">Same week service</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="text-2xl">🛡️</div>
              <div>
                <div className="font-semibold">Quality Guarantee</div>
                <div className="text-gray-600">Warranty included</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
