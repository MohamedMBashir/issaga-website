import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#services" className="hover:text-blue-300">Services</a></li>
              <li><a href="#sectors" className="hover:text-blue-300">Sectors</a></li>
              <li><a href="#products" className="hover:text-blue-300">Products</a></li>
              <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@yourcompany.com</p>
            <p>WhatsApp: +90 123 456 7890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            {/* Add social media icons here */}
            <p>Social media links coming soon</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;