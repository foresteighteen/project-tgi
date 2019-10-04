import React from 'react';
import { Hero, H1 } from '../../../components';

import './HeroSection.sass';

const HeroSection = () => {
  return (
    <section id="about-hero">
        <Hero classes="white hero__full hero-covered" bgImg="/src/assets/img/hero/herozav.png">
          <H1 text="Завод теплогидроизоляции" />   
        </Hero>
    </section>
  );
};

export default HeroSection;
