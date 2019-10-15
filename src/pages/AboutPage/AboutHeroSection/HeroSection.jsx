import React from 'react';
import { Hero, H1 } from '../../../components';

import './HeroSection.sass';

const HeroSection = ({ title, bgImg }) => (
  <section id="about-hero">
    <Hero classes="white hero__full hero-covered" bgImg={bgImg}>
      <H1 text={title} />
    </Hero>
  </section>
);

export default HeroSection;
