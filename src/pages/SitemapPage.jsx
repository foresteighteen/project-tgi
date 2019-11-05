import React from 'react';
import { HeaderContext } from '../containers/HeaderProvider';

import withPageData from '../containers/withPageData';

import './SitemapPage.sass';

const SitemapPage = ({ pageData, pageLoaded }) => {
  const { setHeaderTheme } = React.useContext(HeaderContext);

  React.useEffect(() => {
    setHeaderTheme('dark');
  }, []);

  if (!pageLoaded) return null;
  const updatedData = pageData.content.rendered.replace(
    /(\/products\/)/g,
    '/catalog/',
  );
  return (
    <main className="sitemap">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h1>{pageData.title.rendered}</h1>
            <nav
              className="sitemap__nav"
              dangerouslySetInnerHTML={{ __html: updatedData }}
            ></nav>
          </div>
        </div>
      </div>
    </main>
  );
};

export default withPageData(823)(SitemapPage);
