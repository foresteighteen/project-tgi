import React from 'react';
import { getPost } from '../api';
import { LangContext } from './LangProvider';

const withPostData = postType => ComposedComponent => props => {
  // const { match: { url } } = props;
  // const path = url.match(/[^/]+/gm);
  const { state } = React.useContext(LangContext);
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPosts = async () => {
      // const response = await getPost(...path);
      const response = await getPost(
        postType,
        props.match.params.slug,
        state.lang,
      );
      if (!response.success) {
        setError(response.error);
      } else {
        setData(postType === 'news' ? response.data : response.data[0]);
        setLoaded(true);
      }
    };
    fetchPosts();
  }, [state.lang]);

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
