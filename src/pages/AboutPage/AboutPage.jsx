import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import AboutInfoSection from './AboutInfoSection';
import AboutSliderSection from './AboutSliderSection';
import AboutHeroSection from './AboutHeroSection';

import { QuestionForm } from '../../components';

import './AboutPage.sass';

const WP_PAGE_ID = 12;

const AboutPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('light');
  }, []);
  return (
    <main className="main about-page">
      {pageLoaded ? (
        <React.Fragment>
          <Helmet>
            <title>{pageData.title.rendered}</title>
          </Helmet>
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
};
export default withPageData(WP_PAGE_ID)(AboutPage);
