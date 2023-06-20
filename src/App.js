import React from 'react';
import './style.css';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';

export default function App() {
  return (
    <div>
      <Banner />
      <Cart />
      <ShoppingList />
    </div>
  );
}
