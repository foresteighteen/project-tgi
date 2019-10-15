import React from 'react';

import withPageData from '../../containers/withPageData';

import AboutInfoSection from './AboutInfoSection';
import AboutSliderSection from './AboutSliderSection';
import AboutHeroSection from './AboutHeroSection';

import { QuestionForm } from '../../components';

import './AboutPage.sass';

const WP_PAGE_ID = 12;

const AboutPage = ({ pageData, pageLoaded }) => (
  <main className="main about-page">
    {pageLoaded ? (
      <React.Fragment>
        <AboutHeroSection
          title={pageData.acf.title}
          bgImg={pageData.acf.bgImg.url}
        />
        <AboutInfoSection data={pageData.acf.about} />
        <AboutSliderSection data={pageData.acf.benefits} />
        <QuestionForm />
      </React.Fragment>
    ) : null}
  </main>
);

export default withPageData(WP_PAGE_ID)(AboutPage);
