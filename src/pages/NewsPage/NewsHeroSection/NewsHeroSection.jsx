import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';

import './NewsHeroSection.sass';

const NewsHeroSection = () => {
  return (
    <section id="news-hero">
        <Hero classes="hero__news">
          <H1 text="Новости" />
          <HeroText />
        </Hero>
    </section>
  );
};

export default NewsHeroSection;
