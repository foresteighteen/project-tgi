import React from 'react';

import { ProductionSlider, H2 } from '../../components';

const AboutSliderSection = ({ data }) => {
  const {title, slider } = data;
  return (
    <section id="ktc-slider-section">
      <div className="container">
        <H2 text={title} classes="side font-nova" />
        <ProductionSlider slider={slider} />
      </div>
    </section>
  );
};

export default AboutSliderSection;
