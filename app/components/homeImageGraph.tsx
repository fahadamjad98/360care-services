import React from 'react';
import {
  Home,
  Building2,
  ShoppingBag,
  Factory,
  Hotel,
  School,
  MapPin,
  CheckCircle,
  Users,
  Briefcase
} from 'lucide-react';

export default function ServiceAreas({ imageUrl = "/360graphics.jpg" }) {
  const serviceLocations = [
    {
      icon: Home,
      title: "Residential Villas",
      description: "Complete maintenance services for luxury villas and family homes",
      color: "bg-gradient-to-r from-blue-500 to-cyan-400"
    },
    {
      icon: Building2,
      title: "Apartments & Condos",
      description: "Professional upkeep for apartment complexes and condominiums",
      color: "bg-gradient-to-r from-green-500 to-emerald-400"
    },
    {
      icon: ShoppingBag,
      title: "Retail Shops",
      description: "Reliable maintenance to keep your business running smoothly",
      color: "bg-gradient-to-r from-purple-500 to-pink-400"
    },
    {
      icon: Briefcase,
      title: "Office Buildings",
      description: "Corporate facility maintenance and workspace solutions",
      color: "bg-gradient-to-r from-orange-500 to-red-400"
    },
    {
      icon: Factory,
      title: "Commercial Spaces",
      description: "Industrial and commercial property maintenance services",
      color: "bg-gradient-to-r from-indigo-500 to-purple-400"
    },
    {
      icon: Hotel,
      title: "Hospitality",
      description: "Hotels, restaurants, and hospitality venue maintenance",
      color: "bg-gradient-to-r from-teal-500 to-cyan-400"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200 text-blue-700 font-semibold px-6 py-3 rounded-full shadow-lg mb-6">
            <MapPin className="w-5 h-5" />
            <span>Service Coverage Areas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Where We Work
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional maintenance services across all property types - from residential homes to commercial complexes
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Side - Image (appears first on mobile) */}
          <div className="relative order-1 lg:order-2">
            {/* <div className="relative overflow-hidden rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500"> */}
            <img
  src={imageUrl}
  alt="Maintenance service locations"
  className="w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-contain"
/>


              {/* Image Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div> */}
              
              {/* Floating Badge */}
              {/* <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold text-gray-800">Available 24/7</span>
                </div>
              </div> */}
            {/* </div> */}

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          </div>

          {/* Left Side - Service Locations (appears second on mobile) */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="grid gap-6">
              {serviceLocations.map((location, index) => {
                const Icon = location.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50"
                  >
                    <div className={`${location.color} p-3 rounded-xl shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {location.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {location.description}
                      </p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  </div>
                );
              })}
            </div>

            {/* Service Promise */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 rounded-2xl text-white shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-8 h-8" />
                <h3 className="text-2xl font-bold">Our Promise</h3>
              </div>
              <p className="text-blue-100 text-lg">
                Professional, reliable maintenance services tailored to your property type. 
                Same-day response for urgent repairs across all locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}