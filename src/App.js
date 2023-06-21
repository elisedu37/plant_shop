import React from 'react';
// Hooks
import { useState, useEffect } from 'react';
// Feuille de style
import './style.css';
// Composants
import Banner from './components/Banner';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';

export default function App() {
  // Récupère le panier sauvegardé depuis le stockage local
  const savedCart = localStorage.getItem('cart');
  // Initialise le panier avec la valeur sauvegardée ou un tableau vide
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  // Mise à jour du stockage local lorsque le panier change
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
