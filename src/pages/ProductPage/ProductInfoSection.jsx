import React from 'react';

import PhotoVideoBlock from '../../components/PhotoVideoBlock';

const ProductInfoSection = ({ data }) => {
  console.log(data);
  return (
    <section id="product-info-section">
      <div className="container">
        <PhotoVideoBlock data={data} />
        {data.big_text_active && data.big_text_info && (
          <div
            className="additional-info"
            dangerouslySetInnerHTML={{ __html: data.big_text_info }}
          />
        )}
      </div>
    </section>
  );
};

export default ProductInfoSection;
