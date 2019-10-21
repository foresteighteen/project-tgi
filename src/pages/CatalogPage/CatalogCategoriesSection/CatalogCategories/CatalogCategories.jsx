import React from 'react';

import CatalogCategorie from './CatalogCategorie';

import './CatalogCategories.sass';

const CatalogCategories = ({ data }) => {
  const { items } = data;
  const renderedItems = items.map(item => (
    <CatalogCategorie item={item} key={item.ID} />
  ));
  return <div className="catalog__categories-grid">{renderedItems}</div>;
};

export default CatalogCategories;
