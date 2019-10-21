import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, withRouter } from 'react-router-dom';
import { LangContext } from '../../containers/LangProvider';

import Burger from './Burger';

import './Header.sass';

const Header = ({ history }) => {
  const { state, dispatch } = React.useContext(LangContext);
  const currentUrl = history.location.pathname
    .split('/')
    .slice(2)
    .join('/');
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
                  <Link to={`/${state.lang}/about`}>О компании</Link>
                </li>
                <li>
                  <Link to={`/${state.lang}/catalog`}>Продукция</Link>
                </li>
                <li>
                  <Link to={`/${state.lang}/certificates`}>Сертификаты</Link>
                </li>
                <li>
                  <Link to={`/${state.lang}/vacancy`}>Вакансии</Link>
                </li>
                <li>
                  <Link to={`/${state.lang}/news`}>Новости</Link>
                </li>
                <li>
                  <Link to={`/${state.lang}/contacts`}>Контакты</Link>
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
                <Link
                  to="#"
                  onClick={() => {
                    dispatch({ type: 'changeLang', lang: 'ru' });
                    history.replace(`/ru/${currentUrl}`);
                  }}
                >
                  <svg width="20" height="26">
                    <use
                      xlinkHref="/src/assets/img/sprite.svg#lang-ru"
                      className="lang-svg"
                    />
                  </svg>
                </Link>
                <Link
                  to="#"
                  onClick={() => {
                    dispatch({ type: 'changeLang', lang: 'en' });
                    history.replace(`/en/${currentUrl}`);
                  }}
                >
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

export default withRouter(Header);
