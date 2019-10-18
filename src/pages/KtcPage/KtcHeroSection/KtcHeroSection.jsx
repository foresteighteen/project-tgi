import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';

import './KtcHeroSection.sass';

const KtcHeroSection = ({data}) => {
  const { title, bgImg, description } = data;
  return (
    <section id="about-hero">
        <Hero classes="hero__ktc">
          <H1 text={title} />
          <HeroBg bgRightImg={bgImg} />
          <HeroText desc={description} />
          <ButtonM text="оформить заказ" classes="btn-r" />
        </Hero>
    </section>
  );
};

export default KtcHeroSection;
