import React from 'react';
// Hooks
import { useState, useEffect } from 'react';

// Composant pour le panier
function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    const sum = cart.reduce((acc, plantType) => acc + plantType.amount, 0);
    setTotalAmount(sum);
  }, [cart]);

  return (
    <>
      <button className="cart-toggle" onClick={() => setIsOpen(!isOpen)}>
        Panier ({totalAmount})
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
              <h3>Total :{total}€</h3>
              <button onClick={() => updateCart([])}>Vider le panier</button>
            </>
          ) : (
            <div>Votre panier est vide</div>
          )}
        </div>
      )}
    </>
  );
}

export default Cart;
