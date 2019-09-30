import React from 'react';
import Slider from 'react-slick';

import './HeroSection.sass';

const HeroSection = () => {
  const sliderRef = React.useRef(null);
  const sliderOptions = {
    arrows: false,
    slidesToShow: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="hero">
      <div className="hero--dark"></div>
      <div className="d-flex flex-column hero__container container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="hero__title">завод теплогидроизоляции</h1>
          </div>
          <div className="col-lg-6">
            <p className="hero__subtitle">
              Антикоррозионная и теплоизоляционная защита стыков трубопроводов
              подземной и надземной прокладки на объектах нефтегазовой
              промышленности и жилищно-коммунального хозяйства.
            </p>
          </div>
        </div>
        <div className="hero__slider-arrows">
          <button
            onClick={() => {
              sliderRef.current.slickPrev();
            }}
            type="button"
            className="hero__slider-arrow"
          >
            {'<'}
          </button>
          <button
            onClick={() => {
              sliderRef.current.slickNext();
            }}
            type="button"
            className="hero__slider-arrow"
          >
            {'>'}
          </button>
        </div>
        <Slider ref={sliderRef} className="hero__slider" {...sliderOptions}>
          <div>
            <div className="hero__slide">
              <img
                src="/src/assets/img/oil.svg"
                alt=""
                className="hero__icon"
              />
              <div className="hero__slide-info">
                <p className="hero__slide-title">
                  Реализовано для нефтегазовой отрасли
                </p>
                <p className="hero__slide-quantity">
                  <span>480 000</span> комплектов
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="hero__slide">
              <img
                src="/src/assets/img/pipe.svg"
                alt=""
                className="hero__icon"
              />
              <div className="hero__slide-info">
                <p className="hero__slide-title">Реализовано для отрасли ЖКХ</p>
                <p className="hero__slide-quantity">
                  <span>100 000</span> пог.м.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="hero__slide">
              <img
                src="/src/assets/img/oil.svg"
                alt=""
                className="hero__icon"
              />
              <div className="hero__slide-info">
                <p className="hero__slide-title">
                  Реализовано для нефтегазовой отрасли
                </p>
                <p className="hero__slide-quantity">
                  <span>480 000</span> комплектов
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="hero__slide">
              <img
                src="/src/assets/img/pipe.svg"
                alt=""
                className="hero__icon"
              />
              <div className="hero__slide-info">
                <p className="hero__slide-title">Реализовано для отрасли ЖКХ</p>
                <p className="hero__slide-quantity">
                  <span>100 000</span> пог.м.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
