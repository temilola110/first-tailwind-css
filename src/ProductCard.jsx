import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-white">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-white">{product.price}</span>
          <button className="bg-white text-red px-4 py-2 rounded-lg">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
