import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';

import './CatalogHeroSection.sass';

const CatalogHeroSection = ({ data }) => {
  const { title, btnText, imgLeft, imgRight, description, btn_file } = data;
  return (
    <section id="catalog-hero">
      <Hero classes="hero__catalog hero__full">
        <H1 text={title} />
        <HeroBg bgRightImg={imgRight} bgLeftImg={imgLeft} />
        <HeroText desc={description} />
        <a
          href={btn_file}
          target="_blank"
          className="btn-main btn-r"
          rel="noopener noreferrer"
          download
        >
          <span className="btn-text">{btnText}</span>
        </a>
        {/* <ButtonM text={btnText} classes="btn-r" /> */}
      </Hero>
    </section>
  );
};

export default CatalogHeroSection;
