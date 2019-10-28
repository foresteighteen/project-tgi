import React from 'react';
import uniqid from 'uniqid';
import CatalogProductMain from './CatalogProductMain';

const CatalogProducts = ({ block }) => {
  const renderedItems = block.map((item, i) => <CatalogProductMain key={i} item={item} index={i}/>);
  return renderedItems;
};

export default CatalogProducts;
