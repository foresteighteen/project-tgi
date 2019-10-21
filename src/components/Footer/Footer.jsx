import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.sass';

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer">
          <div className="footer__copy">
            <p>Все права защищены ©2019 - ООО «Завод ТеплоГидроИзоляции»</p>
            <div className="footer__copy__map">
              <Link href="#">Карта сайта</Link>
              <Link href="#">Пользовательское соглашение</Link>
              <Link href="#">Правовая информация</Link>
            </div>
          </div>
          <div className="footer__contacts">
            <div className="footer__contacts__item">
              <h5 className="footer__subtitle">Телефон</h5>
              <a href="#">+7 (495) 980-10-91</a>
            </div>
            <div className="footer__contacts__item">
              <h5 className="footer__subtitle">Фактический адрес</h5>
              <a href="#">127238 г.Москва, Дмитровское шоссе д.71Б</a>
            </div>
            <div className="footer__contacts__item">
              <h5 className="footer__subtitle">Почта</h5>
              <a href="#">info@z-tgi.ru</a>
            </div>
          </div>
          <div className="footer__social">
            <div className="footer__social__icons">
              <a href="#" className="footer__social__icon">
                <FontAwesomeIcon icon={['fab', 'telegram-plane']} />
              </a>
              <a href="#" className="footer__social__icon">
                <FontAwesomeIcon icon={['fab', 'facebook-f']} />
              </a>
              <a href="#" className="footer__social__icon">
                <FontAwesomeIcon icon={['fab', 'instagram']} />
              </a>
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
