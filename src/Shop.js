import React from 'react';
import './App.css'; 

const Shop = () => {
  const products = [
    { id: 1, name: "Товар 1", price: 100 },
    { id: 2, name: "Товар 2", price: 150 },
    { id: 3, name: "Товар 3", price: 200 },
  ];

  return (
    <div className="shop">
      <h1>Интернет-магазин</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span> - <span>{product.price} ₽</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;