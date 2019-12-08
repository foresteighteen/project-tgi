import React, { useState } from 'react';
import uniqid from 'uniqid';
import { Link } from 'react-router-dom';
import { animated, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { RevealByWord } from '../../../containers/Animations';
import './ProductSection.sass';

const ProductSection = ({ data }) => {
  const { title, subtitle, slider } = data;
  const [animB, setAnimB] = useState(false);
  const blockAnimation = useSpring({
    opacity: animB ? 1 : 0,
    transform: animB ? 'translate3d(0,0,0)' : 'translate3d(0,20%,0)',
    config: config.molasses,
  });
  return (
    <section className="products">
      <div className="container left-offset">
        <RevealByWord>
          <h2 className="products__title">{title}</h2>
        </RevealByWord>
        <Waypoint
          bottomOffset="30%"
          onEnter={() => setAnimB(true)}
          onLeave={() => setAnimB(false)}
        >
          <div className="products__list">
            {slider.map((slide, i) => (
              <Link key={i} to={`${slide.link}`}>
              <animated.div
                style={blockAnimation}
                className="products__item"
              >
                <h3 className="products__item-title">
                  <span className="animated-span">{slide.title}</span>
                </h3>
                <img
                  src={slide.img.url}
                  alt={slide.img.alt}
                  className="products__item-image"
                />
              </animated.div>
              </Link>
            ))}
          </div>
        </Waypoint>
      </div>
    </section>
  );
};

export default ProductSection;
