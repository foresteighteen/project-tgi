import React from 'react';
import RevealBlock from '../../containers/Animations/RevealBlock';
import { ProductionSlider, H2 } from '../../components';

const ProductSliderSection = ({ data }) => {
  const { title, slider } = data;
  return (
    <section id="product-slider-section">
      <div className="container">
        <RevealBlock>
          <H2 text={title} classes="side font-nova" />
        </RevealBlock>
        <ProductionSlider slider={slider} />
      </div>
    </section>
  );
};

export default ProductSliderSection;
