import React from 'react';

const OurServices = () => {
  return (
    <section id="services" className="our-services py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Export Facilitation</h3>
            <p>We connect Turkish manufacturers with Chadian importers, streamlining the export process.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Import Assistance</h3>
            <p>We help Chadian businesses source high-quality products from trusted Turkish suppliers.</p>
          </div>
          <div className="service-card bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Logistics Support</h3>
            <p>Our team ensures smooth transportation and delivery of goods between Turkey and Chad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;