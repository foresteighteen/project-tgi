import React from 'react';

import { ButtonM } from '../Buttons';

import './SubscribeForm.sass';

const SubscribeForm = () => {
  return (
      <div className="subscribe-form">
        <div className="subscribe-form__info">
          <h3 className="subscribe-form__title">Подпишитесь на рассылку</h3>
          <p className="subscribe-form__text">
          и первыми узнавайте об акциях и новостях
          </p>
        </div>
        <form action="" className="subscribe-form__form">
        <input type="text" className="subscribe-form__input" />
        <div className="subscribe-form__btn">
          <ButtonM text={'Подписаться на рассылку'} classes={'padding-s'}/>
        </div>
        </form>
      </div>
  );
};

export default SubscribeForm;
