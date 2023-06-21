import React from 'react';
// Composants
import Cart from './Cart';

// Composant pour la barre de navigation
function Navbar({ cart, updateCart }) {
  return (
    <div className="nav">
      <p className="title">La maison des <span>plantes</span></p>
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default Navbar;
