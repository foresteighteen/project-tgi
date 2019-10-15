import React from 'react';
import Slider from 'react-slick';

import './ProductSection.sass';

const ProductSection = ({ data }) => {
  const { title, subtitle, slider } = data;
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
    <section className="products">
      <div className="container left-offset">
        <h2 className="products__title">{title}</h2>
        <Slider className="products__list" {...sliderOptions}>
          {slider.map(slide => (
            <div className="products__item">
              <h3 className="products__item-title">{slide.title}</h3>
              <img
                src={slide.img.url}
                alt={slide.img.alt}
                className="products__item-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSection;
