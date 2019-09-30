import React from 'react';
import Slider from 'react-slick';

import './ProductSection.sass';

const ProductSection = () => {
  const sliderOptions = {
    slidesToShow: 2,
    arrows: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="products">
      <div className="container left-offset">
        <h2 className="products__title">Продукция</h2>
        <Slider className="products__list" {...sliderOptions}>
          <div className="products__item">
            <h3 className="products__item-title">
              Комплекты теплоизоляции стыков трубопроводов
            </h3>
            <img
              src="/src/assets/img/ktc0106.png"
              alt=""
              className="products__item-image"
            />
          </div>
          <div className="products__item">
            <h3 className="products__item-title">Теплогидроизоляция труб</h3>
            <img
              src="/src/assets/img/teplohydro1.png"
              alt=""
              className="products__item-image"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ProductSection;
