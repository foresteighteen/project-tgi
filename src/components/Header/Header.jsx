import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

import Burger from './Burger';

import './Header.sass';

const Header = () => {

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    opacity: 1,
  });

  return (
    <animated.header style={fade} className="header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-auto col-xl-2 header__logo">
            <Link to="/">
              <svg className="svg-logo">
                <use
                  xlinkHref="/src/assets/img/sprite.svg#logo"
                  className="header-logo-icon"
                />
              </svg>
            </Link>
          </div>
          <div className="mr-auto col-auto nav__menu">
            <nav className="header__nav">
              <ul>
                <li>
                  <Link to="/about">О компании</Link>
                </li>
                <li>
                  <Link to="/catalog">Продукция</Link>
                </li>
                <li>
                  <Link to="/certificates">Сертификаты</Link>
                </li>
                <li>
                  <Link to="/vacancy">Вакансии</Link>
                </li>
                <li>
                  <Link to="/news">Новости</Link>
                </li>
                <li>
                  <Link to="/contacts">Контакты</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-auto">
            <a href="tel()" className="roboto-m">
              8 800 777 10 91
            </a>
          </div>
          <div className="col-auto header__lang">
            <div className="header__lang-cur">
              <svg width="20" height="26">
                <use
                  xlinkHref="/src/assets/img/sprite.svg#lang-ru"
                  className="lang-svg"
                />
              </svg>
            </div>
            <ul className="lang-list">
              <li>
                <Link to="/">
                  <svg width="20" height="26">
                    <use
                      xlinkHref="/src/assets/img/sprite.svg#lang-ru"
                      className="lang-svg"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-auto">
            <Burger />
          </div>
        </div>
      </div>
    </animated.header>
  );
};

export default Header;
