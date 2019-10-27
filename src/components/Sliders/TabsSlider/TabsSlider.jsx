import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import { Waypoint } from 'react-waypoint';

import {
  animated,
  useSpring,
  useChain,
} from 'react-spring';
import './TabsSlider.sass';

const TabsSlider = ({ slides }) => {
  const [animate, play] = useState(false);

  const springRef1 = useRef();
  const springPhotoBLock = useSpring({
    ref: springRef1,
    // transform: animate ? 'translate3d(0,0,0)' : 'translate3d(0,-100%,0)',
    from: { transform: 'translate3d(0,-100%,0)' },
    to: { transform: 'translate3d(0,0,0)' },
    // config: config.gentle,
  });

  const springRef2 = useRef();
  const springOverlay = useSpring({
    ref: springRef2,
    from: {
      backgroundColor: '#fff',
      height: '100%',
      top: '0%',
    },
    to: {
      backgroundColor: '#EE9D35',
      height: '0px',
      top: '100%',
    },
  });

  const springRef3 = useRef();
  const spring3 = useSpring({
    ref: springRef3,
    from: {
      opacity: 0,
      transform: 'translate3d(30%, 0px,  0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0%, 0px)',
    },
  });

  const springRef4 = useRef();
  const spring4 = useSpring({
    ref: springRef4,
    from: {
      opacity: 0,
      transform: 'translate3d(0px, -100%, 0px)',
    },
    to: {
      opacity: 1,
      transform: 'translate3d(0px, 0%, 0px)',
    },
  });

  const springRef5 = useRef();
  const spring5 = useSpring({
    ref: springRef5,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  useChain(
    animate ? [springRef1, springRef2, springRef4, springRef5, springRef3] : [],
    [0, 0.5, 1, 1.3, 1.5],
  );

  const settings = {
    customPaging: i => (
      <animated.div
        className="tabs-slider__title tabs-slider__inner font-bold font-nova"
        style={spring3}
        key={i}
        delay={1000}
      >
        <h3>{slides[i].title}</h3>
      </animated.div>
    ),
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          fade: false,
          slidesToScroll: 1,
          slidesToShow: 4,
          infinite: false,
          dots: false,
          vertical: true,
          adaptiveHeight: false,
        },
      },
    ],
  };

  return (
    <Waypoint
      bottomOffset="40%"
      onEnter={() => {
        if (!animate) play(true);
      }}
    >
      <div className="tabs-slider">
        <Slider {...settings}>
          {slides.map(({ title, img, description }) => (
            <div className="tabs-slider__item">
              <div className="tabs-slider__title font-bold font-nova">
                <h3>{title}</h3>
              </div>
              {/* <div className="tabs-slider__img">
              <img src={img.url} alt={img.alt} />
            </div> */}
              <div className="tabs-slider__img">
                <animated.div
                  className="tabs-slider__img__wrap"
                  style={springPhotoBLock}
                >
                  <animated.div
                    style={springOverlay}
                    className="overlay-block"
                  />
                  <img src={img.url} alt={img.alt} />
                </animated.div>
              </div>
              <animated.div
                style={spring4}
                className="tabs-slider__info font-nova"
              >
                <animated.p style={spring5}>{description}</animated.p>
              </animated.div>
              {/* <div className="fix">.</div> */}
            </div>
          ))}
        </Slider>
      </div>
    </Waypoint>
  );
};

export default TabsSlider;
