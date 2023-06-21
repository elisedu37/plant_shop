import React from 'react';

function Search({ setFilter }) {
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div
      className={`d-flex flex-row justify-content-center align-item-center my-30`}
    >
      <i className="fa-solid fa-magnifying-glass mr-15"></i>
      <input
        onInput={handleInput}
        className="flex-fill"
        type="text"
        placeholder="Rechercher"
      />
    </div>
  );
}

export default Search;
