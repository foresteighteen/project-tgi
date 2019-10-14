import React from 'react';
import Slider from 'react-slick';

import ProductionSliderItem from './ProductionSliderItem';

const ProductionSlider = () => {

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
      }],
  };

  return (
    <div className="production-slider">
    <Slider {...settings}>
     {[1,2,3,4,5,1,2,3,4,5].map(e => <ProductionSliderItem img={e}/>)} 
    </Slider>
    </div>
  )
}

export default ProductionSlider;
