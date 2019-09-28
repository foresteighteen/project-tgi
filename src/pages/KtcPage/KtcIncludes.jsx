import React from 'react';
import KtcIncludesItem from './KtcIncludesItem';

const KtcIncludes = () => {
  return (
    <div className="container">
      <section className="ktc-includes">
        <h2>Состав комплекта</h2>
        {[1, 2, 3, 4].map(e => (
          <KtcIncludesItem img={e} />
        ))}
      </section>
    </div>
  );
};

export default KtcIncludes;
