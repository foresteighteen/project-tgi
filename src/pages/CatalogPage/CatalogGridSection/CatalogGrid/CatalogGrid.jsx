import React from 'react';
import CatalogGridItem from './CatalogGridItem';

import './CatalogGrid.sass';

const CatalogGrid = ({ complects }) => {
  const items = complects.map(item => <CatalogGridItem key={item.complect.ID} {...item} />);
  return (
    <div className="catalog__grid">
      {items}
    </div>
  );
};

export default CatalogGrid;
