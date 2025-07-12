"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Star, TrendingUp } from 'lucide-react';

const CounterSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    servingSince: 0,
    communities: 0,
    customers: 0,
    jobs: 0
  });
  
  const sectionRef = useRef(null);

  // Final values for each counter
  const finalValues = {
    servingSince: 2010, // Year started
    communities: 45,
    customers: 2500,
    jobs: 15000
  };

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation logic
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // Animation duration in ms
    const steps = 60; // Number of animation steps
    const stepDuration = duration / steps;

    const animateCounter = (key: any, finalValue: any) => {
      let currentStep = 0;
      const increment = finalValue / steps;

      const timer = setInterval(() => {
        currentStep++;
        const currentValue = Math.min(Math.floor(increment * currentStep), finalValue);
        
        setCounters(prev => ({
          ...prev,
          [key]: currentValue
        }));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return timer;
    };

    // Start all counters with slight delays
    const timers = [
      setTimeout(() => animateCounter('servingSince', finalValues.servingSince), 0),
      setTimeout(() => animateCounter('communities', finalValues.communities), 200),
      setTimeout(() => animateCounter('customers', finalValues.customers), 400),
      setTimeout(() => animateCounter('jobs', finalValues.jobs), 600)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible]);

  const stats = [
    {
      key: 'servingSince',
      title: 'Serving Since',
      value: counters.servingSince,
      suffix: '',
      icon: <Award className="w-8 h-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200/50 dark:border-blue-800/30'
    },
    {
      key: 'communities',
      title: 'Communities Served',
      value: counters.communities,
      suffix: '+',
      icon: <Users className="w-8 h-8" />,
      gradient: 'from-emerald-500 to-teal-500',
      color: 'text-emerald-600 dark:text-emerald-400',
      bgColor: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      borderColor: 'border-emerald-200/50 dark:border-emerald-800/30'
    },
    {
      key: 'customers',
      title: 'Customers Served',
      value: counters.customers,
      suffix: '+',
      icon: <Star className="w-8 h-8" />,
      gradient: 'from-purple-500 to-pink-500',
      color: 'text-purple-600 dark:text-purple-400',
      bgColor: 'bg-purple-50/50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200/50 dark:border-purple-800/30'
    },
    {
      key: 'jobs',
      title: 'Jobs Executed',
      value: counters.jobs,
      suffix: '+',
      icon: <TrendingUp className="w-8 h-8" />,
      gradient: 'from-orange-500 to-red-500',
      color: 'text-orange-600 dark:text-orange-400',
      bgColor: 'bg-orange-50/50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200/50 dark:border-orange-800/30'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-emerald-100 to-cyan-100 dark:from-emerald-900/20 dark:to-cyan-900/20 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 mb-6">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            Trusted by thousands
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent mb-6">
            Our Track Record
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Years of experience delivering exceptional maintenance services with unwavering commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`group relative ${stat.bgColor} ${stat.borderColor} border-2 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-current/10 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: `linear-gradient(135deg, ${stat.bgColor.replace('bg-', '').replace('/50', '/30').replace('/20', '/10')} 0%, transparent 100%)`
              }}
            >
              {/* Icon with gradient background */}
              <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${stat.gradient} rounded-2xl mb-4 md:mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-3`}>
                <div className="text-white">
                  {stat.icon}
                </div>
              </div>

              {/* Counter Value */}
              <div className={`${stat.color} text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 transition-colors duration-300`}>
                <span className="tabular-nums">
                  {stat.value.toLocaleString()}
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl">
                  {stat.suffix}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-gray-700 dark:text-gray-300 font-semibold text-sm md:text-base lg:text-lg transition-colors duration-300">
                {stat.title}
              </h3>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent h-px"></div>
          <div className="relative bg-white dark:bg-slate-800 px-8 mx-auto w-fit">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-600 dark:text-gray-400 py-8">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-lg group-hover:shadow-emerald-500/50 transition-all duration-300"></div>
                <span className="text-sm md:text-base font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"></div>
                <span className="text-sm md:text-base font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  24/7 Emergency Service
                </span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"></div>
                <span className="text-sm md:text-base font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  100% Satisfaction Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;