import React from 'react';

import { SidePhotoBlock } from '../../../components';

import './QualityInfoSection.sass';

const QualityInfoSection = ({ description, sectionImg }) => (
  <section id="quality-info-section">
    <div className="container">
      <SidePhotoBlock
        textArray={description}
        imgSrc={sectionImg.url}
        imgAlt={sectionImg.alt}
        classes="no-before"
      />
    </div>
  </section>
);

export default QualityInfoSection;
