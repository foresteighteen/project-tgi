import React from 'react';

import { ProductionSlider, H2 } from '../../components';

const AboutSliderSection = () => {
  return (
    <section id="about-slider-section">
      <div className="container">
        <H2 text="Производство:" classes="side font-nova" />
        <ProductionSlider />
      </div>
    </section>
  );
};

export default AboutSliderSection;
