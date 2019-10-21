import React from 'react'

import CatalogProducts from './CatalogProducts';

const CatalogProductsSection = ({ data }) => {
  return (
    <section id="catalog-products-section">
      <div className="container">
        <CatalogProducts {...data} />
      </div>
    </section>
  )
}

export default CatalogProductsSection;

