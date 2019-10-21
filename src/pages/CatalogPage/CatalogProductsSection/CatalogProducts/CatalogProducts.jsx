import React from 'react';
import uniqid from 'uniqid';
import CatalogProductMain from './CatalogProductMain';

const CatalogProducts = ({ block }) => {
  const renderedItems = block.map(item => <CatalogProductMain key={uniqid()} item={item} />);
  return renderedItems;
};

export default CatalogProducts;
