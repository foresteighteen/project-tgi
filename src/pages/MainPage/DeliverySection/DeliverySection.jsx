import React from 'react';
import { pluck, prop, indexBy } from 'ramda';
import Map from './Map';

import './DeliverySection.sass';

const DeliverySection = ({ data }) => {
  const { title, description, map } = data;
  const activeData = indexBy(prop('active'), map);
  return (
    <section className="delivery">
      <div className="container left-offset">
        <h2 className="delivery__title">{title}</h2>
        <p className="delivery__subtitle">{description}</p>
        <Map activeData={activeData} />
      </div>
    </section>
  );
};

export default DeliverySection;
