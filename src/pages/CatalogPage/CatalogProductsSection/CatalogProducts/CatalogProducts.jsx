import React from 'react';
import CatalogProductMain from './CatalogProductMain';
import { ErrorBoundary } from '../../../../components';

const CatalogProducts = ({ block }) => {
  const renderedItems = block.map((item, i) => <CatalogProductMain key={i} item={item} index={i}/>);
  return <ErrorBoundary>{renderedItems}</ErrorBoundary>;
};

export default CatalogProducts;
