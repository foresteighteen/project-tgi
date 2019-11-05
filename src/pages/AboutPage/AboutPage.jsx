import React from 'react';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import AboutInfoSection from './AboutInfoSection';
import AboutSliderSection from './AboutSliderSection';
import AboutHeroSection from './AboutHeroSection';

import { QuestionForm, ErrorBoundary } from '../../components';

import './AboutPage.sass';

const WP_PAGE_ID = 12;

const AboutPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('light');
  }, []);
  return (
    <ErrorBoundary>
      <main className="main about-page">
        {pageLoaded ? (
          <React.Fragment>
            <ErrorBoundary>
              <AboutHeroSection
                title={pageData.acf.title}
                bgImg={pageData.acf.bgImg.url}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <AboutInfoSection data={pageData.acf.about} />
            </ErrorBoundary>        
            <ErrorBoundary>
              <AboutSliderSection data={pageData.acf.benefits} />
            </ErrorBoundary>
            <QuestionForm />
          </React.Fragment>
        ) : null}
      </main>
    </ErrorBoundary>
  );
};
export default withPageData(WP_PAGE_ID)(AboutPage);
