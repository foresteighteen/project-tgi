import React from 'react';

import CatalogCategorie from './CatalogCategorie';
import { ErrorBoundary } from '../../../../components';
import './CatalogCategories.sass';

const CatalogCategories = ({ data }) => {
  const { items } = data;
  const renderedItems = items.map(item => (
    <CatalogCategorie item={item} key={item.ID} />
  ));
  return <ErrorBoundary><div className="catalog__categories-grid">{renderedItems}</div></ErrorBoundary>;
};

export default CatalogCategories;
