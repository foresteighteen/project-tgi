import React, { Fragment, useState, useRef, useEffect,  useLayoutEffect } from 'react';
import { animated, useTrail, config, useSpring } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { TimelineMax, Power1 } from 'gsap';
import SplitText from '../../utils/SplitText';
import nestedLinesSplit from '../../utils/nestedLinesSplit';

const LinesAnimation = ({ items }) => {
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
  });
  return (
    trail.map(({ x, ...rest }, index) => (
      <animated.span
        key={index}
        className="animated-lines-text"
        style={{ ...rest, display: 'block', transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
        {items[index].innerText}
        {/* {React.cloneElement(items[index])} */}
      </animated.span>
    ))
  );
};


const RevealByLine = props => {
  const defaultProps = {
    duration: 0.7,
    stagger: 0.2,
    waypointTopOffset: '0%',
    waypointBottomOffset: '20%',
    forwardSpeed: 1,
    reverseSpeed: 0.5
  };


  let mySplitText = null;
  let splitTextTimeline = null;
  const [waypointActive, setWp] = useState(true);
  const [toggle, set] = useState(false);
  const splitThisText = useRef();
  const revealText = () => {
      if (!toggle) splitTextTimeline.play().timeScale(defaultProps.forwardSpeed);
      set(true);
  }
  useLayoutEffect(() => {
    // if (!mySplitText) setMySplitText(new SplitText(splitThisText.current, { type: 'lines', linesClass: 'animated-line' }));
    // if (!mySplitText) setMySplitText(nestedLinesSplit(splitThisText.current, { type: 'lines', linesClass: 'animated-lines-text' }));
    mySplitText = nestedLinesSplit(splitThisText.current, { type: 'lines', linesClass: 'animated-lines-text' });
    splitTextTimeline = new TimelineMax({ immediateRender: false, paused: true });   
    splitTextTimeline
      .addLabel('start')     
      .set(mySplitText.lines, {perspective: 500 }, 'start')
      // .set(splitThisText.current, { opacity: 1 }, 'start')
      .staggerFrom(mySplitText.lines, defaultProps.duration, {
        y: 20,
        scaleY: 1.4,
        autoAlpha: 0,
        transformOrigin: '50% 0%',
        ease: Power1.easeIn,
      }, 
        defaultProps.stagger,
        'start');
    return function cleanup() {
      setWp(false);
      mySplitText.revert();
    };
  }, []);

  return (
    <Fragment>
      {waypointActive && (
        <Waypoint
          onEnter={() => revealText()}
          topOffset={props.waypointTopOffset}
          bottomOffset={props.waypointBottomOffset || '40%'}
          scrollableAncestor={document.getElementById('#page-wrap')}
        >
          <div ref={splitThisText}>
            {props.children}
          </div>
        </Waypoint>
      )}
    </Fragment>
  );
};

export default RevealByLine;

