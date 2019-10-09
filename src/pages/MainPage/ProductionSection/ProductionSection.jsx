import React from 'react';

import DiamondSVG from './DiamondSVG';
import DiplomaSVG from './DiplomaSVG';

import './ProductionSection.sass';

const ProductionSection = () => (
  <section className="production">
    <div className="container left-offset">
      <h2 className="production__title">Производство</h2>
      <img
        src="/src/assets/img/production.png"
        alt=""
        className="production__poster"
      />
      <div className="production__list">
        <div className="production__item">
          <DiplomaSVG />
          <h3 className="production__item-title">
            Сертификаты<span className="production__item-arrow"></span>
          </h3>
        </div>
        <div className="production__item production__item--orange">
          <DiamondSVG />
          <h3 className="production__item-title">
            Контроль качества<span className="production__item-arrow"></span>
          </h3>
        </div>
      </div>
    </div>
  </section>
);

export default ProductionSection;
