import React from 'react';
// Hooks
import { useState } from 'react';
// Package
import ReactModal from 'react-modal';
// Composant
import CareScale from './CareScale';

/**
 * Component pour chaque item de la liste de produits
 * @param {string} cover Image du produit
 * @param {string} name Nom du produit
 * @param {number} price Prix du produit
 * @param {number} water Echelle d'eau dont le produit a besoin
 * @param {number} light Echelle de lumière dont le produit a besoin
 * @param {boolean} isBestSale Produit en top ventes
 * @param {boolean} isSpecialOffer Produit en promo
 * @returns {JSX}
 */
function PlantItem({
  cover,
  bigCover,
  name,
  price,
  water,
  light,
  isBestSale,
  isSpecialOffer,
}) {
  // Modal pour plus d'infos sur le produit
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <li className="item-li" onClick={() => setModalOpen(true)}>
        <img className="item-cover" src={cover} alt={`${name} cover`} />
        <div className="item-content">
          <div className="details">
            {name}
            <div>{price}€</div>
          </div>
          <div className="infos">
            <CareScale careType="water" scaleValue={water} />
            <CareScale careType="light" scaleValue={light} />
          </div>
          <div className="tags">
            {isBestSale && <div className="bestseller">Top ventes</div>}
            {isSpecialOffer && <div className="soldes">Soldes</div>}
          </div>
        </div>
      </li>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Product Modal"
        className="customModal"
      >
        <div className="modal-img">
          <img src={bigCover} alt={`${name} cover`} />
        </div>
        <div className="modal-content">
          <h2>{name}</h2>
          <p>Prix: {price}€</p>
        </div>
      </ReactModal>
    </React.Fragment>
  );
}

export default PlantItem;
