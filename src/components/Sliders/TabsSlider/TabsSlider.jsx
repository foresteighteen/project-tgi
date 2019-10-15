import React from 'react';
import Slider from 'react-slick';

import './TabsSlider.sass';

const TabsSlider = ({ slides }) => {
  const settings = {
    customPaging: i => (
      <div className="tabs-slider__title tabs-slider__inner font-bold font-nova">
        <h3>{slides[i].title}</h3>
      </div>
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
          // verticalSwiping: true,
          // swipeToSlide: true,
        },
      },
    ],
  };

  return (
    <div className="tabs-slider">
      <Slider {...settings}>
        {slides.map(({ title, img, description }) => (
          <div className="tabs-slider__item">
            <div className="tabs-slider__title font-bold font-nova">
              <h3>{title}</h3>
            </div>
            <div className="tabs-slider__img">
              <img src={img.url} alt={img.alt} />
            </div>
            <div className="tabs-slider__info font-nova">
              <p>{description}</p>
            </div>
            {/* <div className="fix">.</div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TabsSlider;
