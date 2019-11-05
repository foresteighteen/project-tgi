import React, { useState } from 'react';
import uniqid from 'uniqid';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring } from 'react-spring';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../../containers/LangProvider';
import RevealBlock from '../../../../containers/Animations/RevealBlock';
import { ErrorBoundary } from '../../../../components';

import './CatalogGridItem.sass';

const CatalogGridItem = ({ complect, fields }) => {
  const [animated, play] = useState(false);
  const { state } = React.useContext(LangContext);
  const { img, post_name, post_title } = complect;
  const renderItems = ({ title, info }) => (
    <li key={uniqid()}>
      <dl>
        <dt className="list__title">{title}</dt>
        <dd className="list__text">{info}</dd>
      </dl>
    </li>
  );
  return (
    <ErrorBoundary>
      <RevealBlock>
        <div className="catalog__grid__item">
          <h3 className="catalog__grid__item__title">{post_title}</h3>
          <Link to={`/${state.lang}/catalog/${post_name}`}>
            <img src={`${img}`} alt="" className="img-responsive" />
          </Link>
          <ErrorBoundary>
            <ul className="catalog__grid__item__list">
              {fields.map(renderItems)}
            </ul>
          </ErrorBoundary>
        </div>
      </RevealBlock>
    </ErrorBoundary>
  );
};

export default CatalogGridItem;
