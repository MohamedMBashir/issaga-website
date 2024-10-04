// App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About'; 
import FeaturedSectors from './components/Sectors';
import OurServices from './components/OurServices';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <LanguageProvider>
      <div className="App font-sans bg-gray-50 text-gray-800">
        <Header />
        <main>
          <HeroSection />
          <About />
          <FeaturedSectors />
          <OurServices />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
        
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/23560020876"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
          aria-label="Contact us on WhatsApp"
        >
          <FaWhatsapp className="text-2xl sm:text-3xl" />
        </a>
      </div>
    </LanguageProvider>
  );
}

export default App;