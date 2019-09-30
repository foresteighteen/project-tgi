import React from 'react';
import KtcIncludesItem from './KtcIncludesItem';

import { H2 } from '../../components';

const KtcIncludesSection = () => {
  return (
    <section id="ktc-includes-section">
      <div className="container">
        <div className="ktc-includes">
          <H2 text="Состав комплекта" classes="side font-nova" />
          {[1, 2, 3, 4].map(e => (
            <KtcIncludesItem img={e} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KtcIncludesSection;
