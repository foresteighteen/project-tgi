import React from 'react';

import CatalogGrid from './CatalogGrid';
import RevealBlock from '../../../containers/Animations/RevealBlock';
import { H2 } from '../../../components';

const CatalogGridSection = ({ complects, title }) => {
  return (
    <section id="catalog-grid-section">
      <div className="container">
        <RevealBlock>
          <H2 text={title} classes="side font-nova" />
        </RevealBlock>
        <CatalogGrid complects={complects} />
      </div>
    </section>
  );
};

export default CatalogGridSection;
