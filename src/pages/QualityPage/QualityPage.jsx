import React from 'react';

import QualityInfoSection from './QualityInfoSection';
import QualitySliderSection from './QualitySliderSection';

import { QuestionForm } from '../../components';

import './QualityPage.sass';

const QualityPage = () => {
  return (
    <main className="main quality-page">
      <QualityInfoSection />
      <QualitySliderSection />
      <QuestionForm />
    </main>
  );
};

export default QualityPage;
