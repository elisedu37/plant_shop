import React from 'react';

// Composant pour les échelles de lumière et d'arrosage
function CareScale({ scaleValue, careType }) {
  const quantityLabel = {
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup',
  };

  return (
    <p>
      Quantité
      {careType === 'light' ? ' de lumière' : " d'arrosage"} :
      {quantityLabel[scaleValue]}
    </p>
  );
}

export default CareScale;
