import React, { useState, useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import { animated, useSpring, useChain, config } from 'react-spring';
import './ProductIncludesItem.sass';

const ProductIncludesItem = ({ img_big, img_sm, text }) => {
  const [animate, play] = useState(false);

  const springRef1 = useRef();
  const springPhotoBLock = useSpring({
    ref: springRef1,
    from: { transform: 'translate3d(-100%,0,0)' },
    to: { transform: 'translate3d(0,0,0)' },
  });

  const springRef2 = useRef();
  const springOverlay = useSpring({
    ref: springRef2,
    from: {
      backgroundColor: '#EE9D35',
      width: '100%',
      left: '0%',
    },
    to: {
      backgroundColor: '#fff',
      width: '0px',
      left: '100%',
    },
  });

  const springRef3 = useRef();
  const spring3 = useSpring({
    ref: springRef3,
    from: { transform: 'matrix(1,0,0,1.4,0,180)', opacity: '0' },
    to: { transform: 'matrix(1,0,0,1,0,0)', opacity: '1' },
    config: config.gentle,
  });

  useChain(animate ? [springRef1, springRef2, springRef3] : [], [0, 0.7, 0]);

  return (
    <Waypoint bottomOffset="30%" onEnter={() => play(true)}>
      <div className="product-item">
        <div className="product-item-left">
          <animated.div className="product-item__wrap" style={springPhotoBLock}>
            <animated.div
              style={springOverlay}
              className="product-item__overlay-block"
            />
            <img src={`${img_big}`} alt="" />
          </animated.div>
        </div>
        <div style={spring3} className="product-item-text">
        <animated.div className="product-item__wrap" style={springPhotoBLock}>
            <animated.div
              style={springOverlay}
              className="product-item__overlay-block"
            />
            {text}
          </animated.div>
        </div>
        <div className="product-item-right">
          <animated.div className="product-item__wrap" style={springPhotoBLock}>
            <animated.div
              style={springOverlay}
              className="product-item__overlay-block"
            />
            <img src={`${img_sm}`} alt="" />
          </animated.div>
        </div>
      </div>
    </Waypoint>
  );
};

export default ProductIncludesItem;
