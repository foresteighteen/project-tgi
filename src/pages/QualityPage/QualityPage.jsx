import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import QualityHeroSection from './QualityHeroSection';
import QualityInfoSection from './QualityInfoSection';
import QualitySliderSection from './QualitySliderSection';

import { QuestionForm } from '../../components';

import './QualityPage.sass';

const WP_PAGE_ID = 102;

const QualityPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);
  React.useEffect(() => {
    setHeaderTheme('light');
  }, []);
  return (
    <main className="main quality-page">
      {pageLoaded ? (
        <React.Fragment>
          <Helmet>
            <title>{pageData.title.rendered}</title>
          </Helmet>
          <QualityHeroSection
            title={pageData.acf.title}
            bgImg={pageData.acf.bgImg}
          />
          <QualityInfoSection
            description={pageData.acf.description}
            sectionImg={pageData.acf.sectionImg}
          />
          <QualitySliderSection slider={pageData.acf.gallery} />
          <QuestionForm />
        </React.Fragment>
      ) : null}
    </main>
  );
};

export default withPageData(WP_PAGE_ID)(QualityPage);
