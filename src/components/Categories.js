import React from 'react';

// Composant pour le filtre par catégorie
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
