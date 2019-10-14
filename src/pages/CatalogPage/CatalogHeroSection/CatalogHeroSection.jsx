import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';

import './CatalogHeroSection.sass';

const CatalogHeroSection = () => {
  return (
    <section id="catalog-hero">
        <Hero classes="hero__catalog hero__full">
          <H1 text="Каталог продукции" />
          <HeroBg bgRightImg="/src/assets/img/hero/ktc1.png" bgLeftImg="/src/assets/img/hero/matrev.png" />
          <HeroText />
          <ButtonM text="СКАЧАТЬ КАТАЛОГ" classes="btn-r" />
        </Hero>
    </section>
  )
}

export default CatalogHeroSection;


