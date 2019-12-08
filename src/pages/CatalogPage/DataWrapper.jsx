import React from 'react';
import { prop, indexBy } from 'ramda';
import withPostsData from '../../containers/withPostsData';

const DataWrapper = ({ children, postsData, postsLoaded }) => {
  if (!postsLoaded) return null;
  const posts = indexBy(prop('id'), postsData);
  const newChildren = React.Children.map(children, child => {
    return React.cloneElement(child, {
      posts,
    });
  });

  return <div>{newChildren}</div>;
};

export default withPostsData('catalog')(DataWrapper);
