import React from 'react';

import PhotoVideoBlock from '../../components/PhotoVideoBlock';

const ProductInfoSection = ({ data }) => {
  return (
    <section id="product-info-section">
      <div className="container">
        <PhotoVideoBlock data={data} />
      </div>
    </section>
  );
};

export default ProductInfoSection;
