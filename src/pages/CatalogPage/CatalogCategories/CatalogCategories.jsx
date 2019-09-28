import React from 'react';

import CatalogCategorie from './CatalogCategorie';

import './CatalogCategories.sass';

const CatalogCategories = () => {
  return (
    <section id="catalog__categories">
      <div className="container">
        <div className="catalog__categories-grid">
          {[1, 2, 3, 4].map(e => (
            <CatalogCategorie img={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogCategories;
