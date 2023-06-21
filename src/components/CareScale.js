import React from 'react';

// Composant pour les échelles de lumière et d'arrosage
function CareScale({ scaleValue, careType }) {
  const quantityLabel = {
    1: ' peu',
    2: ' modéré',
    3: ' beaucoup',
  };

  return (
    <p>
      {careType === 'light' ? ' Lumière' : ' Arrosage'} :
      {quantityLabel[scaleValue]}
    </p>
  );
}

export default CareScale;
