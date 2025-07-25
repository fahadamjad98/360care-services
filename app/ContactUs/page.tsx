"use client"
import React, { useState } from 'react';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const [activeTab, setActiveTab] = useState<'contact' | 'quote' | 'emergency'>('contact');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    alert('Thank you for your message! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      urgency: 'normal'
    });
  };

  const services = [
    'Painting Services',
    'Cleaning Services',
    'Maintenance Services',
    'Renovation Services',
    'Emergency Services'
  ];

  const serviceAreas = [
    'Dubai Marina',
    'Downtown Dubai',
    'Business Bay',
    'JBR',
    'DIFC',
    'Dubai Hills',
    'Arabian Ranches',
    'Jumeirah',
    'Bur Dubai',
    'Deira',
    'Al Barsha',
    'Motor City'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated contact elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-purple-300/50 rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-1/4 w-5 h-5 bg-indigo-300/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/40 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="text-6xl mb-6">📞</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Ready to transform your space? Contact our expert team for professional services across Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Call Now
              </button>
              <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-2xl font-bold mb-2">Call Us</h3>
            <p className="text-lg mb-4">24/7 Customer Support</p>
            <div className="text-xl font-semibold">+971 50 123 4567</div>
            <div className="text-lg">+971 4 567 8901</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold mb-2">Email Us</h3>
            <p className="text-lg mb-4">Quick Response Guaranteed</p>
            <div className="text-lg">info@dubaiservices.com</div>
            <div className="text-lg">support@dubaiservices.com</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all duration-300">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
            <p className="text-lg mb-4">Instant Messaging</p>
            <div className="text-xl font-semibold">+971 50 123 4567</div>
            <button className="mt-2 bg-white hover:bg-gray-100 text-purple-600 px-4 py-2 rounded-lg font-semibold transition-colors duration-300">
              Chat Now
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button 
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === 'contact' 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                General Contact
              </button>
              <button 
                onClick={() => setActiveTab('quote')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === 'quote' 
                    ? 'bg-purple-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Get Quote
              </button>
              <button 
                onClick={() => setActiveTab('emergency')}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 ${
                  activeTab === 'emergency' 
                    ? 'bg-red-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:text-red-600'
                }`}
              >
                Emergency
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {activeTab === 'emergency' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="text-2xl mr-3">🚨</div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-800">Emergency Service</h3>
                      <p className="text-red-600">For urgent issues, call us immediately at +971 50 123 4567</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                      placeholder="+971 50 123 4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {activeTab === 'emergency' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Urgency Level *
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="normal">Normal</option>
                      <option value="urgent">Urgent (Same Day)</option>
                      <option value="emergency">Emergency (Immediate)</option>
                    </select>
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-300"
                    placeholder={
                      activeTab === 'quote' 
                        ? "Please describe your project requirements, location, and any specific needs..."
                        : activeTab === 'emergency'
                        ? "Please describe the emergency situation in detail..."
                        : "Tell us about your requirements..."
                    }
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button
                    onClick={handleSubmit}
                    className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                      activeTab === 'emergency'
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {activeTab === 'quote' ? 'Request Quote' : 
                     activeTab === 'emergency' ? 'Send Emergency Request' : 'Send Message'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Service Areas</h2>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">We Cover All Dubai Areas</h3>
                <p className="text-lg mb-6">
                  Our professional teams provide services across Dubai's major residential and commercial areas. We're committed to serving you wherever you are in the city.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">🗺️</div>
                <button className="bg-white hover:bg-gray-100 text-indigo-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  View Full Coverage
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours & Info */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Business Information</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🕐</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
              <div className="text-gray-600 space-y-1">
                <div>Mon-Fri: 7:00 AM - 8:00 PM</div>
                <div>Saturday: 8:00 AM - 6:00 PM</div>
                <div>Sunday: 9:00 AM - 5:00 PM</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Emergency Service</h3>
              <div className="text-gray-600">
                <div>24/7 Emergency Support</div>
                <div>Rapid Response Team</div>
                <div>Same Day Service</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Location</h3>
              <div className="text-gray-600">
                <div>Dubai Marina</div>
                <div>Business Bay</div>
                <div>Downtown Dubai</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Licenses</h3>
              <div className="text-gray-600">
                <div>DED Licensed</div>
                <div>Fully Insured</div>
                <div>Certified Professionals</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How quickly can you respond to service requests?",
                answer: "We typically respond within 2-4 hours for regular services and within 30 minutes for emergency calls. Same-day service is available for urgent needs."
              },
              {
                question: "Do you provide free estimates?",
                answer: "Yes, we provide free, no-obligation estimates for all our services. Our team will assess your needs and provide a detailed quote."
              },
              {
                question: "Are your services available on weekends?",
                answer: "Yes, we offer services on weekends and holidays. Our emergency services are available 24/7 throughout the week."
              },
              {
                question: "What areas of Dubai do you serve?",
                answer: "We serve all major areas of Dubai including Dubai Marina, Downtown Dubai, Business Bay, JBR, and surrounding communities."
              },
              {
                question: "Are you licensed and insured?",
                answer: "Yes, we are fully licensed by the Dubai Economic Department (DED) and carry comprehensive insurance coverage for all our services."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait any longer. Contact us today for professional services that exceed your expectations. We're here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span className="mr-2">📞</span>
              Call Now: +971 50 123 4567
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span className="mr-2">💬</span>
              WhatsApp Us
            </button>
          </div>
          <div className="text-center text-gray-500">
            <p>Response time: Within 30 minutes | Free estimates | Licensed & Insured</p>
          </div>
        </div>
      </div>
    </div>
  );
}