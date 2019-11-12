import React, { Component } from 'react';
import { animated, useSpring } from 'react-spring';
import Breadcrumb from '../Breadcrumb';

import './Hero.sass';

const Hero = ({classes, children, bgImg, brdcrmb}) => {

    const spring = useSpring({
      from: {opacity: 0, transform: 'translate3d(0,80px,0)'},
      to: {opacity: 1, transform: 'translate3d(0,0px,0)'}
    });

    const styles = {
      backgroundImage: bgImg ? `url(${bgImg})` : 'none',
    };

    return (
      <div className={`hero__section ${classes}`} style={styles}>
        <animated.div className="container" style={spring}>
          <div className="hero__section__inner">
            <Breadcrumb {...brdcrmb}/>
          {children}
          </div>
        </animated.div>        
      </div>
    )

}

export default Hero ;
