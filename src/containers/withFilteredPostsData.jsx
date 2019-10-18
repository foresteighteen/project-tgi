import React from 'react';
import { getFilteredPosts } from '../api';

const withFilteredPostsData = (slug) => ComposedComponent => props => {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      const response = await getFilteredPosts(slug, props.data);
      if (!response.success) {
        setError(response.error);
      } else {
        setData(response.data);
        setLoaded(true);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ComposedComponent
      {...props}
      postsData={data}
      postsLoaded={loaded}
      postsError={error}
    />
  );
};

export default withFilteredPostsData;
