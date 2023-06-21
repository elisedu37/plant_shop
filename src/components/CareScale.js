import React from 'react';

// Composant pour les échelles de lumière et d'arrosage
function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? <> 🌞 </> : <>💧</>;
  const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup',
  };

  return (
    <div>
      <p>
        Quantité
        {careType === 'light' ? ' de lumière' : " d'arrosage"} :
        {quantityLabel[scaleValue]}(
        {range.map((rangeElem) =>
          scaleValue >= rangeElem ? (
            <span key={rangeElem.toString()}>{scaleType}</span>
          ) : null
        )}
        )
      </p>
    </div>
  );
}

export default CareScale;
