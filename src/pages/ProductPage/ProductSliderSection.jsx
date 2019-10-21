import React from 'react';

import { ProductionSlider, H2 } from '../../components';

const ProductSliderSection = ({ data }) => {
  const {title, slider } = data;
  return (
    <section id="product-slider-section">
      <div className="container">
        <H2 text={title} classes="side font-nova" />
        <ProductionSlider slider={slider} />
      </div>
    </section>
  );
};

export default ProductSliderSection;
