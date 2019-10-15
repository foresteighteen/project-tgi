import React from 'react';
import Slider from 'react-slick';

import { ArrowBtn } from '../../../components';

import './HeroSection.sass';

class HeroSection extends React.Component {
  state = {
    sliderRef: null,
    bgSliderRef: null,
  };
  componentDidMount() {
    this.setupRefs();
  }
  setupRefs = () => {
    this.setState({
      sliderRef: this.sliderRef,
      sliderInfoRef: this.sliderInfoRef,
      bgSliderRef: this.bgSliderRef,
    });
  };
  render() {
    const { slider } = this.props;

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
    const bgSliderOptions = {
      arrows: false,
      fade: true,
      swipe: false,
    };
    const infoSliderOptions = {
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      adaptiveHeight: true,
      swipe: false,
    };
    return (
      <section className="hero">
        <Slider
          ref={slider => (this.bgSliderRef = slider)}
          // asNavFor={this.state.sliderRef}
          className="hero__bg-slider"
          {...bgSliderOptions}
          asNavFor={this.state.sliderInfoRef}
        >
          {slider.map(slide => (
            <div className="hero__bg-slide-wrapper">
              <div
                className="hero__bg-slide"
                style={{
                  backgroundImage: `url(${slide.bgImg.url})`,
                }}
              >
              </div>
            </div>
          ))}
        </Slider>
        <div className="container">
          <div className="hero__section__inner">
            <Slider
              ref={slider => (this.sliderInfoRef = slider)}
              className="hero__info-slider"
              {...infoSliderOptions}
              asNavFor={this.state.sliderRef}
            >
              {slider.map(slide => (
                <div className="hero__info-slide">
                  <div className="row">
                    <div className="col col-lg-8">
                      <h2 className="hero__title">{slide.title}</h2>
                    </div>
                    <div className="col col-lg-10 col-xl-7">
                      <p className="hero__subtitle">{slide.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="hero__slider-arrows">
              <ArrowBtn
                left
                click={() => {
                  this.state.bgSliderRef.slickPrev();
                }}
              />
              <ArrowBtn
                right
                click={() => {
                  this.state.bgSliderRef.slickNext();
                }}
              />
              {/* <ArrowBtn right /> */}
              {/* <button
                onClick={() => {
                  this.state.bgSliderRef.slickPrev();
                }}
                type="button"
                className="hero__slider-arrow"
              >
                {'<'}
              </button>
              <button
                onClick={() => {
                  this.state.bgSliderRef.slickNext();
                }}
                type="button"
                className="hero__slider-arrow"
              >
                {'>'}
              </button> */}
            </div>
            <Slider
              ref={slider => (this.sliderRef = slider)}
              asNavFor={this.state.bgSliderRef}
              className="hero__slider"
              {...sliderOptions}
            >
              {slider.map(({ bottomSlide }) => (
                <div className="hero__slide">
                  <div className="hero__slide__icon">
                    <img
                      src={bottomSlide.icon.url}
                      alt={bottomSlide.icon.alt}
                    />
                  </div>
                  <div className="hero__slide-info">
                    <p className="hero__slide-title">{bottomSlide.title}</p>
                    <p className="hero__slide-quantity">
                      <span>{bottomSlide.number}</span> {bottomSlide.units}
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
