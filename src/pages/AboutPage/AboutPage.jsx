import React from 'react';

import SidePhotoBlock from '../../components/SidePhotoBlock';
import { TabsSlider } from '../../components/Sliders';

const AboutPage = () => {
  return (
    <main>
      <div className="container">
        <SidePhotoBlock />
      </div>
      <div className="container">
        <TabsSlider />
      </div>
      
    </main>
  )
}

export default AboutPage;
