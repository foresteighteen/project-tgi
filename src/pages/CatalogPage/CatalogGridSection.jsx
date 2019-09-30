import React from 'react';

import CatalogGrid from './CatalogGrid';
import { H2 } from '../../components';

const CatalogGridSection = () => {
  return (
    <section id="catalog-grid-section">
      <div className="container">
        <H2 text="Комплекты теплоизоляции стыков трубопроводов" classes="side font-nova" />
        <CatalogGrid />
      </div>
    </section>
  );
};

export default CatalogGridSection;
