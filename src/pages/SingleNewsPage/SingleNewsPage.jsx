import React from 'react';
import { Helmet } from 'react-helmet';
import withPostData from '../../containers/withPostData';
import { HeaderContext } from '../../containers/HeaderProvider';

import HeroSection from './HeroSection';
import BodySection from './BodySection';

import { QuestionForm } from '../../components';

import './SingleNewsPage.sass';

const SingleNewsPage = ({ postData, postLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  return (
    <main className="main single-news-page">
      {postLoaded ? (
        <React.Fragment>
          <Helmet>
            <title>{postData.meta.title}</title>
          </Helmet>
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
