import React from 'react';

import { getPage } from '../api';
import { LangContext } from './LangProvider';
import { ScrollContext } from './ScrollRestoration';

const withPageData = id => ComposedComponent => props => {
  const { state } = React.useContext(LangContext);
  const { restoreScroll } = React.useContext(ScrollContext);

  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPage = async () => {
      const response = await getPage(id, state.lang);
      if (!response.success) {
        setError(response.error);
      } else {
        setData(response.data);
        setLoaded(true);
      }
    };
    fetchPage();
  }, [state.lang]);

  React.useEffect(() => {
    if (loaded && !error) setTimeout(() => restoreScroll());
  }, [loaded]);
  return (
    <ComposedComponent
      {...props}
      pageData={data}
      pageLoaded={loaded}
      pageError={error}
    />
  );
};

export default withPageData;
