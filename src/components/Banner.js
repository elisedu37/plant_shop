import React from 'react';
import '../styles/Banner.css';

function Banner() {
  const title = 'La maison jungle';
  return (
    <div className="lmj-banner">
      <img
        src="https://raw.githubusercontent.com/elisedu37/react_test/develop/src/assets/logo.png"
        alt="La maison jungle"
        className="lmj-logo"
      />
      <h1 className="lmj-title">{title}</h1>
    </div>
  );
}

export default Banner;
