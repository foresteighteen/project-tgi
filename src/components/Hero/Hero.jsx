import React, { Component } from 'react';

import Breadcrumb from '../Breadcrumb';

import './Hero.sass';

const Hero = ({classes, children, bgImg}) => {

    return (
      <div className={`hero__section ${classes}`} style={{backgroundImage: `url(${bgImg})`}}>
        <div className="container">
          <div className="hero__section__inner">
            <Breadcrumb />
          {children}
          </div>
        </div>        
      </div>
    )

}

export default Hero ;
