import React from 'react'

import PhotoVideoBlock from '../../components/PhotoVideoBlock';

const KtcInfoSection = (data) => {
  return (
    <section id="ktc-info-section">
      <div className="container">
        <PhotoVideoBlock video={true} data={data} />  
      </div>
    </section>
  )
}

export default KtcInfoSection;

