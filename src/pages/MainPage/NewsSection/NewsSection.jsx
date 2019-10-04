import React from 'react';
import Slider from 'react-slick';
import { NewsItem } from '../../../components';

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
    <div className="news">
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
          {/* <div className="news__item">
            <img
              src="/src/assets/img/news-2.png"
              alt=""
              className="news__item-image"
            />
            <p className="news__item-date">21 августа 2019</p>
            <h3 className="news__item-title">
              Прокатали очередную партию сэндвич-панелей со скрытым замком
              SECRET FIX
            </h3>
          </div>
          <div className="news__item">
            <img
              src="/src/assets/img/news-2.png"
              alt=""
              className="news__item-image"
            />
            <p className="news__item-date">21 августа 2019</p>
            <h3 className="news__item-title">
              Прокатали очередную партию сэндвич-панелей со скрытым замком
              SECRET FIX
            </h3>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default NewsSection;
