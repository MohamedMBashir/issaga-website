// App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturedSectors from './components/FeaturedSectors';
import ProductShowcase from './components/ProductShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-sans bg-gray-50 text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSectors />
        <ProductShowcase />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
