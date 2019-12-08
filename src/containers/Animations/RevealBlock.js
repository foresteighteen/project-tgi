import React, { Fragment, useState, useRef, useEffect } from 'react';
import { animated, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const RevealBlock = props => {
  const [animation, play] = useState(false);
  const blockAnimation = useSpring({
    opacity: animation ? 1 : 0,
    transform: animation
      ? 'translate3d(0,0,0)'
      : props.transformStyles || 'translate3d(0,20%,0)',
    config: config.molasses,
  });

  return (
    <Fragment>
      <Waypoint
        onEnter={() => play(true)}
        onLeave={() => play(false)}
        topOffset={props.waypointTopOffset}
        bottomOffset={props.waypointBottomOffset || '30%'}
        scrollableAncestor={document.getElementById('#page-wrap')}
      >
        <animated.div style={blockAnimation}>{props.children}</animated.div>
      </Waypoint>
    </Fragment>
  );
};

export default RevealBlock;
