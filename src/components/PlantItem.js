import React from 'react';

import CareScale from './CareScale';

function PlantItem({ cover, name, water, light, isBestSale, isSpecialOffer }) {
  return (
    <li className="lmj-plant-item">
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
      <div>
        {isBestSale && <span>🔥</span>}
        {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
      </div>
    </li>
  );
}

export default PlantItem;
