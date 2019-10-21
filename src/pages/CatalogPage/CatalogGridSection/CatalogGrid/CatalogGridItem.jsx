import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../../containers/LangProvider';

import './CatalogGridItem.sass';

const CatalogGridItem = ({ complect, fields }) => {
  const { state } = React.useContext(LangContext);
  const { img, post_name } = complect;
  const renderItems = ({ title, info }) => (
    <li key={uniqid()}>
      <dl>
        <dt className="list__title">{title}</dt>
        <dd className="list__text">{info}</dd>
      </dl>
    </li>
  );
  return (
    <div className="catalog__grid__item">
      <Link to={`/${state.lang}/catalog/${post_name}`}>
        <img src={img} alt="" className="img-responsive" />
      </Link>
      <ul className="catalog__grid__item__list">{fields.map(renderItems)}</ul>
    </div>
  );
};

export default CatalogGridItem;
