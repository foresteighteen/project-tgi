import React from 'react';
import { Hero, H1 } from '../../../components';

import './CertificateHeroSection.sass';

const CertificateHeroSection = () => {
  return (
    <section id="certificate-hero">
      <Hero classes="hero__certificate">
        <H1 text="Сертификаты" />
      </Hero>
    </section>
  );
};

export default CertificateHeroSection;
