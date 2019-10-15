import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';

import SliderArrows from '../SliderArrows';
import CertificateItem from './CertificateItem';
import LogoItem from './LogoItem';

import './PartnersSection.sass';

const PartnersSection = ({ data }) => {
  const { title, certificates, logotypes } = data;
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

  return (
    <section className="partners">
      {isOpenLight && (
        <Lightbox
          mainSrc={certificates[photoIndex].img.url}
          // nextSrc={images[(photoIndex + 1) % images.length]}
          // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => updateLight(false)}
          // onMovePrevRequest={() => updatePhotoIndex((photoIndex + images.length - 1) % images.length)}
          // onMoveNextRequest={() => updatePhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
      <div className="container left-offset">
        <div className="partners__header">
          <h2 className="partners__title">{title}</h2>
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
          {certificates.map(({ img }, i) => (
            <CertificateItem
              src={img.url}
              alt={img.alt}
              key={i}
              click={openLight}
              index={i}
            />
          ))}
        </Slider>
        <div className="partners__list">
          {logotypes.map(({ img }) => (
            <LogoItem key={img.id} src={img.url} alt={img.alt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
