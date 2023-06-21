import React from 'react';
// Composants
import Cart from './Cart';

// Composant pour la barre de navigation
function Navbar({ cart, updateCart }) {
  return (
    <div className="nav">
      <h1 className="lmj-title">La maison jungle</h1>
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default Navbar;
