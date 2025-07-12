"use client";
import React, { useEffect, useState } from "react";
import {
  Wrench,
  Shield,
  Clock,
  Phone,
  ArrowRight,
  CheckCircle,
  Zap,
  Home,
  Droplets,
  Star,
  Users,
  Award,
  MessageCircle,
} from "lucide-react";
import ContactForm from "./forms/contact-form";


export default function HeroBanner() {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const services = [
    { name: "Plumbing", icon: Droplets, color: "text-blue-600" },
    { name: "Electrical", icon: Zap, color: "text-yellow-600" },
    { name: "Air Conditioner", icon: Home, color: "text-green-600" },
    { name: "Appliance Repair", icon: Wrench, color: "text-orange-600" },
    { name: "Handyman Services", icon: CheckCircle, color: "text-purple-600" },
  ];

  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Customers",
      color: "bg-gradient-to-r from-blue-500 to-cyan-400",
    },
    {
      icon: Star,
      number: "4.9",
      label: "Average Rating",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      icon: CheckCircle,
      number: "15+",
      label: "Years Experience",
      color: "bg-gradient-to-r from-green-500 to-emerald-400",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const CurrentServiceIcon = services[currentService].icon;

  return (
    <section className="relative py-16 px-6 overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/95 via-blue-50/90 to-cyan-50/95"></div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side */}
        <div
          className={`space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg">
            <Wrench className="w-5 h-5" />
            <span>Professional Maintenance Services</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              360° Care Services
            </h1>
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
              Services
            </h2> */}
          </div>

          {/* Dynamic Service Display */}
          <div className="flex flex-wrap items-center gap-3 text-xl">
            <span className="text-gray-600 font-medium">Expert</span>
            <div
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border-2 border-white/40 transition-all duration-700 transform hover:scale-105 ${services[currentService].color}`}
            >
              <CurrentServiceIcon className="w-6 h-6" />
              <span className="font-bold text-gray-800">
                {services[currentService].name}
              </span>
            </div>
            <span className="text-gray-600 font-medium">Solutions</span>
          </div>

          {/* Description */}
          <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
            From quick fixes to complex repairs — we're your one-stop shop for
            hassle-free property care. Quality service, every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4">
            <div className="relative">
              {/* Subtle pulsing glow background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-40 animate-pulse blur-sm"></div>
              <a href="tel:+1234567890" className="w-full block">
                <button className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl text-lg group w-full">
                  <Phone className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Call Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
            </div>
            <a
              href="https://wa.me/+971585671289"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block"
            >
              <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl text-lg group w-full">
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                <span>WhatsApp</span>
              </button>
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="bg-white border-2 border-blue-200 text-blue-600 hover:bg-blue-50 font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl text-lg w-full"
            >
              Get Free Quote
            </button>
          </div>
          {showForm && (
            <div className="fixed inset-0 z-50  flex items-center justify-center">
              <div className="bg-white p-6 rounded-xl max-w-lg w-full shadow-xl relative">
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-3 right-3 text-gray-600 hover:text-black"
                >
                  ✕
                </button>
                <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
                <ContactForm />
              </div>
            </div>
          )}
          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 pt-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div
                    className={`${stat.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xl`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
          } space-y-6`}
        >
          {/* Call to Action Card */}
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 border-none shadow-2xl p-8 rounded-2xl text-center text-white transform hover:scale-105 transition-all duration-300">
            <Star className="w-10 h-10 mx-auto mb-4 text-blue-100 animate-pulse" />
            <h3 className="font-bold text-2xl mb-3">Ready to Get Started?</h3>
            <p className="mb-6 opacity-90 text-lg">
              Join thousands of satisfied customers
            </p>
            <button className="bg-white text-blue-600 font-bold hover:bg-gray-50 shadow-xl px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              Book Service Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
