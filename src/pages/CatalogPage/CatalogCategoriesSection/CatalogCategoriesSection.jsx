import React from 'react'

import CatalogCategories from './CatalogCategories';

const CatalogCategoriesSection = ({ data }) => {
  return (
    <section id="catalog-categories-section">
      <div className="container">
        <CatalogCategories data={data} />
      </div>
    </section>
  )
}

export default CatalogCategoriesSection;

