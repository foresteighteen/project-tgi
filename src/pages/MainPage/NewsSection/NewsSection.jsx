import React from 'react';
import Slider from 'react-slick';
import { NewsRow, SubscribeForm } from '../../../components';

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
        {/* <div className="news__header">
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
          <div className="news__item">
            <img
              src="/src/assets/img/news-1.png"
              alt=""
              className="news__item-image"
            />
            <p className="news__item-date">21 июля 2019</p>
            <h3 className="news__item-title">
              Компания «Завод Теплогидроизоляции» внесла вклад в реализацию
              масштабного проекта ООО «Тулачермет-Сталь»
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
          </div>
        </Slider> */}
        <NewsRow first />
        <SubscribeForm />
        <NewsRow />
      </div>
    </div>
  );
};

export default NewsSection;
