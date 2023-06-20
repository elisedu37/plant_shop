import React from 'react';
import './style.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Banner>
        <img
          src="https://raw.githubusercontent.com/elisedu37/react_test/develop/src/assets/logo.png"
          alt="La maison jungle"
          className="lmj-logo"
        />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
      <Footer />
    </div>
  );
}
