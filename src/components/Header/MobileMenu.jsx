import React from 'react';
import {animated, useSpring, config} from 'react-spring';
import './MobileMenu.sass';

const MobileMenu = ({children, isOpen}) => {

  const spring = useSpring({
    transform: isOpen ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)',
    // config: config.slow,
  });

  return (
    <animated.div style={spring} className="mobile__menu">
      <ul className="mobile__menu__list">
        {children}
      </ul>     
    </animated.div>
  )
}

export default MobileMenu;
