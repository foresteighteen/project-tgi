import React from 'react';

import KtcInfoSection from './KtcInfoSection';
import KtcIncludesSection from './KtcIncludesSection';
import KtcSliderSection from './KtcSliderSection';
import { QuestionForm } from '../../components';

import './KtcPage.sass';

const KtcPage = () => {
  return (
    <main className="main ktc-page">
      <KtcInfoSection />
      <KtcIncludesSection />
      <KtcSliderSection />
      <QuestionForm />
    </main>
  );
};

export default KtcPage;
