import React from 'react';
import Slider from 'react-slick';
import { NewsItem, QuestionForm } from '../../../components';

import SliderArrows from '../SliderArrows';
import './NewsSection.sass';

const NewsSection = () => {
  const sliderRef = React.useRef(null);

  const sliderOptions = {
    arrows: false,
    slidesToShow: 1,
    infinite: false,
  };
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
          />
        </div>
        <Slider ref={sliderRef} className="news__list" {...sliderOptions}>
          <NewsItem className="news__item" />
          <NewsItem className="news__item" />
          <NewsItem className="news__item" />
          <NewsItem className="news__item" />
        </Slider>
      </div>
      <QuestionForm />
    </section>
  );
};

export default NewsSection;
