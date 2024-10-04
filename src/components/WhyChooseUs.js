import React from 'react';
import { FaAward, FaHandshake, FaChartLine, FaShieldAlt, FaClock, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const reasons = [
  { icon: <FaAward className="text-4xl text-yellow-500 mb-4 mx-auto" />, name: 'bestQuality' },
  { icon: <FaHandshake className="text-4xl text-yellow-500 mb-4 mx-auto" />, name: 'integrity' },
  { icon: <FaChartLine className="text-4xl text-yellow-500 mb-4 mx-auto" />, name: 'strategy' },
  { icon: <FaShieldAlt className="text-4xl text-yellow-500 mb-4 mx-auto" />, name: 'safety' },
  { icon: <FaClock className="text-4xl text-yellow-500 mb-4 mx-auto" />, name: 'timeValue' },
  { icon: <FaGlobe className="text-4xl text-yellow-500 mb-4 mx-auto" />, name: 'globalReach' },
];

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="why-choose-us py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-600">{t('whyChooseUs.title')}</h2>
        <p className="text-center mb-12 max-w-3xl mx-auto text-gray-600">
          {t('whyChooseUs.intro')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card text-center bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="flex justify-center">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{t(`whyChooseUs.reasons.${reason.name}.title`)}</h3>
              <p className="text-gray-600">{t(`whyChooseUs.reasons.${reason.name}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;