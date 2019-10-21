import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';

import './NewsHeroSection.sass';

const NewsHeroSection = ({data}) => {
  const {title, description} = data;
  return (
    <section id="news-hero">
        <Hero classes="hero__news">
          <H1 text={title} />
          <HeroText desc={description} />
        </Hero>
    </section>
  );
};

export default NewsHeroSection;
