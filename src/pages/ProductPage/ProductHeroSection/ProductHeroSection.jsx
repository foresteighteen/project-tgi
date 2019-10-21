import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';

import './ProductHeroSection.sass';

const ProductHeroSection = ({data}) => {
  const { title, bgImg, description } = data;
  return (
    <section id="product-hero">
        <Hero classes="hero__product">
          <H1 text={title} />
          <HeroBg bgRightImg={bgImg} />
          <HeroText desc={description} />
          <ButtonM text="оформить заказ" classes="btn-r" />
        </Hero>
    </section>
  );
};

export default ProductHeroSection;
