import React from 'react';
import { plantList } from '../datas/plantList';
import PlantItem from './PlantItem';
import { useState } from 'react';
import Categories from './Categories';
import Search from './Search';

function ShoppingList({ cart, updateCart }) {
  const [activeCategory, setActiveCategory] = useState('');
  const [filter, setFilter] = useState('');

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

  return (
    <div className="lmj-shopping-list">
      <div className="filters">
        <Search setFilter={setFilter} />
        <Categories
          categories={categories}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </div>

      <ul className="list-product">
        {plantList
          .filter((r) => r.name.toLowerCase().includes(filter))
          .map(
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
            }) =>
              !activeCategory || activeCategory === category ? (
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
                  <button onClick={() => addToCart(name, price)}>
                    Ajouter
                  </button>
                </div>
              ) : null
          )}
      </ul>
    </div>
  );
}

export default ShoppingList;
