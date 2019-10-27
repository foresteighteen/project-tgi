import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import CertificateItem from './CertificateItem';

const GallerySection = ({ gallery }) => {
  const [photoIndex, updatePhotoIndex] = useState(0);
  const [isOpenLight, updateLight] = useState(false);

  const openLight = index => {
    updatePhotoIndex(index);
    updateLight(true);
  };

  return (
    <section className="certificates">
      {isOpenLight && (
        <Lightbox
          mainSrc={gallery[photoIndex].img.url}
          nextSrc={gallery[(photoIndex + 1) % gallery.length].img.url}
          prevSrc={
            gallery[(photoIndex + gallery.length - 1) % gallery.length].img.url
          }
          onCloseRequest={() => updateLight(false)}
          onMovePrevRequest={() =>
            updatePhotoIndex((photoIndex + gallery.length - 1) % gallery.length)
          }
          onMoveNextRequest={() =>
            updatePhotoIndex((photoIndex + 1) % gallery.length)
          }
        />
      )}
      <div className="container">
        <div className="row cert__gallery">
          {gallery.map(({ img }, i) => (
            <CertificateItem key={i} click={openLight} {...img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
