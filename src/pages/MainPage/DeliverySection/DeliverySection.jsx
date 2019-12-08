import React, { useContext } from 'react';
import { prop, indexBy } from 'ramda';
import { LangContext } from '../../../containers/LangProvider';
import { RevealByWord, RevealBlock } from '../../../containers/Animations';
import Map from './Map';
import { isIE } from '../../../utils/isIE';

import './DeliverySection.sass';

const DeliverySection = ({ data }) => {
  const { title, description, map, water_text, oil_text } = data;
  const {
    state: { lang },
  } = useContext(LangContext);
  const activeData = indexBy(prop('active'), map);
  return (
    <section className="delivery">
      <div className="container left-offset">
        <RevealByWord>
          <h2 className="delivery__title">{title}</h2>
        </RevealByWord>
        <RevealBlock>
          <p className="delivery__subtitle">{description}</p>
        </RevealBlock>
        {isIE ? (
          <Map
            activeData={activeData}
            texts={{ water_text, oil_text }}
            lang={lang}
          />
        ) : (
          <RevealBlock>
            <Map
              activeData={activeData}
              texts={{ water_text, oil_text }}
              lang={lang}
            />
          </RevealBlock>
        )}
      </div>
    </section>
  );
};

export default DeliverySection;
