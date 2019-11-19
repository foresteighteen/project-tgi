import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link, withRouter } from 'react-router-dom';
import { debounce } from 'throttle-debounce';
import { LangContext } from '../../containers/LangProvider';
import { GlobalOptsContext } from '../../containers/GlobalOptsProvider';
import { HeaderContext } from '../../containers/HeaderProvider';
import { getFullMenu } from '../../api';
import MobileMenu from './MobileMenu';
import DropdownMenu from './DropdownMenu';

import Burger from './Burger';

import './Header.sass';

const Header = ({ history }) => {
  const { state, dispatch } = React.useContext(LangContext);
  const { theme } = React.useContext(HeaderContext);
  const { header: { phone } } = React.useContext(GlobalOptsContext);
  const [menu, setMenu] = React.useState([]);
  const [menuLoaded, setMenuLoaded] = React.useState(false);
  const [menuOpen, setMenuMobile] = useState(false);

  React.useEffect(() => {
    const fetchMenu = async () => {
      const [menuResp] = await getFullMenu(state.lang);
      if (menuResp.success) {
        setMenu(menuResp.data.items);
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
                    ? menu.map(item => (
                        <li
                          key={item.ID}
                          className={item.classes.join(' ')}
                        >
                          <Link
                            to={`/${item.url
                              .split('/')
                              .slice(3)
                              .join('/')}`}
                          >
                            {item.title}
                          </Link>
                          {item.child_items ? (
                            <DropdownMenu
                              items={item.child_items}
                              lang={state.lang}
                            />
                          ) : null}
                        </li>
                      ))
                    : null}
                </ul>
              </nav>
            </div>
            <div className="col-auto">
              <a href={`tel:+${phone.replace(/\D/gm, '')}`} className="roboto-m">
                {phone}
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
