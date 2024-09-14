import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="contact-form">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg" required></textarea>
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-2"><strong>Email:</strong> info@yourcompany.com</p>
            <p className="mb-2"><strong>WhatsApp:</strong> +90 123 456 7890</p>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-2">Our Locations</h4>
              <p>Turkey - Chad</p>
              {/* Add a map or visual representation here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;