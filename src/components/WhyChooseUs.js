import React from 'react';

const reasons = [
  { title: 'Extensive Network', description: 'Our vast network spans across Turkey and Chad, ensuring the best connections for your business.' },
  { title: 'Quality Assurance', description: 'We rigorously vet all products and partners to guarantee top-notch quality.' },
  { title: 'Efficient Logistics', description: 'Our streamlined processes ensure smooth and timely delivery of goods.' },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us py-16 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card text-center">
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;