import React from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import withPostData from '../../containers/withPostData';
import { HeaderContext } from '../../containers/HeaderProvider';

import HeroSection from './HeroSection';
import BodySection from './BodySection';

import { QuestionForm, ErrorBoundary } from '../../components';
import './SingleNewsPage.sass';

const SingleNewsPage = ({ postData, postLoaded }) => {

  if (!postLoaded) return <main className="main single-news-page"></main>;

  const PAGE_TITLE = postData?.meta?.title;

  if (!PAGE_TITLE) return <Redirect to="/" />;

  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <ErrorBoundary>
      <main className="main single-news-page">
          <React.Fragment>
          <Helmet>
            <title>{PAGE_TITLE}</title>
          </Helmet>
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
      </main>
    </ErrorBoundary>
  );
};

export default withPostData('news')(SingleNewsPage);
