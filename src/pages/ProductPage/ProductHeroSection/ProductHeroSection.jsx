import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';


const ProductHeroSection = () => {
  return (
    <section id="product-hero">
        <Hero classes="hero__ktc">
          <H1 text="Прошивные маты" />
          <HeroBg bgRightImg="/src/assets/img/hero/ktc.png" />
          <HeroText />
          <ButtonM text="оформить заказ" classes="btn-r" />
        </Hero>
    </section>
  )
}

export default ProductHeroSection;


