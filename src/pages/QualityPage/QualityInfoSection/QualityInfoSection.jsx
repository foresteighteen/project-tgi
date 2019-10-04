import React from 'react';

import { SidePhotoBlock } from '../../../components';

import './QualityInfoSection.sass';

const QualityInfoSection = () => {
  return (
    <section id="quality-info-section">
      <div className="container">
        <SidePhotoBlock classes="no-before"/>
      </div>
    </section>
  );
};

export default QualityInfoSection;
