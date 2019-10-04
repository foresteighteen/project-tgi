import React from 'react';

import CatalogCategorie from './CatalogCategorie';

import './CatalogCategories.sass';

const CatalogCategories = () => {
  const renderedItems = [1, 2, 3, 4].map((e, i) => (
    <CatalogCategorie img={e} />
  ));
  return <div className="catalog__categories-grid">{renderedItems}</div>;
};

export default CatalogCategories;
