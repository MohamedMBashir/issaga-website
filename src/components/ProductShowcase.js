import React from 'react';

const products = [
  { name: 'Heavy Duty Excavator', sector: 'Construction Equipment', image: '/placeholder-image.jpg' },
  { name: 'Modern Office Desk', sector: 'Furniture', image: '/placeholder-image.jpg' },
  { name: 'High-Quality Cotton Fabric', sector: 'Textile', image: '/placeholder-image.jpg' },
  // Add more products as needed
];

const ProductShowcase = () => {
  return (
    <section id="products" className="product-showcase py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.sector}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;