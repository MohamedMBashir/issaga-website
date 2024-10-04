import React from 'react';
import { FaHandshake, FaSearch, FaFileContract, FaShip, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const services = [
  {
    icon: <FaHandshake className="text-5xl text-yellow-600 mb-4" />,
    name: 'businessMatchmaking',
  },
  {
    icon: <FaSearch className="text-5xl text-yellow-600 mb-4" />,
    name: 'marketResearch',
  },
  {
    icon: <FaFileContract className="text-5xl text-yellow-600 mb-4" />,
    name: 'contractNegotiation',
  },
  {
    icon: <FaShip className="text-5xl text-yellow-600 mb-4" />,
    name: 'logisticsCoordination',
  },
  {
    icon: <FaMoneyBillWave className="text-5xl text-yellow-600 mb-4" />,
    name: 'financialAdvisory',
  },
  {
    icon: <FaChartLine className="text-5xl text-yellow-600 mb-4" />,
    name: 'growthConsulting',
  }
];

const OurServices = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="our-services py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-600">{t('services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-yellow-100 text-center">
              <div className="flex flex-col items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold mt-2 text-gray-800">{t(`services.${service.name}.title`)}</h3>
              </div>
              <p className="text-gray-600">{t(`services.${service.name}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;