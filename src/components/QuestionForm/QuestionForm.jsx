import React from 'react';

import { ButtonM } from '../Buttons';

import './QuestionForm.sass';

const QuestionForm = () => {
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
          <ButtonM text={'Задать вопрос'} />
        </div>
      </div>
    </div>
  );
};

export default QuestionForm;
