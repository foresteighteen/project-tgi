import React from 'react';

import withPostData from '../../containers/withPostData';

import HeroSection from './HeroSection';
import BodySection from './BodySection';

import { QuestionForm } from '../../components';

import './SingleNewsPage.sass';

const SingleNewsPage = ({ postData, postLoaded }) => {
  return (
    <main className="main single-news-page">
      {postLoaded ? (
        <React.Fragment>
          <HeroSection
            title={postData.meta.title}
            desc={postData.meta.subtitle}
          />
          <BodySection body={postData.meta.body} img={postData.meta.img} />
          <QuestionForm />
        </React.Fragment>
      ) : null}
    </main>
  );
};

export default withPostData('news')(SingleNewsPage);
