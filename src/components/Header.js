import React, { useState, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const menuItems = [
    { id: 'about', label: 'about' },
    { id: 'sectors', label: 'sectors' },
    { id: 'services', label: 'services' },
    { id: 'why-us', label: 'whyUs' },
    { id: 'contact', label: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src='/issaga-logo.png' alt="Issaga Logo" className="h-12" />
          </div>
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link 
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className={`text-lg font-medium transition duration-300 cursor-pointer ${isScrolled ? 'text-gray-800 hover:text-yellow-600' : 'text-white hover:text-yellow-400'}`}
                  >
                    {t(`nav.${item.label}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                onClick={toggleLangDropdown}
                className={`flex items-center space-x-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                <FaGlobe className="text-xl" />
                <span className="text-sm font-medium">{language.toUpperCase()}</span>
              </button>
              {isLangDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg">
                  {['en', 'fr', 'tr', 'ar'].map((lang) => (
                    <li key={lang}>
                      <button 
                        onClick={() => {
                          changeLanguage(lang);
                          setIsLangDropdownOpen(false);
                        }} 
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {lang.toUpperCase()}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`lg:hidden focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-white py-4 px-4 shadow-md">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link 
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-gray-800 hover:text-yellow-600 font-medium text-lg cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.label}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;