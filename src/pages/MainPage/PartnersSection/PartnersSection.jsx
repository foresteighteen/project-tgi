import React from 'react';
import Slider from 'react-slick';

import SliderArrows from '../SliderArrows';
import CertificateItem from './CertificateItem';
import LogoItem from './LogoItem';

import './PartnersSection.sass';

const PartnersSection = () => {
  const sliderRef = React.useRef(null);

  const sliderOptions = {
    arrows: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="partners">
      <div className="container left-offset">
        <div className="partners__header">
          <h2 className="partners__title">Партнеры</h2>
          <SliderArrows
            onClickPrev={() => {
              sliderRef.current.slickPrev();
            }}
            onClickNext={() => {
              sliderRef.current.slickNext();
            }}
          />
        </div>
        <Slider
          ref={sliderRef}
          className="partners__cert-list"
          {...sliderOptions}
        >
          <CertificateItem src="/src/assets/img/cert-1.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-2.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-3.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-4.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-1.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-2.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-3.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-4.png" alt="" />
        </Slider>
        <div className="partners__list">
          <LogoItem src="/src/assets/img/Group 1.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-1.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-2.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-3.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-4.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-5.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-6.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-7.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-8.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-1.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-2.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-3.png" alt="" />
          <LogoItem src="/src/assets/img/Group 1-4.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
