import React from 'react';

import AboutInfoSection from './AboutInfoSection';
import AboutSliderSection from './AboutSliderSection';

import { QuestionForm } from '../../components';

import './AboutPage.sass';

const AboutPage = () => {
  return (
    <main className="main about-page">
      <AboutInfoSection />
      <AboutSliderSection />
      <QuestionForm />
    </main>
  );
};

export default AboutPage;
