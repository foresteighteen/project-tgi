import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import { animated, useTrail, useSpring, useChain } from 'react-spring';
import { LangContext } from '../../../containers/LangProvider';
import { RevealByWord } from '../../../containers/Animations';


import './ProductionSection.sass';

const ProductionSection = ({ data }) => {
  const { state } = React.useContext(LangContext);
  const { title, bgImg, blocks } = data;
  const [animate, play] = useState(false);

  const springRef1 = useRef();
  const springPhotoBLock = useSpring({
    ref: springRef1,
    transform: animate ? 'translate3d(0,0,0)' : 'translate3d(-100%,0,0)',
  });

  const springRef2 = useRef();
  const springOverlay = useSpring({
    ref: springRef2,
    backgroundColor: animate ? '#fff' : '#EE9D35',
    width: animate ? '0px' : '100%',
    left: animate ? '100%' : '0%',
  });

  const springRef3 = useRef();
  const itemsTrail = useTrail(blocks.length, {
    ref: springRef3,
    opacity: animate ? 1 : 0,
    transform: animate ? 'translate3d(0,0,0)' : 'translate3d(0,50px,0)',
  });

  useChain(
    animate
      ? [springRef1, springRef2, springRef3]
      : [springRef3, springRef2, springRef1],
  );

  const renderBlocks = (index, animation) => (
    <animated.div key={index} style={animation} className="production__item">
      <Link to={`/${state.lang}${blocks[index].block.link}`}>
        <svg
          type="image/svg+xml"
          className="production__item-icon"
          dangerouslySetInnerHTML={{ __html: blocks[index].block.icon }}
        />
        <h3 className="production__item-title">
          {blocks[index].block.title}
          <span className="production__item-arrow"></span>
        </h3>
      </Link>
    </animated.div>
  );
  return (
    <section className="production">
      <Waypoint
        onEnter={() => play(true)}
        onLeave={() => play(false)}
        bottomOffset="30%"
        scrollableAncestor={document.getElementById('#page-wrap')}
      >
        <div className="container left-offset">
          <RevealByWord>
            <h2 className="production__title">{title}</h2>
          </RevealByWord>
          <div className="production__poster">
            <animated.div
              className="production__poster__wrap"
              style={springPhotoBLock}
            >
              <animated.div style={springOverlay} className="overlay-block" />
              <img
                src={bgImg.url}
                alt={bgImg.alt}
                className="production__poster__img"
              />
            </animated.div>
          </div>
          <div className="production__list">
            {itemsTrail.map(({ ...animation }, index) => renderBlocks(index, animation))}
          </div>
        </div>
      </Waypoint>
    </section>
  );
};

export default ProductionSection;
