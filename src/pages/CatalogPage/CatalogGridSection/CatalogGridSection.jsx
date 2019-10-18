import React from 'react';

import CatalogGrid from './CatalogGrid';
import { H2 } from '../../../components';

const CatalogGridSection = ({data}) => {
  const { title, category } = data;
  return (
    <section id="catalog-grid-section">
      <div className="container">
        <H2 text={title} classes="side font-nova" />
        <CatalogGrid data={category} />
      </div>
    </section>
  );
};

export default CatalogGridSection;
