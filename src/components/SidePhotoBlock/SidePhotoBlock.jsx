import React, { useState, useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from 'react-spring';
import { assoc } from 'ramda';
import uniqid from 'uniqid';
import './SidePhotoBlock.sass';

const SidePhotoBlock = ({ classes, title, textArray, imgSrc, imgAlt }) => {
  const [animate, play] = useState(false);

  const textWithId = textArray.map(item => assoc('id', uniqid(), item));

  const springRef1 = useRef();
  const springPhotoBLock = useSpring({
    ref: springRef1,
    transform: animate ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)',
    config: config.slow,
  });

  const springRef2 = useRef();
  const springOverlay = useSpring({
    ref: springRef2,
    backgroundColor: animate ? '#fff' : '#EE9D35',
    width: animate ? '0px' : '100%',
    left: animate ? '100%' : '0%',
  });

  const springRef3 = useRef();
  const springOverlayMain = useSpring({
    ref: springRef3,
    transform: animate ? 'scale3d(1, 1, 1)' : 'scale3d(0, 1, 1)',
    transformOrigin: '0% 0%',
    config: config.slow,
  });

  const springRef4 = useRef();
  const springTitle = useSpring({
    ref: springRef4,
    opacity: animate ? 1 : 0,
    config: { ...config.default, tension: 200 },
  });

  const springRef5 = useRef();
  const springTexts = useTransition(
    animate ? textWithId : [],
    text => text.id,
    {
      ref: springRef5,
      trail: 400 / textWithId.length,
      from: { opacity: 0, transform: 'matrix(1,0,0,1.4,0,80)' },
      enter: { opacity: 1, transform: 'matrix(1,0,0,1,0,0)' },
      leave: { opacity: 0, transform: 'matrix(1,0,0,1.4,0,80)' },
      config: config.gentle,
    },
  );

  useChain(animate ? [springRef1, springRef2] : [springRef2, springRef1]);

  useChain(
    animate
      ? [springRef3, springRef4, springRef5]
      : [springRef5, springRef4, springRef3],
  );

  return (
    <Waypoint
      bottomOffset="40%"
      onEnter={() => {
        if (!animate) play(true);
      }}
    >
      {animate ? (
        <div className={`side-photo__block ${classes}`}>
          <animated.div
            style={springOverlayMain}
            className="side-photo__block__after"
          />
          <div className="side-photo__block__info">
            <animated.div style={springOverlayMain} className="overlay-block" />
            <animated.h2 className="font-bold font-nova" style={springTitle}>
              <span className="side-photo__block__before"></span>
              {title || ''}
            </animated.h2>
            <div className="side-photo__block__img">
              <animated.div
                className="side-photo__block__wrap"
                style={springPhotoBLock}
              >
                <animated.div style={springOverlay} className="overlay-block" />
                <img src={imgSrc} alt={imgAlt} />
              </animated.div>
            </div>
            {springTexts.map(
              ({ item, key, props }) =>
                item && (
                  <animated.p style={props} key={key}>
                    {item.text}
                  </animated.p>
                ),
            )}
          </div>
        </div>
      ) : (
        <div style={{ width: '100%', height: '900px' }}></div>
      )}
    </Waypoint>
  );
};

export default SidePhotoBlock;
