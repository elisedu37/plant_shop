import React, { useState } from 'react';
import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import Categories from './Categories';

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('');
  const [filter, setFilter] = useState('');
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const categories = plantList.reduce(
    (acc, elem) =>
      acc.includes(elem.category) ? acc : acc.concat(elem.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
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

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  function handleLoadMore() {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
      setIsLoading(false);
    }, 1000);
  }

  const filteredProducts = plantList.filter((r) =>
    r.name.toLowerCase().includes(filter)
  );

  const displayedProducts = filteredProducts
    .filter((product) => !activeCategory || activeCategory === product.category)
    .slice(0, visibleProducts);

  return (
    <div className="lmj-shopping-list">
      <div className="filters">
        <input onInput={handleInput} type="text" placeholder="Rechercher" />
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
            name,
            water,
            light,
            price,
            category,
            isBestSale,
            isSpecialOffer,
          }) => (
            <div key={id} className="item">
              <PlantItem
                cover={cover}
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
