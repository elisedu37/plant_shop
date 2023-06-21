import React from 'react';

/**
 * Component pour les échelles de lumière et d'arrosage
 * @param {number} scaleValue valeur de 1 à 3 pour l'importance du careType
 * @param {string} careType type de besoins pour la plante : arrosage, lumière
 * @returns {JSX}
 */
function CareScale({ scaleValue, careType }) {
  // Label correspondant au scaleValue
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
