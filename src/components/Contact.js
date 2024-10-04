import React from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-600">{t('contact.title')}</h2>
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="contact-info bg-yellow-400 text-gray-800 p-10 md:w-2/5">
              <h3 className="text-3xl font-semibold mb-8">{t('contact.contactInfo')}</h3>
              <div className="space-y-6">
                <a href="https://wa.me/23560020876" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 hover:text-blue-200 transition duration-300">
                  <FaWhatsapp className="text-4xl text-green-400" />
                  <span className="text-lg">+235 60 02 08 76</span>
                </a>
                <a href="mailto:issaga.service@yandex.com" className="flex items-center space-x-4 hover:text-blue-200 transition duration-300">
                  <FaEnvelope className="text-3xl" />
                  <span className="text-lg">issaga.service@yandex.com</span>
                </a>
                <div className="flex items-center space-x-4">
                  <FaMapMarkerAlt className="text-3xl" />
                  <span className="text-lg">Turkey - Chad</span>
                </div>
              </div>
            </div>
            <div className="contact-form p-10 md:w-3/5 bg-gray-50">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.name')}</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.email')}</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('contact.message')}</label>
                  <textarea id="message" name="message" rows="5" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-400 text-gray-800 px-6 py-4 rounded-md hover:bg-yellow-500 transition duration-300 text-lg font-semibold">{t('contact.sendMessage')}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;