import React, { useEffect } from 'react';
import Slider from 'react-slick';
import withPostsData from '../../../containers/withPostsData';
import { NewsItem, QuestionForm } from '../../../components';
import { LangContext } from '../../../containers/LangProvider';

import SliderArrows from '../SliderArrows';
import './NewsSection.sass';

const NewsSection = ({ postsData, postsLoaded }) => {
  const sliderRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [sliderLength, setSliderLength] = React.useState(0);
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
  if (!postsLoaded) return null;
  return (
    <section className="news">
      <div className="container left-offset">
        <div className="news__header">
          <div className="news__title">Новости</div>
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
        <Slider ref={sliderRef} className="news__list" {...sliderOptions}>
          {postsData.map(renderNews)}
          <div></div>
        </Slider>
      </div>
      <QuestionForm />
    </section>
  );
};

export default withPostsData('news')(NewsSection);
