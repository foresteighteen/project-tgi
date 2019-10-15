import React from 'react';
import { Hero, H1, HeroText } from '../../../components';

import './HeroSection.sass';

const HeroSection = ({ title, subtitle }) => (
  <section id="contacts-hero">
    <Hero classes="hero__contacts">
      <H1 text={title} />
      <HeroText items={subtitle} />
    </Hero>
  </section>
);

export default HeroSection;
