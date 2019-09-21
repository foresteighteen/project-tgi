import React from 'react';

const ListSection = () => (
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
);

export default ListSection;
