import React, { Component } from 'react';

import Breadcrumb from '../Breadcrumb';

import './Hero.sass';

const Hero = ({classes, children, bgImg, brdcrmb}) => {

    return (
      <div className={`hero__section ${classes}`} style={{backgroundImage: `url(${bgImg})`}}>
        <div className="container">
          <div className="hero__section__inner">
            <Breadcrumb {...brdcrmb}/>
          {children}
          </div>
        </div>        
      </div>
    )

}

export default Hero ;
