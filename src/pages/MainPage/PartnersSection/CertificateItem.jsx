import React from 'react';

const CertificateItem = ({ src, alt, click, index }) => (
  <img src={src} alt={alt} className="partners__cert-item" onClick={() => click(index)} />
);

export default CertificateItem;
