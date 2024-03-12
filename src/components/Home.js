import React, { useState } from 'react';
import Product from './Product';
import './Home.css';

function Home() {
  const [totalPrice, setTotalPrice] = useState(2199.96);
  const [products, setProducts] = useState([
    { id: 1, name: "Samsung Galaxy S8", price: 399.99, quantity: 1 },
    { id: 2, name: "Google Pixel", price: 499.99, quantity: 1 },
    { id: 3, name: "Xiaomi Redmi Note 2", price: 699.99, quantity: 1 },
    { id: 4, name: "Samsung Galaxy S7", price: 599.99, quantity: 1 }
  ]);

  const updateTotalPrice = (newTotalPrice) => {
    setTotalPrice(newTotalPrice);
  };

  const removeProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    updateTotalPrice();
  };

  const clearCart =()=>{
    setProducts([]);
    setTotalPrice(0);
  }
  return (
    <div className='home'>
      <h1 style={{ textAlign: "center", fontWeight: "400" }}>YOUR BAG</h1>
      <div className='cart'>
        {products.map(product => (
          <Product 
            key={product.id}
            imgSrc={`https://www.course-api.com/images/cart/phone-${product.id}.png`}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            setTotalPrice={updateTotalPrice}
            totalPrice={2199.96}
            removeProduct={() => removeProduct(product.id)}
          />
        ))}
        <hr/>
      </div>
      <div className='total'>
        <div><span>Total</span></div>
        <div><button className='total-button'>${totalPrice}</button></div>
      </div>
      <div className='clear'>
        <button className='clear-button' onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
}

export default Home;
