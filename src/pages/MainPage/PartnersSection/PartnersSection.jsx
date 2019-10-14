import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

import SliderArrows from '../SliderArrows';
import CertificateItem from './CertificateItem';
import LogoItem from './LogoItem';

import './PartnersSection.sass';

const PartnersSection = () => {
  const sliderRef = React.useRef(null);

  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isOpenLight, updateLight] = useState(false);

  const openLight = index => {
    updatePhotoIndex(index);
    updateLight(true);
  };

  const sliderOptions = {
    arrows: false,
    slidesToShow: 4,
    swipe: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
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

  const images = [
    '/src/assets/img/cert-1.png',
    '/src/assets/img/cert-2.png',
    '/src/assets/img/cert-3.png',
    '/src/assets/img/cert-4.png',
    '/src/assets/img/cert-1.png',
    '/src/assets/img/cert-2.png',
    '/src/assets/img/cert-3.png',
    '/src/assets/img/cert-4.png',
  ];

  return (
    <section className="partners">
      {isOpenLight && (
        <Lightbox
          mainSrc={images[photoIndex]}
          // nextSrc={images[(photoIndex + 1) % images.length]}
          // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => updateLight(false)}
          // onMovePrevRequest={() => updatePhotoIndex((photoIndex + images.length - 1) % images.length)}
          // onMoveNextRequest={() => updatePhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
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
          {images.map((img, i) => (
            <CertificateItem src={img} alt="" key={i} click={openLight} index={i} />
          ))}
          {/* <CertificateItem src="/src/assets/img/cert-1.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-2.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-3.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-4.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-1.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-2.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-3.png" alt="" />
          <CertificateItem src="/src/assets/img/cert-4.png" alt="" /> */}
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
    </section>
  );
};

export default PartnersSection;
