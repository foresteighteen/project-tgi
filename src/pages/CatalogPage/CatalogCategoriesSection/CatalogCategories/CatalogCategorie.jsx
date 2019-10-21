import React from 'react';
import { Link } from 'react-router-dom';

import './CatalogCategorie.sass';

const CatalogCategorie = ({ item }) => {
  console.log(item);
  const {img, post_title, post_name} = item;
  return (
    <Link to={`/catalog/${post_name}`} className="catalog__categorie-item">
      <h4 className="font-nova">{post_title}</h4>
      <img src={img} alt="" />
    </Link>
  );
};

export default CatalogCategorie;
