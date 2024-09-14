import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src='/issaga-logo.png' alt="Issaga Logo" className="h-12" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['About', 'Sectors', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <select className="bg-gray-100 rounded-full px-3 py-1 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>EN</option>
              <option>TR</option>
              <option>FR</option>
            </select>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4">
          <ul className="flex flex-col space-y-4">
            {['About', 'Sectors', 'Products', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;