import React from 'react'

import './ProductionSliderItem.sass';

const ProductionSliderItem = ({img}) => {
  return (
    <div className="production-slider__item">
      <img src={`/src/assets/img/ktc/slider/${img}.png`} alt=""/>
    </div>
  )
}

export default ProductionSliderItem;
