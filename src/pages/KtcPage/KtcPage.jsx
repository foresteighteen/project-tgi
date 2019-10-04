import React from 'react';

import KtcInfoSection from './KtcInfoSection';
import KtcIncludesSection from './KtcIncludesSection';
import KtcSliderSection from './KtcSliderSection';
import KtcHeroSection from './KtcHeroSection';
import { QuestionForm } from '../../components';

import './KtcPage.sass';

const KtcPage = () => {
  return (
    <main className="main ktc-page">
      <KtcHeroSection />
      <KtcInfoSection />
      <KtcIncludesSection />
      <KtcSliderSection />
      <QuestionForm />
    </main>
  );
};

export default KtcPage;
