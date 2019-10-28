import React from 'react';
import uniqid from 'uniqid';
import ProductIncludesItem from './ProductIncludesItem';
import RevealBlock from '../../containers/Animations/RevealBlock';

import { H2 } from '../../components';

const ProductIncludesSection = ({ data }) => {
  const { title, complect, active } = data;
  if (!active) return null;
  return (
    <section id="product-includes-section">
      <div className="container">
        <div className="product-includes">
          <RevealBlock>
            <H2 text={title} classes="side font-nova" />
          </RevealBlock>
          {complect.map((item, i) => (
            <ProductIncludesItem {...item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductIncludesSection;
