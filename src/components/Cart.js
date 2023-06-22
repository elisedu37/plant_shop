import React from 'react';
// Hooks
import { useState } from 'react';
// Icones
import { Trash, ShoppingCart } from 'phosphor-react';

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
  // Supprimer un item du panier
  const deleteItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    updateCart(updatedCart);
  };

  return (
    <>
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        <ShoppingCart size={24} />({nbArticles})
      </button>
      {isOpen && (
        <div className="cart">
          {cart.length > 0 ? (
            <div className="cart-list">
              <h3>Total :{totalPrice}€</h3>
              {cart.map(({ name, price, amount }, index) => (
                <div key={`${name}-${index}`} className="cart-item">
                  <div
                    onClick={() => deleteItem(index)}
                    className="delete-item"
                  >
                    <Trash size={24} />
                  </div>
                  {name}
                  <div>
                    {price}€ x {amount}
                  </div>
                </div>
              ))}
              <button onClick={() => updateCart([])}>Vider le panier</button>
            </div>
          ) : (
            <div className="cart-vide">Votre panier est vide</div>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
