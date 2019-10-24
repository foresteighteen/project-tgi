import React from 'react';
import { Hero, H1, HeroText } from '../../../components';

import './HeroSection.sass';

const HeroSection = ({ title, subtitle }) => (
  <section id="certificate-hero">
    <Hero classes="hero__single-news">
      <H1 text={title} />
      <HeroText desc={subtitle} />
    </Hero>
  </section>
);

export default HeroSection;
