import React from 'react';
// Hooks
import { useState } from 'react';
// Package
import ReactModal from 'react-modal';
// Composant
import CareScale from './CareScale';
// Icones
import { XCircle } from 'phosphor-react';

/**
 * Component pour chaque item de la liste de produits
 * @param {string} cover Image du produit
 * @param {string} bigCover Image du produit en qualité supérieur
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
        contentLabel="Single Product"
        className="customModal"
      >
        <div className="modal-img">
          <img src={bigCover} alt={`${name} cover`} />
        </div>
        <div className="modal-content">
          <h2>{name}</h2>
          <p>Prix: {price}€</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis
            elit vel purus ultricies molestie. Quisque vel lectus in nulla
            malesuada suscipit. Donec posuere porta auctor. Donec vitae arcu ac
            elit sollicitudin congue. Sed interdum, ipsum at bibendum
            vestibulum, augue massa aliquet enim, a vestibulum lorem est sit
            amet nulla. Fusce ac leo ut tellus sodales blandit. Suspendisse
            lacus sapien, ultricies et tristique sit amet, euismod ac tellus.
            Morbi diam velit, malesuada a feugiat id, rhoncus in magna. Nulla
            convallis at erat blandit imperdiet. Praesent orci tortor, molestie
            et consequat vitae, dignissim eget arcu.
          </p>
        </div>
        <div className="btn-close" onClick={() => setModalOpen(false)}>
          <XCircle size={32} />
        </div>
      </ReactModal>
    </React.Fragment>
  );
}

export default PlantItem;
