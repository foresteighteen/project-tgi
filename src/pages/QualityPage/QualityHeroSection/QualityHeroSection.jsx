import React from 'react';
import { Hero, H1 } from '../../../components';

import './QualityHeroSection.sass';

const QualityHeroSection = () => {
  return (
    <section id="quality-hero">
        <Hero classes="white hero__full hero-covered" bgImg="/src/assets/img/hero/quality.png">
          <H1 text="Контроль качества" />   
        </Hero>
    </section>
  );
};

export default QualityHeroSection;

