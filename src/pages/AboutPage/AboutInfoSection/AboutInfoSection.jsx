import React from 'react';

import SidePhotoBlock from '../../../components/SidePhotoBlock';

const AboutInfoSection = ({ data }) => {
  const { title, text_array, img } = data;
  return (
    <section id="about-info-section">
      <div className="container">
        <SidePhotoBlock
          title={title}
          text_array={text_array}
          imgSrc={img.url}
          imgAlt={img.alt}
        />
      </div>
    </section>
  );
};

export default AboutInfoSection;
