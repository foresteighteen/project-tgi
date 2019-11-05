import React from 'react';

import withPostData from '../../containers/withPostData';
import { HeaderContext } from '../../containers/HeaderProvider';

import HeroSection from './HeroSection';
import BodySection from './BodySection';

import { QuestionForm, ErrorBoundary } from '../../components';
import './SingleNewsPage.sass';

const SingleNewsPage = ({ postData, postLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <ErrorBoundary>
      <main className="main single-news-page">
        {postLoaded ? (
          <React.Fragment>
            <ErrorBoundary>
              <HeroSection
                title={postData.meta.title}
                desc={postData.meta.subtitle}
              />
            </ErrorBoundary>
            
            <ErrorBoundary>
              <BodySection body={postData.meta.body} img={postData.meta.img} />
            </ErrorBoundary>

            <QuestionForm />
          </React.Fragment>
        ) : null}
      </main>
    </ErrorBoundary>
  );
};

export default withPostData('news')(SingleNewsPage);
