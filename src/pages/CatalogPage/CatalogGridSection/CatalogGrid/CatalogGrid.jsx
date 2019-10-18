import React from 'react';
import { indexBy, prop } from 'ramda';
import withFilteredPostsData from '../../../../containers/withFilteredPostsData';
import CatalogGridItem from './CatalogGridItem';

import './CatalogGrid.sass';

const CatalogGrid = ({ data, postsData, postsLoaded }) => {
  if (!postsLoaded) return null;
  const indexedPosts = indexBy(prop('id'), postsData);
  const posts = data.map(id => <CatalogGridItem key={id} {...indexedPosts[id]} />);
  return (
    <div className="catalog__grid">
      {posts}
    </div>
  );
};

export default withFilteredPostsData('coils')(CatalogGrid);
