import React from 'react';
import H1 from '../../components/H1';

const HeroSection = () => (
  <div className="contacts__hero row">
    <div className="col-md-2" style={{ marginTop: '30px' }}>
      BREADCRUMBS
    </div>
    <div className="col-md-10 col-xl-6">
      <H1 className="contacts__title">Контакты</H1>
      <p className="contacts__subtitle">
        Это специальный элемент веб-дизайна, представляющий собой блок с набором
        изображений и\или текстовой информации определенной ширины. Главная его
        фишка в изменяющихся в ручном или автоматическом режиме
      </p>
    </div>
  </div>
);

export default HeroSection;
