import React from 'react';

import Map from './Map';

import './DeliverySection.sass';

const DeliverySection = () => (
  <section className="delivery">
    <div className="container left-offset">
      <h2 className="delivery__title">География поставок</h2>
      <p className="delivery__subtitle">
        Мы являемся одним из крупнейших поставщиков теплогидроизоляционных
        материалов. Завод “ТГИ” занимается поставкой производственных материалов
        по всей территории Российской Федерации, включая районы Севера, а также
        страны СНГ.
      </p>
      <Map />
    </div>
  </section>
);

export default DeliverySection;
