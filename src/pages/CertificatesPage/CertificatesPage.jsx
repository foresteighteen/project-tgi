import React from 'react';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import CertificateHeroSection from './CertificateHeroSection';
import GallerySection from './GallerySection';
import { QuestionForm } from '../../components';

import './CertificatesPage.sass';

const WP_PAGE_ID = 104;

const CertificatesPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <main className="main cert-page">
      {pageLoaded ? (
        <React.Fragment>
          <CertificateHeroSection title={pageData.acf.title} />
          <GallerySection gallery={pageData.acf.gallery} />
          <QuestionForm />
        </React.Fragment>
      ) : null}
    </main>
  );
};
export default withPageData(WP_PAGE_ID)(CertificatesPage);
