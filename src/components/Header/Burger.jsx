import React, { Component, createRef } from 'react';

import { TweenMax, Power3, Back } from 'gsap';

import './Burger.sass';

export default class Burger extends Component {
  state = {
    isActive: false,
  };

  DOM = {
    top: createRef(),
    middle: createRef(),
    bottom: createRef(),
  };

  SETTINGS = {
    duration: 0.7,
    animationBackFactor: 0.7,
  };

  TWEENS = {};

  componentDidMount() {
    this.setState({isActive: this.props.isOpen});
    this.TWEENS = {
      top: TweenMax.to(this.DOM.top.current, this.SETTINGS.duration, {
        scaleX: 1.2,
        y: 13,
        x: 1.5,
        rotation: -45,
        ease: Back.easeInOut.config(this.SETTINGS.animationBackFactor),
        paused: true,
      }),
      middle: TweenMax.fromTo(
        this.DOM.middle.current,
        this.SETTINGS.duration,
        {
          attr: {
            'stroke-dasharray': '0.609375 60.9375 19 182.8125',
            'stroke-dashoffset': 61.546875,
          },
          ease: Power3.easeInOut,
          paused: true,
        },
        {
          attr: {
            'stroke-dasharray': '0.609375 60.9375 115.78125 182.8125',
            'stroke-dashoffset': 20,
          },
          ease: Power3.easeInOut,
          paused: true,
        },
      ),
      bottom: TweenMax.to(this.DOM.bottom.current, this.SETTINGS.duration, {
        scaleX: 1.2,
        y: -13,
        x: 1.5,
        rotation: 45,
        ease: Back.easeInOut.config(this.SETTINGS.animationBackFactor),
        paused: true,
      }),
    };
  }

  onClickHandler = () => {
    if (this.state.isActive) {
      this.TWEENS.top.reverse();
      this.TWEENS.middle.reverse();
      this.TWEENS.bottom.reverse();
    } else {
      this.TWEENS.top.play();
      this.TWEENS.middle.play();
      this.TWEENS.bottom.play();
    }
    this.setState(prevState => ({ isActive: !prevState.isActive }));
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.props.isOpen !== this.state.isActive) {this.onClickHandler()};   
  };
  render() {
    return (
      <svg
        className="burger-menu"
        viewBox="0 0 39 39"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onClick={()=>{
          this.onClickHandler();
          this.props.toggleMenu(!this.state.isActive);
        }}
      >
        <path
          className="burger-menu__line-top"
          d="M10,14.5 29,14.5"
          stroke="currentColor"
          fill="none"
          ref={this.DOM.top}
        />
        <path
          className="burger-menu__line-middle"
          strokeMiterlimit="10"
          strokeDasharray="0.609375 60.9375 19 182.8125"
          strokeDashoffset="61.546875"
          d="M10,19.5
     h19.5
     c0,0,7.143703125-0.18646875,6.55078125-6.703125
     c-0.15234375-1.67578125-1.0018125-3.029203125-1.748296875-4.357640625
     C30.912375,4.314375,26.061140625,1.565484375,20.556046875,1.25165625
     C20.206265625,1.238859375,19.865015625,1.21875,19.5,1.21875
     C9.403875,1.21875,1.21875,9.403875,1.21875,19.5
     c0,10.09490625,8.185125,18.28125,18.28125,18.28125
     c10.09490625,0,18.28125-8.18634375,18.28125-18.28125
     C37.78125,9.4453125,29.5546875,1.21875,19.5,1.21875
     S1.142578125,9.4453125,1.142578125,19.5"
          stroke="currentColor"
          fill="none"
          ref={this.DOM.middle}
        />

        <path
          className="burger-menu__line-bottom"
          d="M10,24.5 29,24.5"
          stroke="currentColor"
          fill="none"
          ref={this.DOM.bottom}
        />
      </svg>
    );
  }
}
