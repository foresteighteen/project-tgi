import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { LangContext } from '../../../containers/LangProvider';

import DiamondSVG from './DiamondSVG';
import DiplomaSVG from './DiplomaSVG';

import './ProductionSection.sass';

const ProductionSection = ({ data }) => {
  const { state } = React.useContext(LangContext);
  const { title, bgImg, blocks } = data;
  const renderBlocks = ({ block }) => (
    <Link
      to={`/${state.lang}${block.link}`}
      className="production__item"
      key={uniqid()}
    >
      <svg
        type="image/svg+xml"
        className="production__item-icon"
        dangerouslySetInnerHTML={{ __html: block.icon }}
      />
      <h3 className="production__item-title">
        {block.title}
        <span className="production__item-arrow"></span>
      </h3>
    </Link>
  );
  return (
    <section className="production">
      <div className="container left-offset">
        <h2 className="production__title">{title}</h2>
        <img src={bgImg.url} alt={bgImg.alt} className="production__poster" />
        <div className="production__list">
          {blocks.map(renderBlocks)}
          {/* <a href={firstBlock.link} className="production__item">
            <DiplomaSVG />
            <h3 className="production__item-title">
              {firstBlock.title}
              <span className="production__item-arrow"></span>
            </h3>
          </a>
          <a href={secondBlock.link} className="production__item">
            <DiamondSVG />
            <h3 className="production__item-title">
              {secondBlock.title}
              <span className="production__item-arrow"></span>
            </h3>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
