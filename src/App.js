import React from 'react';
import ProductCard from './ProductCard';

const App = () => {
  const products = [
    {
      id: 1,
      name: 'Female Shoe',
      description: 'This is a great product.',
      price: '$99.99',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2022/2/QB/CV/LU/73718625/product-jpeg-500x500.jpg'
    },
    {
      id: 2,
      name: 'Male Shoes',
      description: 'This is another great product.',
      price: '$79.99',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPXt972hDX-df8qJAoMpvTFDvY5UhdMy-O8A&usqp=CAU'
    }
    
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">E-Commerce Product Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
