import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';

import './KtcHeroSection.sass';

const KtcHeroSection = () => {
  return (
    <section id="about-hero">
        <Hero classes="hero__ktc">
          <H1 text="KTC-1" />
          <HeroBg bgRightImg="/src/assets/img/hero/ktc1.png" />
          <HeroText />
          <ButtonM text="оформить заказ" classes="btn-r" />
        </Hero>
    </section>
  );
};

export default KtcHeroSection;
