import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import Banner from './components/Banner';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';

export default function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Navbar cart={cart} updateCart={updateCart} />
      <Banner>
        <div class="hero-image">
          <div class="hero-text">
            <h1>Nos produits</h1>
          </div>
        </div>
      </Banner>
      <ShoppingList cart={cart} updateCart={updateCart} />
    </>
  );
}
