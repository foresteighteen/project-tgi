import React from 'react';
import { ArrowBtn } from '../../../components';

import './SliderArrows.sass';

const SliderArrows = ({ onClickPrev, onClickNext }) => (
  <div className="slider-arrows">
    <ArrowBtn click={onClickPrev} left sliderBtn />
    <ArrowBtn click={onClickNext} right sliderBtn />
    {/* <button onClick={onClickPrev} type="button" className="slider-arrow">
      <span>{'<'}</span>
    </button>
    <button onClick={onClickNext} type="button" className="slider-arrow">
      <span>{'>'}</span>
    </button> */}
  </div>
);

export default SliderArrows;
