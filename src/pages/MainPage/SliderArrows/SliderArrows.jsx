import React from 'react';
import { ArrowBtn } from '../../../components';

import './SliderArrows.sass';

const SliderArrows = ({ onClickPrev, onClickNext, activeSlide, sliderLength }) => {  
  const disabledLeft = activeSlide === 0;
  const disabledRight = activeSlide === sliderLength; 
  return ( 
  <div className="slider-arrows">
    <ArrowBtn click={onClickPrev} left sliderBtn disabled={disabledLeft} />
    <ArrowBtn click={onClickNext} right sliderBtn disabled={disabledRight} />
  </div>
)};

export default SliderArrows;
