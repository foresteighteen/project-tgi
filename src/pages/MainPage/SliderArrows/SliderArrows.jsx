import React from 'react';

import './SliderArrows.sass';

const SliderArrows = ({ onClickPrev, onClickNext }) => (
  <div className="slider-arrows">
    <button onClick={onClickPrev} type="button" className="slider-arrow">
      <span>{'<'}</span>
    </button>
    <button onClick={onClickNext} type="button" className="slider-arrow">
      <span>{'>'}</span>
    </button>
  </div>
);

export default SliderArrows;
