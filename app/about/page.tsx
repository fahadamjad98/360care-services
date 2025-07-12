import React from 'react';
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className={`${title()} text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent`}>
              About 360 Care Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
              Your trusted partner for comprehensive maintenance solutions across Dubai
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-50 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Company Overview */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Excellence in Every Service
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                360 Care Services stands as Dubai's premier maintenance company, delivering comprehensive solutions 
                that keep your properties running smoothly. With years of expertise in the UAE market, we understand 
                the unique challenges of maintaining facilities in Dubai's dynamic environment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to excellence and customer satisfaction has made us the go-to choice for residential, 
                commercial, and industrial maintenance needs across the emirate.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">360°</div>
                  <div className="text-xl mb-4">Complete Care</div>
                  <div className="text-cyan-100">
                    Comprehensive maintenance solutions for every need
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HVAC Maintenance",
                description: "Expert air conditioning and ventilation services to keep your spaces comfortable year-round",
                icon: "❄️"
              },
              {
                title: "Plumbing Services",
                description: "Professional plumbing solutions from repairs to complete system installations",
                icon: "🔧"
              },
              {
                title: "Electrical Work",
                description: "Certified electrical maintenance and installations for safety and efficiency",
                icon: "⚡"
              },
              {
                title: "Facility Management",
                description: "Complete facility management solutions for commercial and residential properties",
                icon: "🏢"
              },
              {
                title: "Preventive Maintenance",
                description: "Proactive maintenance programs to prevent issues before they occur",
                icon: "🛡️"
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency response for urgent maintenance needs",
                icon: "🚨"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Choose 360 Care Services?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                {
                  title: "Dubai Expertise",
                  description: "Deep understanding of Dubai's unique maintenance requirements and regulations"
                },
                {
                  title: "Certified Professionals",
                  description: "Skilled technicians with proper certifications and extensive experience"
                },
                {
                  title: "Quality Guarantee",
                  description: "We stand behind our work with comprehensive warranties and quality assurance"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Rapid Response",
                  description: "Fast response times with 24/7 emergency service availability"
                },
                {
                  title: "Cost-Effective",
                  description: "Competitive pricing with transparent quotes and no hidden fees"
                },
                {
                  title: "Customer-Focused",
                  description: "Dedicated to exceeding customer expectations with personalized service"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 4}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Happy Clients" },
                { number: "2000+", label: "Projects Completed" },
                { number: "24/7", label: "Emergency Support" },
                { number: "5★", label: "Customer Rating" }
              ].map((stat, index) => (
                <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-cyan-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact 360 Care Services today for a free consultation and discover how we can help 
            maintain your property with our comprehensive maintenance solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 transform hover:scale-105">
              Get Free Quote
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 transition-colors duration-300 transform hover:scale-105">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}