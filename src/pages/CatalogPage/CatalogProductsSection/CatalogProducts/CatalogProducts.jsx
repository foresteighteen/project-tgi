import React from 'react';
import CatalogProductMain from './CatalogProductMain';

const CatalogProducts = () => {
  const renderedItems = [1].map(() => <CatalogProductMain />);
  return renderedItems;
}

export default CatalogProducts;
