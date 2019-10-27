import React from 'react';
import { prop, indexBy } from 'ramda';
import {
  RevealByWord,
  RevealByLine,
  RevealBlock,
} from '../../../containers/Animations';
import Map from './Map';

import './DeliverySection.sass';

const DeliverySection = ({ data }) => {
  const { title, description, map, water_text, oil_text } = data;
  const activeData = indexBy(prop('active'), map);
  return (
    <section className="delivery">
      <div className="container left-offset">
        <RevealByWord>
          <h2 className="delivery__title">{title}</h2>
        </RevealByWord>
        <RevealByLine>
          <p className="delivery__subtitle">
            {description}
          </p>
        </RevealByLine>
        <RevealBlock>
          <Map activeData={activeData} texts={{water_text, oil_text}} />
        </RevealBlock>
      </div>
    </section>
  );
};

export default DeliverySection;
