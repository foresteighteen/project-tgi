import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LangContext } from '../../containers/LangProvider';
import { GlobalOptsContext } from '../../containers/GlobalOptsProvider';


import './Footer.sass';

const Footer = () => {
  const { footer } = useContext(GlobalOptsContext);

  const { state } = useContext(LangContext);
  const { copyrights, menu, menu_pdf, address, socials } = footer;
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer">
          <div className="footer__copy">
            <p>{copyrights}</p>
            <div className="footer__copy__map">
              {menu.length && menu.map(({ item }, i) => (
                <Link to={`/${state.lang}/${item.link}`} key={i}>{item.title}</Link>
              ))}
              {menu_pdf.length && menu_pdf.map(({ item }, i) => (
                <a href={item.link} target="_blank" rel="noopener noreferrer" key={i}>{item.title}</a>
              ))}
            </div>
          </div>
          <div className="footer__contacts">
            {address.map(({ item }, i) => (
              <div className="footer__contacts__item" key={i}>
                <h5 className="footer__subtitle">{item.title}</h5>
                <a href={item.link}>{item.subtitle}</a>
              </div>
            ))}
          </div>
          <div className="footer__social">
            <div className="footer__social__icons">
              {socials.map(({ item }, i) => (
                <a href={item.link} className="footer__social__icon"  key={i}>
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
      </div>
    </footer>
  );
};

export default Footer;
