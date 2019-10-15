import React from 'react';
import { getPage } from '../api';

const withPageData = id => ComposedComponent => props => {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchPage = async () => {
      const response = await getPage(id);
      if (!response.success) {
        setError(response.error);
      } else {
        setData(response.data);
        setLoaded(true);
      }
    };
    fetchPage();
  }, []);

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
