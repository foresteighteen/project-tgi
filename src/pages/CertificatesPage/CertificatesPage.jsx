import React from 'react';
import { Helmet } from 'react-helmet';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import CertificateHeroSection from './CertificateHeroSection';
import GallerySection from './GallerySection';
import { QuestionForm, ErrorBoundary } from '../../components';
import './CertificatesPage.sass';

const WP_PAGE_ID = 304;

const CertificatesPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <ErrorBoundary>
      <main className="main cert-page">
        {pageLoaded ? (
          <React.Fragment>
            <Helmet>
              <title>{pageData.title.rendered}</title>
            </Helmet>
            <ErrorBoundary>
              <CertificateHeroSection title={pageData.acf.title} />
            </ErrorBoundary>

            <ErrorBoundary>
              <GallerySection gallery={pageData.acf.gallery} />
            </ErrorBoundary>

            <QuestionForm />
          </React.Fragment>
        ) : null}
      </main>
    </ErrorBoundary>
  );
};
export default withPageData(WP_PAGE_ID)(CertificatesPage);
