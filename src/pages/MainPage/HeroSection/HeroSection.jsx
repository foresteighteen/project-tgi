import React from 'react';
import Slider from 'react-slick';

import './HeroSection.sass';

class HeroSection extends React.Component {
  state = {
    sliderRef: null,
    bgSliderRef: null,
  };
  // const sliderRef = React.useRef(null);
  // const bgSliderRef = React.useRef(null);
  componentDidMount() {
    this.setupRefs();
  }
  setupRefs = () => {
    this.setState({
      sliderRef: this.sliderRef,
      bgSliderRef: this.bgSliderRef,
    });
  };

  render() {
    const sliderOptions = {
      arrows: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    const bgSliderOptions = {
      arrows: false,
      fade: true,
    };
    return (
      <div className="hero">
        <Slider
          ref={slider => (this.bgSliderRef = slider)}
          asNavFor={this.state.sliderRef}
          className="hero__bg-slider"
          {...bgSliderOptions}
        >
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                background: 'url(/src/assets/img/mp-hero-bg.png) no-repeat',
                backgroundSize: 'cover',
              }}
            >
            </div>
          </div>
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                background: 'url(/src/assets/img/mp-hero-bg.png) no-repeat',
                backgroundSize: 'cover',
              }}
            >
            </div>
          </div>
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                background: 'url(/src/assets/img/mp-hero-bg.png) no-repeat',
                backgroundSize: 'cover',
              }}
            >
            </div>
          </div>
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                background: 'url(/src/assets/img/mp-hero-bg.png) no-repeat',
                backgroundSize: 'cover',
              }}
            >
            </div>
          </div>
        </Slider>
        <div className="hero--dark"></div>
        <div className="d-flex flex-column hero__container container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="hero__title">завод теплогидроизоляции</h1>
            </div>
            <div className="col-lg-6">
              <p className="hero__subtitle">
                Антикоррозионная и теплоизоляционная защита стыков трубопроводов
                подземной и надземной прокладки на объектах нефтегазовой
                промышленности и жилищно-коммунального хозяйства.
              </p>
            </div>
          </div>
          <div className="hero__slider-arrows">
            <button
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
            </button>
          </div>
          <Slider
            ref={slider => (this.sliderRef = slider)}
            asNavFor={this.state.bgSliderRef}
            className="hero__slider"
            {...sliderOptions}
          >
            <div>
              <div className="hero__slide">
                <img
                  src="/src/assets/img/oil.svg"
                  alt=""
                  className="hero__icon"
                />
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для нефтегазовой отрасли
                  </p>
                  <p className="hero__slide-quantity">
                    <span>480 000</span> комплектов
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="hero__slide">
                <img
                  src="/src/assets/img/pipe.svg"
                  alt=""
                  className="hero__icon"
                />
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для отрасли ЖКХ
                  </p>
                  <p className="hero__slide-quantity">
                    <span>100 000</span> пог.м.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="hero__slide">
                <img
                  src="/src/assets/img/oil.svg"
                  alt=""
                  className="hero__icon"
                />
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для нефтегазовой отрасли
                  </p>
                  <p className="hero__slide-quantity">
                    <span>480 000</span> комплектов
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="hero__slide">
                <img
                  src="/src/assets/img/pipe.svg"
                  alt=""
                  className="hero__icon"
                />
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для отрасли ЖКХ
                  </p>
                  <p className="hero__slide-quantity">
                    <span>100 000</span> пог.м.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default HeroSection;
