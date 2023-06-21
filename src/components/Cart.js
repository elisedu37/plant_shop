import React from 'react';
// Hooks
import { useState } from 'react';

/**
 * Component pour le panier
 * @param {Array} cart tableau qui comprend tout les articles qui sont dans le panier
 * @param {Function} updateCart fonction qui permet l'ajout ou le retrait d'un élément du panier
 * @returns {JSX}
 */
function Cart({ cart, updateCart }) {
  // Panier ouvert ou non
  const [isOpen, setIsOpen] = useState(false);
  // Prix total du panier
  const totalPrice = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  // Nombre d'élément dans le panier
  const nbArticles = cart.reduce((acc, plantType) => acc + plantType.amount, 0);

  return (
    <>
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        Panier ({nbArticles})
      </button>
      {isOpen && (
        <div className="cart">
          {cart.length > 0 ? (
            <>
              <ul>
                {cart.map(({ name, price, amount }, index) => (
                  <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                  </div>
                ))}
              </ul>
              <h3>Total :{totalPrice}€</h3>
              <button onClick={() => updateCart([])}>Vider le panier</button>
            </>
          ) : (
            <div className="cart-vide">Votre panier est vide</div>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
