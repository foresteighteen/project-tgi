import React from 'react';
import H1 from '../../components/H1';
import './ContactsPage.sass';
const ContactsPage = () => (
  <div className="contacts container">
    <div className="row">
      <div className="col-md-2" style={{ marginTop: '30px' }}>
        BREADCRUMBS
      </div>
      <div className="contacts__hero col-md-10 col-xl-6">
        <H1 className="contacts__title">Контакты</H1>
        <p className="contacts__subtitle">
          Это специальный элемент веб-дизайна, представляющий собой блок с
          набором изображений и\или текстовой информации определенной ширины.
          Главная его фишка в изменяющихся в ручном или автоматическом режиме
        </p>
      </div>
    </div>
    <div className="contacts__list row">
      <div className="contacts__list-item col-md-6 col-lg-3">
        <p className="contacts__item-title">Офис</p>
        <p className="contacts__item-description">
          127238, Москва, Дмитровское шоссе, дом № 71Б БЦ {'"7ONE"'}, офис 728
        </p>
      </div>
      <div className="contacts__list-item col-md-6 col-lg-3">
        <p className="contacts__item-title">Производство</p>
        <p className="contacts__item-description">
          601021, Владимирская область, Киржачский р-н, д Федоровское, ул.
          Сельская, д.57
        </p>
      </div>
      <div className="contacts__list-item col-md-6 col-lg-2">
        <p className="contacts__item-title">Телефон</p>
        <p className="contacts__item-description">+7 (495) 980-10-91</p>
      </div>
      <div className="contacts__list-item col-md-6 col-lg-2">
        <p className="contacts__item-title">Почта</p>
        <p className="contacts__item-description">info@z-tgi.ru</p>
      </div>
      <div className="contacts__list-item col-md-12 col-lg-2">
        <p className="contacts__item-title">Часы работы</p>
        <p className="contacts__item-description">с 9-00 до 18-00</p>
      </div>
    </div>

    <img
      style={{ width: '100%' }}
      src="https://i.imgur.com/nuYbe9h.png"
      alt=""
    />

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
  </div>
);

export default ContactsPage;
