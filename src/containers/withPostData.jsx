import React from 'react';
import { getPost } from '../api';

const withPostData = postType => ComposedComponent => props => {
  // const { match: { url } } = props;
  // const path = url.match(/[^/]+/gm);
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      // const response = await getPost(...path);
      const response = await getPost(postType, props.match.params.slug);
      if (!response.success) {
        setError(response.error);
      } else {
        setData(response.data[0]);
        setLoaded(true);
      }
    };
    fetchPosts();
  }, []);

  return (
    <ComposedComponent
      {...props}
      postData={data}
      postLoaded={loaded}
      postError={error}
    />
  );
};

export default withPostData;
