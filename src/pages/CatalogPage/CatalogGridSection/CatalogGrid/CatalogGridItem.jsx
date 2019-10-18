import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';

import './CatalogGridItem.sass';

const CatalogGridItem = ({ slug, title, acf }) => {
  const { catalog_data } = acf;
  const { img, info } = catalog_data;
  const renderItems = ({ title, desc }) => (
    <li key={uniqid()}>
      <dl>
        <dt className="list__title">{title}</dt>
        <dd className="list__text">{desc}</dd>
      </dl>
    </li>
  );
  return (
    <div className="catalog__grid__item">
      <Link to={`/catalog/${slug}`}>
        <img src={img} alt="" className="img-responsive" />
      </Link>
      <ul className="catalog__grid__item__list">{info.map(renderItems)}</ul>
    </div>
  );
};

export default CatalogGridItem;
