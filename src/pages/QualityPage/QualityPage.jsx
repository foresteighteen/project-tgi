import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import QualityHeroSection from './QualityHeroSection';
import QualityInfoSection from './QualityInfoSection';
import QualitySliderSection from './QualitySliderSection';

import { QuestionForm, ErrorBoundary } from '../../components';
import './QualityPage.sass';

const WP_PAGE_ID = 102;

const QualityPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);
  React.useEffect(() => {
    setHeaderTheme('light');
  }, []);
  return (
    <ErrorBoundary>
      <main className="main quality-page">
        {pageLoaded ? (
          <React.Fragment>
                      <Helmet>
            <title>{pageData.title.rendered}</title>
          </Helmet>
            <ErrorBoundary>
              <QualityHeroSection
                title={pageData.acf.title}
                bgImg={pageData.acf.bgImg}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <QualityInfoSection
                description={pageData.acf.description}
                sectionImg={pageData.acf.sectionImg}
              />
            </ErrorBoundary>

            <ErrorBoundary>
              <QualitySliderSection slider={pageData.acf.gallery} />
            </ErrorBoundary>

            <QuestionForm />
          </React.Fragment>
        ) : null}
      </main>
    </ErrorBoundary>
  );
};

export default withPageData(WP_PAGE_ID)(QualityPage);
