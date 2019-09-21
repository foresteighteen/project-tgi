import React from 'react';
import HeroSection from './HeroSection';
import GallerySection from './GallerySection';

import './CertificatesPage.sass';

const CertificatesPage = () => (
  <div className="cert container">
    <HeroSection />
    <GallerySection />
  </div>
);

export default CertificatesPage;
