import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const sectors = [
  { name: 'constructionEquipment', icon: '🏗️', images: ['construction_1.jpg', 'construction_2.jpg', 'construction_3.jpg', 'construction_4.jpg', 'construction_5.jpg'] },
  { name: 'furniture', icon: '🪑', images: ['furniture_1.jpg', 'furniture_2.jpg', 'furniture_3.jpg', 'furniture_4.jpg', 'furniture_5.jpg'] },
  { name: 'foodIndustry', icon: '🍽️', images: ['food_industry_1.jpg', 'food_industry_2.jpg', 'food_industry_3.jpg', 'food_industry_4.jpg', 'food_industry_5.jpg'] },
  { name: 'militaryEquipment', icon: '🛡️', images: ['military_1.jpg', 'military_2.jpg', 'military_3.jpg', 'military_4.jpg', 'military_5.jpg'] },
  { name: 'workClothes', icon: '👷', images: ['workclothes_1.jpg', 'workclothes_2.jpg', 'workclothes_3.jpg', 'workclothes_4.jpg', 'workclothes_5.jpg'] },
  { name: 'perfumes', icon: '🧴', images: ['perfume_1.jpg', 'perfume_2.jpg', 'perfume_3.jpg', 'perfume_4.jpg', 'perfume_5.jpg'] },
  { name: 'hardwareSupplies', icon: '🔧', images: ['hardware_supplies_1.jpg', 'hardware_supplies_2.jpg', 'hardware_supplies_3.jpg', 'hardware_supplies_4.jpg', 'hardware_supplies_5.jpg'] },
  { name: 'slippers', icon: '🥿', images: ['slippers_1.jpg', 'slippers_2.jpg', 'slippers_3.jpg', 'slippers_4.jpg', 'slippers_5.jpg'] },
];

const FeaturedSectors = () => {
  const [activeSector, setActiveSector] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMobileSlider, setShowMobileSlider] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % sectors[activeSector].images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSector]);

  const handleSectorClick = (index) => {
    setActiveSector(index);
    setCurrentImageIndex(0);
    setShowMobileSlider(window.innerWidth < 768);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % sectors[activeSector].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + sectors[activeSector].images.length) % sectors[activeSector].images.length
    );
  };

  return (
    <section id="sectors" className="featured-sectors py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-600">{t('sectors.title')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {sectors.map((sector, index) => (
            <div 
              key={index} 
              className={`sector-card text-center p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                activeSector === index ? 'bg-yellow-100 shadow-lg' : 'bg-white hover:bg-yellow-50'
              }`}
              onClick={() => handleSectorClick(index)}
            >
              <div className="text-5xl mb-4">{sector.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{t(`sectors.${sector.name}`)}</h3>
            </div>
          ))}
        </div>
        
        {/* Desktop Slider */}
        <div className="hidden md:block">
          <h3 className="text-2xl font-bold mb-4 text-yellow-600">{t(`sectors.${sectors[activeSector].name}`)}</h3>
          <div className="mx-auto w-3/4 max-w-4xl aspect-[16/9] relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src={`/sectors/${sectors[activeSector].images[currentImageIndex]}`} 
              alt={`${t(`sectors.${sectors[activeSector].name}`)} product`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button 
              onClick={prevImage} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextImage} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition duration-300"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        {showMobileSlider && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 md:hidden flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-4 w-full max-w-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-yellow-600">{t(`sectors.${sectors[activeSector].name}`)}</h3>
                <button 
                  onClick={() => setShowMobileSlider(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img 
                  src={`/sectors/${sectors[activeSector].images[currentImageIndex]}`} 
                  alt={`${t(`sectors.${sectors[activeSector].name}`)} product`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button 
                  onClick={prevImage} 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextImage} 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedSectors;