import React from 'react';
import { Link } from 'react-router-dom';

import './CatalogCategorie.sass';

const CatalogCategorie = ({ img }) => {
  return (
    <Link to="/product" className="catalog__categorie-item">
      <h4 className="font-nova">Изделия из мин.ваты TECHWOOL</h4>
      <img src={`/src/assets/img/catalog/categories/${img}.png`} alt="" />
    </Link>
  );
};

export default CatalogCategorie;
