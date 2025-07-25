"use client";
import React from 'react';
import { Card, CardBody } from '@heroui/react';
import { 
  Paintbrush, 
  Wind, 
  Wrench, 
  Flame, 
  Zap, 
  Home 
} from 'lucide-react';

const MaintenanceServicesCards = () => {
  const services = [
    {
      id: 1,
      title: 'Plumbing Services',
      icon: <Paintbrush className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop',
      description: 'Plumbing Installations & Repairs'
    },
    {
      id: 2,
      title: 'Electrical Work',
      icon: <Wind className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop',
      description: 'Wiring & Electrical Repairs '
    },
    {
      id: 3,
      title: 'Air Conditioning',
      icon: <Wrench className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Air Conditioning Installation & Maintenance'
    },
    {
      id: 4,
      title: 'Appliance Repair',
      icon: <Flame className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1558882224-dda166733046?w=400&h=300&fit=crop',
      description: 'Installation & Maintenance'
    },
    {
      id: 5,
      title: 'Cleaning',
      icon: <Zap className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop',
      description: 'General Cleaning Services'
    },
    {
      id: 6,
      title: 'Painting',
      icon: <Home className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
      description: 'Interior & Exterior Painting'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Our Maintenance Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Professional home maintenance services you can trust
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        {services.map((service) => (
          <Card 
            key={service.id}
            className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-gray-900/50"
            isPressable
          >
            <CardBody className="relative overflow-hidden p-0 h-48">
              {/* Default state - Icon and Title */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 group-hover:opacity-0 transition-opacity duration-300 z-10">
                <div className="text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center px-4">
                  {service.description}
                </p>
              </div>
              
              {/* Hover state - Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MaintenanceServicesCards;