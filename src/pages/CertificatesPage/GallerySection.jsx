import React from 'react';

const GallerySection = ({ gallery }) => (
  <div className="container">
    <div className="row cert__gallery">
      {gallery.map(({ img }, i) => (
        <img
          key={i}
          src={img.url}
          alt={img.alt}
          className="cert__gallery-item col-xl-3 col-md-4 col-xs-6"
        />
      ))}
    </div>
  </div>
);

export default GallerySection;
