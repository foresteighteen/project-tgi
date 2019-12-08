import React from 'react';

import PhotoVideoBlock from '../../components/PhotoVideoBlock';

const ProductInfoSection = ({ data }) => {
  return (
    <section id="product-info-section">
      <div className="container">
        <PhotoVideoBlock data={data} />
        {data.big_text_active &&
          data.big_text_info.length &&
          data.big_text_info.map((e, i) => (
            <div className="additional-info-block" key={i}>
              <div className="additional-info-block__title">
                <h3>{e.title}</h3>
              </div>
              <div className="additional-info-block__img">
                {e.img && <img src={e.img} alt={e.title} />}
              </div>
              <div
                className="additional-info-block__text"
                dangerouslySetInnerHTML={{ __html: e.tekst }}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProductInfoSection;
