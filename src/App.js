import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import Footer from './components/Footer';
import './styles/Layout.css';

export default function App() {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img
          src="https://stackblitz.com/files/react-test-elise/github/elisedu37/react_test/develop/src/assets/logo.png"
          alt="La maison jungle"
          className="lmj-logo"
        />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}
