import React from 'react';
// Composant
import CareScale from './CareScale';

// Composant pour chaque item de la liste de produits
function PlantItem({
  cover,
  name,
  price,
  water,
  light,
  isBestSale,
  isSpecialOffer,
}) {
  return (
    <li className="item-li">
      <img className="item-cover" src={cover} alt={`${name} cover`} />
      <div className="item-content">
        <div className="details">
          {name}
          {price}
        </div>
        <div className="infos">
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
        <div className="tags">
          {isBestSale && <div className="bestseller">Ventes 🔥</div>}
          {isSpecialOffer && <div className="soldes">Soldes</div>}
        </div>
      </div>
    </li>
  );
}

export default PlantItem;
