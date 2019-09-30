import React from 'react';

import CatalogGridItem from './CatalogGridItem';

import './CatalogGrid.sass';

const CatalogGrid = () => {
  return (
    <div className="catalog__grid">
      <CatalogGridItem img={'/src/assets/img/ktc/ktc016.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc026.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc016.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc026.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc016.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc026.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc016.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc026.png'} />
      <CatalogGridItem img={'/src/assets/img/ktc/ktc016.png'} />
    </div>
  );
};

export default CatalogGrid;
