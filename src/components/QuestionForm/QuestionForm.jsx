import React from 'react';

import { ButtonM } from '../Buttons';
import { ModalContext } from '../../containers/ContactsModal/ModalProvider';
import { GlobalOptsContext } from '../../containers/GlobalOptsProvider';

import './QuestionForm.sass';

const QuestionForm = () => {
  const { openModal } = React.useContext(ModalContext);
  const { contact_us } = React.useContext(GlobalOptsContext);
  const { title, subtitle, btn_text } = contact_us;

  return (
    <div className="container">
      <div className="question-form">
        <div className="question-form__info">
          <h3 className="question-form__title">{title}</h3>
          <p className="question-form__text">{subtitle}</p>
        </div>
        <div className="question-form__btn">
          <ButtonM text={btn_text} clickF={openModal} />
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
