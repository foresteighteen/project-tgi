import React from 'react';
import { Hero, H1, HeroText } from '../../../components';

import './HeroSection.sass';

const HeroSection = ({ title, desc }) => (
  <section id="certificate-hero">
    <Hero classes="hero__single-news" brdcrmb={{ path: 'news', title: '', id: 100 }}>
      <H1 text={title} />
      <HeroText desc={desc} />
    </Hero>
  </section>
);

export default HeroSection;
