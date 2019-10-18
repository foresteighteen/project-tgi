import React from 'react';
import withPostData from '../../containers/withPostData';
import KtcInfoSection from './KtcInfoSection';
import KtcIncludesSection from './KtcIncludesSection';
import KtcSliderSection from './KtcSliderSection';
import KtcHeroSection from './KtcHeroSection';
import { QuestionForm } from '../../components';

import './KtcPage.sass';

const KtcPage = ({ postData, postLoaded }) => {
  if (!postLoaded) return null;
  return (
    <main className="main ktc-page">
      <KtcHeroSection data={postData.acf.hero} />
      <KtcInfoSection data={postData.acf.info} title={postData.title.rendered} />
      <KtcIncludesSection data={postData.acf.complects} />
      <KtcSliderSection data={postData.acf.production} />
      <QuestionForm />
    </main>
  );
};

export default withPostData('coils')(KtcPage);
