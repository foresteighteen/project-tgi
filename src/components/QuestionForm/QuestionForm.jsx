import React from 'react';

import { ButtonM } from '../Buttons';
import { ModalContext } from '../../containers/ContactsModal/ModalProvider';

import './QuestionForm.sass';

const QuestionForm = () => {
  const { openModal } = React.useContext(ModalContext);
  return (
    <div className="container">
      <div className="question-form">
        <div className="question-form__info">
          <h3 className="question-form__title">Остались вопросы?</h3>
          <p className="question-form__text">
            Оставьте заявку и наш менеджер свяжется с вами в ближайшее время
          </p>
        </div>
        <div className="question-form__btn">
          <ButtonM text="Задать вопрос" clickF={openModal} />
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
