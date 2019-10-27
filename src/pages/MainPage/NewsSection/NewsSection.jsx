import React, { useRef, useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import Slider from 'react-slick';
import { Waypoint } from 'react-waypoint';
import withPostsData from '../../../containers/withPostsData';
import { RevealByWord } from '../../../containers/Animations';
import { NewsItem} from '../../../components';
import { LangContext } from '../../../containers/LangProvider';


import SliderArrows from '../SliderArrows';
import './NewsSection.sass';

const NewsSection = ({ postsData, postsLoaded }) => {
  if (!postsLoaded) return null;

  const sliderRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [sliderLength, setSliderLength] = React.useState(0);
  const [animate, play] = useState(false);

  const revealSpring = useSpring({
    opacity: animate ? 1 : 0,
    // transform: animate ? 'translate3d(0, 0, 0)' : 'translate3d(0, 25%, 0)',
    transform: animate
      ? 'matrix(1, 0, 0, 1, 0, 0)'
      : 'matrix(1, 0, 0, 1.4, 0, 280)',
    config: config.slow,
  });
  const { state } = React.useContext(LangContext);

  useEffect(() => {
    if (postsData) setSliderLength(postsData.length - 1);
  }, [postsData]);

  const renderNews = item => (
    <NewsItem
      className="news__item"
      key={item.id}
      lang={state.lang}
      {...item}
    />
  );
  const sliderOptions = {
    arrows: false,
    slidesToShow: 2,
    infinite: false,
    lazyLoad: true,
    swipe: false,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="news">
      <Waypoint
        onEnter={() => play(true)}
        onLeave={() => play(false)}
        bottomOffset={'35%'}
        scrollableAncestor={document.getElementById('#page-wrap')}
      >
        <div className="container left-offset">
          <div className="news__header">
            <h2 className="news__title">
              <RevealByWord>Новости</RevealByWord>
            </h2>
            <SliderArrows
              onClickPrev={() => {
                sliderRef.current.slickPrev();
              }}
              onClickNext={() => {
                sliderRef.current.slickNext();
              }}
              activeSlide={activeSlide}
              sliderLength={sliderLength}
            />
          </div>
          <animated.div style={revealSpring}>
            <Slider ref={sliderRef} className="news__list" {...sliderOptions}>
              {postsData.map(renderNews)}
              <div></div>
            </Slider>
          </animated.div>
        </div>
      </Waypoint>
    </section>
  );
};

const InView = ComposedComponent => props => {
  const [show, set] = React.useState(false);
  return (
    <Waypoint
      onEnter={() => {
        if (!show) set(true);
      }}
      bottomOffset={'-20%'}
      scrollableAncestor={document.getElementById('#page-wrap')}
    >
      {show ? <ComposedComponent {...props} /> : <div style={{ width: '100%', height: '500px' }}></div>}
    </Waypoint>
  );
};

export default InView(withPostsData('news')(NewsSection));

