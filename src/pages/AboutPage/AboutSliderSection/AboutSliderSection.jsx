import React from 'react';

import { TabsSlider } from '../../../components';

const AboutSliderSection = ({ data }) => {
  const { items } = data;
  return (
    <section id="about-slider-section">
      <div className="container">
        <TabsSlider slides={items} />
      </div>
    </section>
  );
};

export default AboutSliderSection;
