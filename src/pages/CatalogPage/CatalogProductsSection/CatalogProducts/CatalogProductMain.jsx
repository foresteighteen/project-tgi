import React from 'react';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../../containers/LangProvider';

import './CatalogProductMain.sass';

const CatalogProductMain = ({ item }) => {
  const { state } = React.useContext(LangContext);
  const { img, title, vertical, products } = item;
  const renderLi = ({ name, product }) => (
    <li className="catalog-product__grid__list-item" key={product.ID}>
      <Link to={`/${state.lang}/catalog/${product.post_name}`}>
        <span className="link-arrow"></span>
        <span className="fill-text" data-text={name}>
          {name}
        </span>
      </Link>
    </li>
  );
  return (
    <React.Fragment>
      <div className="catalog-product__grid">
        <div className="flip-text">
          <h2>{vertical}</h2>
        </div>
        <div className="catalog-product__grid__title">
          <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
        </div>
        <div className="catalog-product__grid__items">
          <ul className="catalog-product__grid__list">
            {products.map(renderLi)}
          </ul>
        </div>
        <div className="catalog-product__grid__img">
          <img src={img} alt="" />
          <div className="white-bg"></div>
        </div>
      </div>
      {/* <div className="catalog-product__grid grid-reverse">
      <div className="flip-text">
        <h2>Теплогидроизоляция труб</h2>
      </div>
      <div className="catalog-product__grid__title">
        <h3>Фасонные <br />изделия</h3>
      </div>
      <div className="catalog-product__grid__items">
        <ul className="catalog-product__grid__list">
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="catalog-product__grid__img">
        <img src="/src/assets/img/catalog/fason.png" />
        <div className="white-bg"></div>
      </div>
    </div>
    <div className="catalog-product__grid grid-left flat-wbg">
      <div className="flip-text">
        <h2></h2>
      </div>
      <div className="catalog-product__grid__title">
        <h3>Плита</h3>
      </div>
      <div className="catalog-product__grid__items">
        <ul className="catalog-product__grid__list">
          <li className="catalog-product__grid__list-item">
            <Link to="/">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
          <li className="catalog-product__grid__list-item">
            <Link to="/product">
              <span className="link-arrow"></span><span className="fill-text" data-text="Пенополиуретан">Пенополиуретан</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="catalog-product__grid__img">
        <img src="/src/assets/img/catalog/plita.png" />
        <div className="white-bg"></div>
      </div>
    </div>
     */}
    </React.Fragment>
  );
};

export default CatalogProductMain;
