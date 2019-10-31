import React from 'react';
import Slider from 'react-slick';
import uniqid from 'uniqid';
import VideoBg from './VideoBg';
import { ArrowBtn } from '../../../components';

import './HeroSection.sass';

class HeroSection extends React.Component {
  state = {
    sliderRef: null,
  };
  componentDidMount() {
    this.setupRefs();
  }
  setupRefs = () => {
    this.setState({
      sliderRef: this.sliderRef,
    });
  };
  render() {
    const { slider, title, subtitle, bgVideo } = this.props.data;

    const sliderOptions = {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      swipe: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    if (!this.props.data) return null;
    return (
      <section className="hero">
        <VideoBg src={bgVideo} />
        <div className="container">
          <div className="hero__section__inner">
            <div className="row hero__info">
              <div className="col-12 col-lg-8">
                <h2 className="hero__title">{title}</h2>
              </div>
              <div className="col col-lg-10 col-xl-7">
                <p className="hero__subtitle">{subtitle}</p>
              </div>
            </div>
            <div className="hero__slider-arrows">
              <ArrowBtn
                left
                click={() => {
                  this.state.sliderRef.slickPrev();
                }}
              />
              <ArrowBtn
                right
                click={() => {
                  this.state.sliderRef.slickNext();
                }}
              />
            </div>
            <Slider
              ref={slider => (this.sliderRef = slider)}
              className="hero__slider"
              {...sliderOptions}
            >
              {slider.map(({ slide }) => (
                <div className="hero__slide" key={uniqid()}>
                  <div className="hero__slide__icon">
                    <img src={slide.icon.url} alt={slide.icon.alt} />
                  </div>
                  <div className="hero__slide-info">
                    <p className="hero__slide-title">{slide.title}</p>
                    <p className="hero__slide-quantity">
                      <span>{slide.number}</span> {slide.units}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
