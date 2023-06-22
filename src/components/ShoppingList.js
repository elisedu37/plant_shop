import React, { useState } from 'react';
// Composants
import PlantItem from './PlantItem';
import Categories from './Categories';
// Datas
import { plantList } from '../datas/plantList';

/**
 * Component pour la liste des produits
 * @param {Array} cart tableau qui comprend tout les articles qui sont dans le panier
 * @param {Function} updateCart fonction qui permet l'ajout ou le retrait d'un élément du panier
 * @returns {JSX}
 */
function ShoppingList({ cart, updateCart }) {
  // filtre par catégorie
  const [activeCategory, setActiveCategory] = useState('');
  // filtre par moteur de recherche
  const [filter, setFilter] = useState('');
  // nombre de produits visible (charger plus)
  const [visibleProducts, setVisibleProducts] = useState(10);
  // en cours de chargement
  const [isLoading, setIsLoading] = useState(false);

  // ajout d'un produit dans le panier
  function addToCart(name, price) {
    alert('Vous avez ajouté un produit à votre panier');
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    // le produit existe déjà dans le panier
    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  // suite au clic sur le bouton 'charger plus de produits'
  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
      setIsLoading(false);
    }, 200);
  }

  // Obtient la liste des catégories à partir de la liste des plantes
  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  // pour le filtre par recherche, action déclancher lorsque l'input change
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  // Filtre les produits en fonction du texte de recherche
  const filteredProducts = plantList.filter((r) =>
    r.name.toLowerCase().includes(filter)
  );

  // Filtre les produits affichés en fonction de la catégorie active
  const displayedProducts = filteredProducts
    .filter((product) => !activeCategory || activeCategory === product.category)
    .slice(0, visibleProducts);

  return (
    <div className="lmj-shopping-list">
      <div className="filters">
        <input onInput={handleInput} type="text" placeholder="Rechercher..." />
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </div>

      <ul className="list-product">
        {displayedProducts.map(
          ({
            id,
            cover,
            bigCover,
            name,
            water,
            light,
            price,
            isBestSale,
            isSpecialOffer,
          }) => (
            <div key={id} className="item">
              <PlantItem
                cover={cover}
                bigCover={bigCover}
                name={name}
                water={water}
                light={light}
                price={price}
                isBestSale={isBestSale}
                isSpecialOffer={isSpecialOffer}
              />
              <button onClick={() => addToCart(name, price)}>Ajouter</button>
            </div>
          )
        )}
        {filteredProducts.length === 0 && <p>Aucun produit</p>}
      </ul>

      {visibleProducts < filteredProducts.length && (
        <div className="load-more">
          {isLoading ? (
            <p>Chargement...</p>
          ) : (
            <button onClick={handleLoadMore}>Afficher plus</button>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingList;
