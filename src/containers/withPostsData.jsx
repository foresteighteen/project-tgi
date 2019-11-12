import React from 'react';

import { getPosts } from '../api';
import { LangContext } from './LangProvider';

const withPostsData = id => ComposedComponent => props => {
  const { state } = React.useContext(LangContext);
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPosts(id, state.lang);
      if (!response.success) {
        setError(response.error);
      } else {
        setData(response.data);
        setLoaded(true);
      }
    };
    fetchPosts();
  }, [state.lang]);

  return (
    <ComposedComponent
      {...props}
      postsData={data}
      postsLoaded={loaded}
      postsError={error}
    />
  );
};

export default withPostsData;
