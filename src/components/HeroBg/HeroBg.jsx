import React from 'react'

import './HeroBg.sass';

const HeroBg = ({bgRightImg, bgLeftImg}) => {
  return (
  <div className="hero-bg">
    <img src={bgRightImg} alt="" className="hero-bg-img img-right"/>
    <img src={bgLeftImg} alt="" className="hero-bg-img img-left"/>
  </div>
  )
}

export default HeroBg;
