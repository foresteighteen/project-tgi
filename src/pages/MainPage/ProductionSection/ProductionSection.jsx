import React from 'react';

import DiamondSVG from './DiamondSVG';
import DiplomaSVG from './DiplomaSVG';

import './ProductionSection.sass';

const ProductionSection = ({ data }) => {
  const { title, bgImg, firstBlock, secondBlock } = data;
  return (
    <section className="production">
      <div className="container left-offset">
        <h2 className="production__title">{title}</h2>
        <img src={bgImg.url} alt={bgImg.alt} className="production__poster" />
        <div className="production__list">
          <a href={firstBlock.link} className="production__item">
            <DiplomaSVG />
            <h3 className="production__item-title">
              {firstBlock.title}
              <span className="production__item-arrow"></span>
            </h3>
          </a>
          <a
            href={secondBlock.link}
            className="production__item production__item--orange"
          >
            <DiamondSVG />
            <h3 className="production__item-title">
              {secondBlock.title}
              <span className="production__item-arrow"></span>
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
