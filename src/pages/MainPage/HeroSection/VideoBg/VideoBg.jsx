/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import './VideoBg.sass';

const VideoBg = ({ src }) => (
  <div
    className="video-bg"
    style={{
      overflow: 'hidden',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    }}
  >
    <video
      src={src}
      loop
      muted
      autoPlay
      playsInline
      style={{
        // width: '100%',
        // height: '106%',
        top: '-4%',
        position: 'relative',
        objectFit: 'cover',
      }}
    ></video>
  </div>
);

export default VideoBg;
