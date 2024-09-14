import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero relative py-32 md:py-48 flex items-center bg-gradient-to-r from-blue-900 to-blue-700">
      <div className="absolute inset-0 z-0 opacity-20">
        <img src='/global_trade_bg.jpeg' alt="Global Trade" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Connecting Turkey and Chad Through Trade</h1>
          <p className="text-xl md:text-2xl mb-8">Welcome to Issaga, your preferred partner for international trade between Turkey and Chad.</p>
          <a href="#contact" className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition duration-300 inline-block">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;