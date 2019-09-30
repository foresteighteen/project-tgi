import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="row">
            <div className="col-auto">
              <div className="footer__copy"></div>
              <div className="row">
                <div className="col-auto"><a href=""></a></div>
                <div className="col-auto"><a href=""></a></div>
                <div className="col-auto"><a href=""></a></div>
              </div>
            </div>
            <div className="col-auto">
              <div className="row">
                <div className="col-auto">
                  <h5 className="footer__subtitle"></h5>
                  <a href=""><FontAwesomeIcon icon={['fab', 'telegram-plane']} /></a>
                </div>
                <div className="col-auto">
                  <h5 className="footer__subtitle"></h5>
                  <a href=""><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                </div>
                <div className="col-auto">
                  <h5 className="footer__subtitle"></h5>
                  <a href=""><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

