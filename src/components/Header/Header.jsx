import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import { LangContext } from '../../containers/LangProvider';
import { HeaderContext } from '../../containers/HeaderProvider';
import { getMenu, getFullMenu } from '../../api';
import MobileMenu from './MobileMenu';
import DropdownMenu from './DropdownMenu';

import Burger from './Burger';

import './Header.sass';

const testStringByWord = (word, str) =>
  new RegExp(`\\b(${word})\\b`, 'gi').test(str);

const Header = ({ history }) => {
  const { state, dispatch } = React.useContext(LangContext);
  const { theme } = React.useContext(HeaderContext);
  const [menu, setMenu] = React.useState([]);
  const [productsMenu, setProductsMenu] = React.useState([]);
  const [menuLoaded, setMenuLoaded] = React.useState(false);
  const [menuOpen, setMenuMobile] = useState(false);

  React.useEffect(() => {
    const fetchMenu = async () => {
      const [menuResp, productsResp] = await getFullMenu(state.lang);

      if (menuResp.success) {
        setMenu(menuResp.data.items);
        setMenuLoaded(true);
      }

      if (productsResp.success) {
        setProductsMenu(productsResp.data);
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
    <React.Fragment>
      <animated.header
        style={fade}
        className={`header ${theme === 'light' ? 'white-header' : ''}${
          fillHeader ? ' header-filled' : ''
        }${menuOpen ? ' opened-menu' : ''}`}
      >
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
                        <li
                          key={ID}
                          className={
                            testStringByWord('catalog', url)
                              ? 'header__nav--dropdown'
                              : ''
                          }
                        >
                          <Link
                            to={`/${url
                              .split('/')
                              .slice(3)
                              .join('/')}`}
                          >
                            {title}
                          </Link>
                          {testStringByWord('catalog', url) ? (
                            <DropdownMenu
                              items={productsMenu}
                              lang={state.lang}
                            />
                          ) : null}
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
              <a href="tel:+8 800 777 10 91" className="roboto-m">
                8 800 777 10 91
              </a>
            </div>
            <div className="col-auto header__lang">
              <div className="header__lang-cur">
                <svg width="20" height="26">
                  <use
                    xlinkHref={`/src/assets/img/sprite.svg#lang-${state.lang}`}
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
                        xlinkHref="/src/assets/img/sprite.svg#lang-en"
                        className="lang-svg"
                      />
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-auto burger-wrap">
              <Burger toggleMenu={setMenuMobile} isOpen={menuOpen} />
            </div>
          </div>
        </div>
      </animated.header>
      <MobileMenu isOpen={menuOpen}>
        {menuLoaded
          ? menu.map(({ title, url, ID }) => (
              <li
                key={ID}
                onClick={() => {
                  setMenuMobile(false);
                  console.log(setMenuMobile);
                }}
              >
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
      </MobileMenu>
    </React.Fragment>
  );
};

export default withRouter(Header);
