import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-scroll';

const showcaseItems = [
  { id: 1, image: '/showcase/construction_0.jpg', title: 'Construction Equipment' },
  { id: 2, image: '/showcase/furniture_0.jpg', title: 'Furniture' },
  { id: 3, image: '/showcase/food_0.jpg', title: 'Textile' },
  { id: 4, image: '/showcase/military_0_2.jpg', title: 'Military Equipment' },
  { id: 5, image: '/showcase/workclothes_0.jpg', title: 'Work Clothes' },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % showcaseItems.length);
  };

  return (
    <section className="hero relative h-screen flex items-center pt-16">
      {showcaseItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto px-4 sm:px-16 relative z-10 text-white">
        <div className="max-w-2xl mx-auto sm:mx-0 sm:text-left text-center sm:ml-[10%]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 leading-tight">{t('hero.title')}</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 sm:mb-4">{t('hero.subtitle')}</p>
          <div className="flex justify-center sm:justify-start space-x-2 sm:space-x-4">
            <Link 
              to="sectors"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-yellow-500 text-gray-900 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base transition duration-300 ease-in-out hover:bg-yellow-400 hover:scale-105 cursor-pointer"
            >
              {t('hero.exploreButton')}
            </Link>
            <Link 
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-transparent border-2 border-white text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full font-semibold text-sm sm:text-base transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 hover:scale-105 cursor-pointer"
            >
              {t('hero.contactButton')}
            </Link>
          </div>
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="hidden sm:block absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition duration-300"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="hidden sm:block absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-1 rounded-full transition duration-300"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>
    </section>
  );
};

export default HeroSection;