import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';
import { ModalContext } from '../../../containers/ContactsModal/ModalProvider';
import { GlobalOptsContext } from '../../../containers/GlobalOptsProvider';

import './ProductHeroSection.sass';

const ProductHeroSection = ({ data }) => {
  const { title, bgImg, description } = data;
  const { openModal } = React.useContext(ModalContext);
  const { products } = React.useContext(GlobalOptsContext);
  return (
    <section id="product-hero">
      <Hero
        classes="hero__product"
        brdcrmb={{ path: 'catalog', title: '', id: 302 }}
      >
        <H1 text={title} />
        <HeroBg bgRightImg={bgImg} />
        <HeroText desc={description} />
        <ButtonM text={products.btn_text} classes="btn-r" clickF={openModal} />
      </Hero>
    </section>
  );
};

export default ProductHeroSection;
