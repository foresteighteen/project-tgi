import React from 'react';
import withPostsData from '../../../containers/withPostsData';
import { NewsRow, SubscribeForm } from '../../../components';

const NewsRowSection = ({ postsData, postsLoaded }) => {
  if (!postsLoaded) return null;
  return (
    <div className="container">
      <NewsRow first data={postsData.splice(0, 2)} />
      <SubscribeForm />
      <NewsRow data={postsData} />
    </div>
  );
};

export default withPostsData('news')(NewsRowSection);
