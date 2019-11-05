import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LangContext } from '../../containers/LangProvider';

import withPageData from '../../containers/withPageData';

import './Footer.sass';

const WP_PAGE_ID = 537;

const Footer = ({ pageData, pageLoaded }) => {
  const { state } = React.useContext(LangContext);
  const { copyrights, menu, address, socials } = pageLoaded && pageData.acf;
  return (
    <footer className="footer-wrap">
      <div className="container">
        {pageLoaded ? (
          <div className="footer">
            <div className="footer__copy">
              <p>{copyrights}</p>
              <div className="footer__copy__map">
                {menu.map(({ item }) => (
                  <Link to={`/${state.lang}/${item.link}`}>{item.title}</Link>
                ))}
              </div>
            </div>
            <div className="footer__contacts">
              {address.map(({ item }) => (
                <div className="footer__contacts__item">
                  <h5 className="footer__subtitle">{item.title}</h5>
                  <a href="#">{item.subtitle}</a>
                </div>
              ))}
            </div>
            <div className="footer__social">
              <div className="footer__social__icons">
                {socials.map(({ item }) => (
                  <a href={item.link} className="footer__social__icon">
                    <FontAwesomeIcon icon={['fab', item.icon]} />
                  </a>
                ))}
              </div>
              <div className="footer__developer">
                <span>
                  Разработка сайта <a href="#">TheLegacy</a>
                </span>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </footer>
  );
};

export default withPageData(WP_PAGE_ID)(Footer);
