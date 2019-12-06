import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import uniqid from 'uniqid';
import { animated, useTrail, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import SliderArrows from '../SliderArrows';
import CertificateItem from './CertificateItem';
import LogoItem from './LogoItem';
import { RevealByWord } from '../../../containers/Animations';
import './PartnersSection.sass';

const PartnersList = ({ items }) => {
  const [animate, play] = useState(false);
  const trail = useTrail(items.length, {
    opacity: animate ? 1 : 0,
    transform: animate ? 'scale(1)' : 'scale(0.3)',
  });
  return (
    <Waypoint
      onEnter={() => {
        play(true);
      }}
      onLeave={() => {
        play(false);
      }}
      bottomOffset="10%"
      scrollableAncestor={document.getElementById('#page-wrap')}
    >
      <div className="partners__list">
        {trail.map(({ ...animation }, index) => {
          return (
            <animated.div style={animation} key={index}>
              <LogoItem src={items[index].img.url} alt={items[index].img.alt} />
            </animated.div>
          );
        })}
      </div>
    </Waypoint>
  );
};

const PartnersSection = ({ data }) => {
  const { title, certificates, logotypes } = data;
  const sliderRef = React.useRef(null);
  const [animate, play] = useState(false);
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isOpenLight, updateLight] = useState(false);

  const openLight = index => {
    updatePhotoIndex(index);
    updateLight(true);
  };

  const revealSpring = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate ? 'matrix(1, 0, 0, 1, 0, 0)' : 'matrix(1, 0, 0, 1.4, 0, 280)',
    config: config.molasses,
  });
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
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="partners">
      {isOpenLight && (
        <Lightbox
          mainSrc={certificates[photoIndex].img.url}
          nextSrc={certificates[(photoIndex + 1) % certificates.length].img.url}
          prevSrc={
            certificates[
              (photoIndex + certificates.length - 1) % certificates.length
            ].img.url
          }
          onCloseRequest={() => updateLight(false)}
          onMovePrevRequest={() =>
            updatePhotoIndex(
              (photoIndex + certificates.length - 1) % certificates.length,
            )
          }
          onMoveNextRequest={() =>
            updatePhotoIndex((photoIndex + 1) % certificates.length)
          }
        />
      )}
      <Waypoint
        onEnter={() => play(true)}
        onLeave={() => play(false)}
        bottomOffset="30"
        scrollableAncestor={document.getElementById('#page-wrap')}
      >
        <div className="container left-offset">
          <div className="partners__header">
            <h2 className="partners__title">
              <RevealByWord>{title}</RevealByWord>
            </h2>
            <animated.div style={revealSpring}>
              <SliderArrows
                onClickPrev={() => {
                  sliderRef.current.slickPrev();
                }}
                onClickNext={() => {
                  sliderRef.current.slickNext();
                }}
              />
            </animated.div>
          </div>
          <animated.div style={revealSpring}>
            <Slider
              ref={sliderRef}
              className="partners__cert-list"
              {...sliderOptions}
            >
              {certificates.map(({ img }, i) => (
                <CertificateItem
                  src={img.url}
                  alt={img.alt}
                  key={uniqid()}
                  click={openLight}
                  index={i}
                />
              ))}
            </Slider>
          </animated.div>
          <PartnersList items={logotypes} />
        </div>
      </Waypoint>
    </section>
  );
};

export default PartnersSection;
