import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">{t('footer.followUs')}</h3>
          <div className="flex space-x-6 mb-6">
            <a href="https://www.facebook.com/issagaservice" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com/issagaserviceconsultant235?igsh=MWlhYXJ4YnNmczZydQ==" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/issagaservice" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition duration-300">
              <FaLinkedinIn size={24} />
            </a>
          </div>
          <div className="text-center text-gray-400">
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;