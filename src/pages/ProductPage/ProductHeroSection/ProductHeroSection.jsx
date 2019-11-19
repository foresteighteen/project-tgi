import React from 'react';
import { Hero, H1, HeroText, ButtonM, HeroBg } from '../../../components';
import { ModalContext } from '../../../containers/ContactsModal/ModalProvider';

import './ProductHeroSection.sass';

const ProductHeroSection = ({ data }) => {
  const { title, bgImg, description } = data;
  const { openModal } = React.useContext(ModalContext);
  return (
    <section id="product-hero">
      <Hero
        classes="hero__product"
        brdcrmb={{ path: 'catalog', title: '', id: 43 }}
      >
        <H1 text={title} />
        <HeroBg bgRightImg={bgImg} />
        <HeroText desc={description} />
        <ButtonM text="оформить заказ" classes="btn-r" clickF={openModal} />
      </Hero>
    </section>
  );
};

export default ProductHeroSection;
