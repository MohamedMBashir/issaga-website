import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img
              src="/about_img.jpg"
              alt="Turkey and Chad flags"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-yellow-600">{t('about.title')}</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">{t('about.paragraph1')}</p>
            <p className="text-gray-700 mb-4 leading-relaxed">{t('about.paragraph2')}</p>
            <p className="text-gray-700 mb-4 leading-relaxed italic">{t('about.quote')}</p>
            {/* Removed founderName and founderTitle */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;