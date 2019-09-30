import React from 'react';
import Slider from 'react-slick';

import './TabsSlider.sass';

const TabsSlider = () => {
  const slides = [
    {
      img: '/src/assets/img/about/IMG_9309@2x.png',
      title: 'Современное производство',
      text:
        'Доставка продукции завода заказчикам осуществляется железнодорожным, автомобильным и водным транспортом во все регионы РФ и страны ближнего зарубежья. ЗАВОД ТЕПЛОГИДРОИЗОЛЯЦИИ располагает собственной железнодорожной веткой и автотранспортом, что позволяет производить отгрузку готовой продукции в сжатые сроки. В регионы Крайнего Севера, Западной Сибири, Урала продукция отгружается в специально разработанной высокопрочной влагозащитной упаковке.',
    },
    {
      img: '/src/assets/img/about/IMG_3395@2x.png',
      title: 'Аккредитованная лаборатория',
      text:
        'ЗАВОД ТЕПЛОГИДРОИЗОЛЯЦИИ располагает собственной железнодорожной веткой и автотранспортом, что позволяет производить отгрузку готовой продукции в сжатые сроки. В регионы Крайнего Севера, Западной Сибири, Урала продукция отгружается в специально разработанной высокопрочной влагозащитной упаковке.',
    },
    {
      img: '/src/assets/img/about/IMG_9605@2x.png',
      title: 'Доставка в любую точку РФ и СНГ',
      text:
        'Доставка продукции завода заказчикам осуществляется железнодорожным, автомобильным и водным транспортом во все регионы РФ и страны ближнего зарубежья. ЗАВОД ТЕПЛОГИДРОИЗОЛЯЦИИ располагает собственной железнодорожной веткой и автотранспортом, что позволяет производить отгрузку готовой продукции в сжатые сроки. В регионы Крайнего Севера, Западной Сибири, Урала продукция отгружается в специально разработанной высокопрочной влагозащитной упаковке.',
    },
    {
      img: '/src/assets/img/about/IMG_9309@2x.png',
      title: 'Срок эксплуатации продукции более 30 лет',
      text:
        'знодорожной веткой и автотранспортом, что позволяет производить отгрузку готовой продукции в сжатые сроки. В регионы Крайнего Севера, Западной Сибири, Урала продукция отгружается в специально разработанной высокопрочной влагозащитной упаковке.',
    },
  ];

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
        {slides.map(({ title, img, text }) => (
          <div className="tabs-slider__item">
            <div className="tabs-slider__title font-bold font-nova">
              <h3>{title}</h3>
            </div>
            <div className="tabs-slider__img">
              <img src={img} alt="" />
            </div>
            <div className="tabs-slider__info font-nova">
              <p>{text}</p>
            </div>
            {/* <div className="fix">.</div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TabsSlider;
