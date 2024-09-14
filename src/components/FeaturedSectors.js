import React from 'react';

const sectors = [
  { name: 'Construction Equipment', icon: '🏗️' },
  { name: 'Furniture', icon: '🪑' },
  { name: 'Textile', icon: '🧵' },
  { name: 'Military Equipment', icon: '🛡️' },
  { name: 'Work Clothes', icon: '👷' },
  { name: 'Perfumes', icon: '🧴' },
  { name: 'Hardware Supplies', icon: '🔧' },
  { name: 'Slippers', icon: '🥿' },
];

const FeaturedSectors = () => {
  return (
    <section id="sectors" className="featured-sectors py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Featured Sectors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {sectors.map((sector, index) => (
            <div key={index} className="sector-card text-center group">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{sector.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{sector.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSectors;