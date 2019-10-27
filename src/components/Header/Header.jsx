import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import { LangContext } from '../../containers/LangProvider';
import { getMenu } from '../../api';

import Burger from './Burger';

import './Header.sass';

const Header = ({ history }) => {
  const { state, dispatch } = React.useContext(LangContext);
  const [menu, setMenu] = React.useState([]);
  const [menuLoaded, setMenuLoaded] = React.useState(false);

  React.useEffect(() => {
    const fetchMenu = async () => {
      const response = await getMenu(state.lang);
      if (response.success) {
        setMenu(response.data.items);
        setMenuLoaded(true);
      }
    };
    fetchMenu();
  }, [state.lang]);

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
  const [fillHeader, setfillHeader] = useState(false);
  const handleScroll = debounce(50, () => {
      setfillHeader(window['page-wrap'].scrollTop >= 93);
    });

  useEffect(() => {
    window['page-wrap'].addEventListener('scroll', handleScroll);

    // return () => {
    //   window['page-wrap'].removeEventListener('scroll', () => handleScroll);
    // };
  }, []);
  return (
    <animated.header style={fade} className={`header white-header${fillHeader ? ' header-filled' : ''}`} >
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
                {menuLoaded
                  ? menu.map(({ title, url, ID }) => (
                      <li key={ID}>
                        <Link
                          to={`/${url
                            .split('/')
                            .slice(3)
                            .join('/')}`}
                        >
                          {title}
                        </Link>
                      </li>
                    ))
                  : null}
                {/* <li>
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
                </li> */}
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
              </li>
              <li>
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
          <div className="col-auto burger-wrap">
            <Burger />
          </div>
        </div>
      </div>
    </animated.header>
  );
};

export default withRouter(Header);
