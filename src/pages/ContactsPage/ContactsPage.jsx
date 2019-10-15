import React from 'react';

import withPageData from '../../containers/withPageData';

import HeroSection from './HeroSection';
import ListSection from './ListSection';
import FeedbackSection from './FeedbackSection';
import Map from './Map';

import { QuestionForm } from '../../components';

import './ContactsPage.sass';

const WP_PAGE_ID = 29;

const ContactsPage = ({ pageData, pageLoaded }) => (
  <main className="contacts">
    {pageLoaded ? (
      <React.Fragment>
        <HeroSection
          title={pageData.acf.title}
          subtitle={pageData.acf.subtitle}
        />
        <ListSection addressArray={pageData.acf.address} />
        <Map
          apiKey={pageData.acf.map.key}
          zoom={pageData.acf.map.zoom}
          markers={pageData.acf.map.markers}
          center={pageData.acf.map.center}
        />
        <FeedbackSection />
        <QuestionForm />
      </React.Fragment>
    ) : null}
  </main>
);
export default withPageData(WP_PAGE_ID)(ContactsPage);
