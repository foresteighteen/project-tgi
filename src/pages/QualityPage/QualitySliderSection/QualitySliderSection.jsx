import React from 'react';

import { ProductionSlider } from '../../../components';

const QualitySliderSection = ({ slider }) => (
  <section id="quality-slider-section">
    <div className="container">
      <ProductionSlider slider={slider} />
    </div>
  </section>
);

export default QualitySliderSection;
