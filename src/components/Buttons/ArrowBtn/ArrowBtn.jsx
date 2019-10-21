import React from 'react';
import classnames from 'classnames';

import './ArrowBtn.sass';

const ArrowBtn = ({ right, left, sliderBtn, disabled, click = () => false }) => {
  const btnClass = classnames({
    'link-arrow': true,
    'link-arrow-right': right,
    'link-arrow-left': left,
    'slider-arrow': sliderBtn,
    disabled,
  });
  return (
    // <span className={btnClass}></span>
    <button onClick={click} type="button" className={btnClass} ></button>
  )
}

export default ArrowBtn;

