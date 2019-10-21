import React, { useState } from 'react';
import classnames from 'classnames';
import {useSpring, animated} from 'react-spring';
import YouTubePlayer from './YouTubePlayer';

import './PhotoVideo.sass';

const PhotoVideoBlock = ({ data }) => {
  const { video, type, bgImg, btn_video, title } = data;
  const [isOpen, openPlayer] = useState(false);
  const isVideo = type === 'video';
  
  const animation = useSpring({transform: `translate3d(0,${isOpen ? 100 : 0}px, 0)`});

  const coverClass = classnames({
    'photo-video__block__cover': true,
    isVideo,
  });

  return (
    <div className="photo-video__block">        
      <div className="photo-video__block__wrapp">
        <div className={coverClass} >
          <img className="coverImage" src={isVideo? `https://img.youtube.com/vi/${video}/maxresdefault.jpg` : bgImg} alt="" />
          {isVideo && isOpen ? <YouTubePlayer video={video} /> : null}
          {isVideo ? (
            <div className="video-info">
              <button
                onClick={() => {openPlayer(true)}}
                className="btn-video"
              ></button>
              <div className="video-desc__text">
                {btn_video} {title}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <animated.div style={animation} className="photo-video__block__desc" dangerouslySetInnerHTML={{ __html: data.text}}>
      </animated.div>
    </div>
  );
};

export default PhotoVideoBlock;
