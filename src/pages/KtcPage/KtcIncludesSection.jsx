import React from 'react';
import uniqid from 'uniqid';
import KtcIncludesItem from './KtcIncludesItem';

import { H2 } from '../../components';

const KtcIncludesSection = ({ data }) => {
  const { title, complect } = data;
  return (
    <section id="ktc-includes-section">
      <div className="container">
        <div className="ktc-includes">
          <H2 text={title} classes="side font-nova" />
          {complect.map(item => (
            <KtcIncludesItem {...item} key={uniqid()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KtcIncludesSection;
