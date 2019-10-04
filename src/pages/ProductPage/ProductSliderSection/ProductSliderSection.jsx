import React from 'react';

import { ProductionSlider, H2 } from '../../../components';

const ProductSliderSection = () => {
  return (
    <section id="product-slider-section">
      <div className="container">
        <H2 text="Производство:" classes="side font-nova" />
        <ProductionSlider />
      </div>
    </section>
  );
};

export default ProductSliderSection;
