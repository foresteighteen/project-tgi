import React from 'react';

import withPageData from '../../containers/withPageData';
import { HeaderContext } from '../../containers/HeaderProvider';

import HeroSection from './HeroSection';
import ListSection from './ListSection';
import FeedbackSection from './FeedbackSection';
import Map from './Map';

import { QuestionForm, ErrorBoundary } from '../../components';
import './ContactsPage.sass';

const WP_PAGE_ID = 29;

const ContactsPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);
  const [mapCenter, setMapCenter] = React.useState(null);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <ErrorBoundary>
      <main className="contacts">
        {pageLoaded ? (
          <React.Fragment>
            <HeroSection
              title={pageData.acf.title}
              subtitle={pageData.acf.subtitle}
            />
            <ListSection
              addressArray={pageData.acf.address}
              setMapCenter={setMapCenter}
            />
            <ErrorBoundary>
              <Map
                apiKey={pageData.acf.map.key}
                zoom={pageData.acf.map.zoom}
                markers={pageData.acf.map.markers}
                center={mapCenter || pageData.acf.map.center}
              />
            </ErrorBoundary>
            <ErrorBoundary>
              <FeedbackSection />
            </ErrorBoundary>
            <QuestionForm />
          </React.Fragment>
        ) : null}
      </main>
    </ErrorBoundary>
  );
};
export default withPageData(WP_PAGE_ID)(ContactsPage);
