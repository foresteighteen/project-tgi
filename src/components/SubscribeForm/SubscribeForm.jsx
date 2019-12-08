import React, { useContext, useState } from 'react';

import { sendSubscribe } from '../../api';
import SuccessCheck from '../SuccessCheck';

import './SubscribeForm.sass';
import { GlobalOptsContext } from '../../containers/GlobalOptsProvider';
const SubscribeForm = () => {
  const { subscribe } = useContext(GlobalOptsContext);
  const { title, subtitle, subscribe_link, subscribe_message, btn_text } = subscribe;
  const [emailValue, changeEmailValue] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = event => {
    changeEmailValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    sendSubscribe(`${subscribe_link}${emailValue}`);
    setShowSuccess(true);
  };

  return (
    <div className="subscribe-form">
      {showSuccess && (
        <div className="form__overlay">
          <div className="form__overlay__inner">
            <SuccessCheck />
            <div className="confirm_message">
              {subscribe_message}
            </div>
          </div>
        </div>
      )}
      <div className="subscribe-form__info">
        <h3 className="subscribe-form__title">{title}</h3>
        <p className="subscribe-form__text">{subtitle}</p>
      </div>
      <form className="subscribe-form__form" onSubmit={handleSubmit}>
        <input type="email" className="subscribe-form__input" onChange={handleChange} required />
        <div className="subscribe-form__btn">
          <button type="submit" className="btn-main padding-s btn-r">
            <span className="btn-text">{btn_text}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
