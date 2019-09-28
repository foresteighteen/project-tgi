import React from 'react';

import PhotoVideoBlock from '../../components/PhotoVideoBlock';
import QuestionForm from '../../components/QuestionForm';
import { ProductionSlider } from '../../components/Sliders';
import KtcIncludes from './KtcIncludes';

const KtcPage = () => {
  return (
    <div>
      <PhotoVideoBlock video={true} />
      <QuestionForm />
      <ProductionSlider />
      <KtcIncludes />
    </div>
  )
}

export default KtcPage;
