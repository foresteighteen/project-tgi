import React from 'react';
import CatalogGridItem from './CatalogGridItem';
import { ErrorBoundary } from '../../../../components';
import './CatalogGrid.sass';

const CatalogGrid = ({ complects }) => {
  const items = complects.map(item => (
    <CatalogGridItem key={item.complect.ID} {...item} />
  ));
  return (
    <ErrorBoundary>
      <div className="catalog__grid">{items}</div>
    </ErrorBoundary>
  );
};

export default CatalogGrid;
