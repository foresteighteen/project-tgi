import React from 'react';

import './ProductionSliderItem.sass';

const ProductionSliderItem = ({ imgSrc, imgAlt }) => (
  <div className="production-slider__item">
    <img src={imgSrc} alt={imgAlt} />
  </div>
);

export default ProductionSliderItem;
