import React from 'react';
import uniqid from 'uniqid';
import ProductIncludesItem from './ProductIncludesItem';

import { H2 } from '../../components';

const ProductIncludesSection = ({ data }) => {
  const { title, complect, active } = data;
  if (!active) return null;
  return (
    <section id="product-includes-section">
      <div className="container">
        <div className="product-includes">
          <H2 text={title} classes="side font-nova" />
          {complect.map(item => (
            <ProductIncludesItem {...item} key={uniqid()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductIncludesSection;
