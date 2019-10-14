import React from 'react';
import CertificateHeroSection from './CertificateHeroSection';
import GallerySection from './GallerySection';
import { QuestionForm } from '../../components';

import './CertificatesPage.sass';

const CertificatesPage = () => (
  <main className="main cert-page">
    <CertificateHeroSection />
    <GallerySection />
    <QuestionForm />
  </main>
);

export default CertificatesPage;
