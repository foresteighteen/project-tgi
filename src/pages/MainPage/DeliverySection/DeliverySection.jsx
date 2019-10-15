import React from 'react';

import Map from './Map';

import './DeliverySection.sass';

const DeliverySection = ({ data }) => {
  const { title, description } = data;
  return (
    <section className="delivery">
      <div className="container left-offset">
        <h2 className="delivery__title">{title}</h2>
        <p className="delivery__subtitle">{description}</p>
        <Map />
      </div>
    </section>
  );
};

export default DeliverySection;
