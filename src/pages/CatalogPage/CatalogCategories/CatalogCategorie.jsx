import React from 'react';
import { Link } from 'react-router-dom';

import './CatalogCategorie.sass';

const CatalogCategorie = ({ img }) => {
  return (
    <Link to="/" className="catalog__categorie-item">
      <h4>Маты прошивные</h4>
      <img src={`/src/assets/img/catalog/categories/${img}.png`} alt="" />
    </Link>
  );
};

export default CatalogCategorie;
