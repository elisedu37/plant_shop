import React from 'react';
// Composants
import Cart from './Cart';

/**
 * Component pour la barre de navigation
 * @param {Array} cart tableau qui comprend tout les articles qui sont dans le panier
 * @param {Function} updateCart fonction qui permet l'ajout ou le retrait d'un élément du panier
 * @returns {JSX}
 */
function Navbar({ cart, updateCart }) {
  return (
    <div className="nav">
      <p className="title">
        La maison des <span>plantes</span>
      </p>
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default Navbar;
