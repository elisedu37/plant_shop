import React from 'react';

/**
 * Component pour le filtre par catégorie
 * @param {Function} setActiveCategory permet de mettre à jour la valeur activeCategory
 * @param {Array} categories liste de toutes les catégories pour créer le select
 * @param {string} activeCategory catégorie de filtre activée : tout, intérieur, extérieur...
 * @returns {JSX}
 */
function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">Tout</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Categories;
