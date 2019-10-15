import React from 'react';
import Slider from 'react-slick';

import ProductionSliderItem from './ProductionSliderItem';

const ProductionSlider = ({ slider }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 3,
    lazyLoad: true,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          variableWidth: false,
        },
      },
    ],
  };

  return (
    <div className="production-slider">
      <Slider {...settings}>
        {slider.map(({ img }, i) => (
          <ProductionSliderItem key={i} imgSrc={img.url} imgAlt={img.alt} />
        ))}
      </Slider>
    </div>
  );
};

export default ProductionSlider;
