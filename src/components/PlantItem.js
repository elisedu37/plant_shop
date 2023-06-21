import React from 'react';

import CareScale from './CareScale';

function PlantItem({ cover, name, water, light, isBestSale, isSpecialOffer }) {
  return (
    <li className="item-li">
      <img className="item-cover" src={cover} alt={`${name} cover`} />
      <div className="item-content">
        {name}
        <div>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
        </div>
        <div>
          {isBestSale && <span>🔥</span>}
          {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
        </div>
      </div>
    </li>
  );
}

export default PlantItem;
