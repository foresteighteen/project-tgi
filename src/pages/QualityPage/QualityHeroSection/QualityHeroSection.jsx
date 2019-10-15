import React from 'react';
import { Hero, H1 } from '../../../components';

import './QualityHeroSection.sass';

const QualityHeroSection = ({ title, bgImg }) => (
  <section id="quality-hero">
    <Hero classes="white hero__full hero-covered" bgImg={bgImg.url}>
      <H1 text={title} />
    </Hero>
  </section>
);

export default QualityHeroSection;
