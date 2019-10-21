import React from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../../containers/LangProvider';

import './CatalogGridItem.sass';

const CatalogGridItem = ({ img, tags }) => {
  const { state } = React.useContext(LangContext);
  return (
    <div className="catalog__grid__item">
      <Link to={`/${state.lang}/ktc`}>
        <img src={img} alt="" className="img-responsive" />
      </Link>
      <ul className="catalog__grid__item__list">
        <li>
          <dl>
            <dt className="list__title">Отрасль:</dt>
            <dd className="list__text">нефтегаз</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className="list__title">Оболочка трубопровода:</dt>
            <dd className="list__text">полиэтиленовая</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className="list__title">Тип прокладки:</dt>
            <dd className="list__text">надземная</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt className="list__title">Материал изоляции:</dt>
            <dd className="list__text">скорлупа ППУ</dd>
          </dl>
        </li>
      </ul>
    </div>
  );
};

export default CatalogGridItem;
