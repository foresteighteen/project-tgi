import React from 'react';
import Slider from 'react-slick';

import { ArrowBtn } from '../../../components';

import Section from '../Section';

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
      sliderInfoRef: this.sliderInfoRef,
      bgSliderRef: this.bgSliderRef,
    });
  };

  render() {
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
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                backgroundImage: 'url(/src/assets/img/mp-hero-bg.png)'
              }}
            ></div>
          </div>
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                backgroundImage: 'url(/src/assets/img/mp-hero-bg.png)'
              }}
            ></div>
          </div>
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                backgroundImage: 'url(/src/assets/img/mp-hero-bg.png)'
              }}
            ></div>
          </div>
          <div className="hero__bg-slide-wrapper">
            <div
              className="hero__bg-slide"
              style={{
                backgroundImage: 'url(/src/assets/img/mp-hero-bg.png)',
              }}
            ></div>
          </div>
        </Slider>
        <div className="container">
          <div className="hero__section__inner">
            <Slider
              ref={slider => (this.sliderInfoRef = slider)}
              className="hero__info-slider"
              {...infoSliderOptions}
              asNavFor={this.state.sliderRef}
            >
              <div className="hero__info-slide">
                <div className="row">
                  <div className="col col-lg-8">
                    <h2 className="hero__title">завод теплогидроизоляции1</h2>
                  </div>
                  <div className="col col-lg-10 col-xl-7">
                    <p className="hero__subtitle">
                      Антикоррозионная и теплоизоляционная защита стыков
                      трубопроводов подземной и надземной прокладки на объектах
                      нефтегазовой промышленности и жилищно-коммунального
                      хозяйства.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero__info-slide">
                <div className="row">
                  <div className="col-lg-8">
                    <h2 className="hero__title">завод теплогидроизоляции2</h2>
                  </div>
                  <div className="col col-lg-10 col-xl-7">
                    <p className="hero__subtitle">
                      Антикоррозионная и теплоизоляционная защита стыков
                      трубопроводов подземной и надземной прокладки на объектах
                      нефтегазовой промышленности и жилищно-коммунального
                      хозяйства.
                    </p>
                    <p className="hero__subtitle">
                      Антикоррозионная и теплоизоляционная защита стыков
                      трубопроводов подземной и надземной прокладки на объектах
                      нефтегазовой промышленности и жилищно-коммунального
                      хозяйства.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero__info-slide">
                <div className="row">
                  <div className="col-lg-8">
                    <h2 className="hero__title">завод теплогидроизоляции3</h2>
                  </div>
                  <div className="col col-lg-10 col-xl-7">
                    <p className="hero__subtitle">
                      Антикоррозионная и теплоизоляционная защита стыков
                      трубопроводов подземной и надземной прокладки на
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero__info-slide">
                <div className="row">
                  <div className="col-lg-8">
                    <h2 className="hero__title">завод теплогидроизоляции4</h2>
                  </div>
                  <div className="col col-lg-10 col-xl-7">
                    <p className="hero__subtitle">
                      Антикоррозионная и теплоизоляционная защита стыков
                      трубопроводов подземной и надземной прокладки на объектах
                      нефтегазовой промышленности и жилищно-коммунального
                      хозяйства.
                    </p>
                  </div>
                </div>
              </div>
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
              <div className="hero__slide">
                <div className="hero__slide__icon">
                  <img src="/src/assets/img/oil.svg" alt="" />
                </div>
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для нефтегазовой отрасли
                  </p>
                  <p className="hero__slide-quantity">
                    <span>480 000</span> комплектов
                  </p>
                </div>
              </div>
              <div className="hero__slide">
                <div className="hero__slide__icon">
                  <img src="/src/assets/img/pipe.svg" alt="" />
                </div>
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для отрасли ЖКХ
                  </p>
                  <p className="hero__slide-quantity">
                    <span>100 000</span> пог.м.
                  </p>
                </div>
              </div>
              <div className="hero__slide">
                <div className="hero__slide__icon">
                  <img src="/src/assets/img/oil.svg" alt="" />
                </div>
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для нефтегазовой отрасли
                  </p>
                  <p className="hero__slide-quantity">
                    <span>480 000</span> комплектов
                  </p>
                </div>
              </div>
              <div className="hero__slide">
                <div className="hero__slide__icon">
                  <img src="/src/assets/img/pipe.svg" alt="" />
                </div>
                <div className="hero__slide-info">
                  <p className="hero__slide-title">
                    Реализовано для отрасли ЖКХ
                  </p>
                  <p className="hero__slide-quantity">
                    <span>100 000</span> пог.м.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
