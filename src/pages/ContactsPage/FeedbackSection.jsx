import React from 'react';

const FeedbackSection = () => (
  <div className="row">
    <div className="contacts__form col-md-10 mx-auto">
      <h2 className="contacts__form-title">Напишите Нам</h2>
      <form>
        <div className="contacts__form-row">
          <label htmlFor="department" className="contacts__form-label">
            Выберите отдел
          </label>
          <select
            name="department"
            id="department"
            className="contacts__form-input"
          >
            <option value="Отдел продаж" className="contacts__form-option">
              Отдел продаж
            </option>
          </select>
        </div>
        <div className="contacts__form-row">
          <label htmlFor="name" className="contacts__form-label">
            Как вас зовут
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="contacts__form-input"
            placeholder="Василий Петрушкин"
          />
        </div>
        <div className="contacts__form-row">
          <label htmlFor="tel" className="contacts__form-label">
            Телефон
          </label>
          <input
            type="text"
            name="tel"
            id="tel"
            className="contacts__form-input"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <div className="contacts__form-row">
          <label htmlFor="email" className="contacts__form-label">
            Электронная почта
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="contacts__form-input"
            placeholder="vasiliypetrushkin@gmail.com"
          />
        </div>
        <div className="contacts__form-row">
          <label htmlFor="comment" className="contacts__form-label">
            Комментарий
          </label>
          <textarea
            rows="6"
            type="text"
            name="comment"
            id="comment"
            className="contacts__form-input"
            placeholder="Ваше сообщение"
          />
        </div>
        <div className="contacts__form-row">
          <button type="submit" className="contacts__form-btn mx-auto">
            отправить
          </button>
        </div>
        <div className="contacts__form-row">
          <p className="contacts__form-btn-sub col-md-8">
            Нажимая на кнопку «Отправить», я даю свое согласие с политикой
            обработки персональных данных
          </p>
        </div>
      </form>
    </div>
  </div>
);

export default FeedbackSection;
