import React from 'react';
import { Hero, H1, HeroText } from '../../../components';

import './HeroSection.sass';

const HeroSection = () => {
  return (
    <section id="contacts-hero">
      <Hero classes="hero__contacts">
        <H1 text="Контакты" />
        <HeroText />
      </Hero>
    </section>
  );
};

export default HeroSection;
