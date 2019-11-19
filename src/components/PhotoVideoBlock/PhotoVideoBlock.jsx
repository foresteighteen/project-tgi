import React, { useState, useRef } from 'react';
import { Waypoint } from 'react-waypoint';
import {
  animated,
  useSpring,
  useChain,
  useTransition,
  config,
} from 'react-spring';
import classnames from 'classnames';
import YouTubePlayer from './YouTubePlayer';

import './PhotoVideo.sass';

const PhotoVideoBlock = ({ data }) => {
  const { video, type, bgImg, btn_video, title } = data;
  const [isOpen, openPlayer] = useState(false);
  const [animate, play] = useState(false);
  const isVideo = type === 'video';

  const animation = useSpring({
    transform: `translate3d(0,${isOpen ? 100 : 0}px, 0)`,
  });

  const springRef2 = useRef();
  const springOverlay = useSpring({
    ref: springRef2,
    from: { backgroundColor: '#EE9D35', width: '100%', left: '0%' },
    to: { backgroundColor: '#fff', width: '0px', left: '100%' },
  });

  const springRef3 = useRef();
  const springOverlayMain = useSpring({
    ref: springRef3,
    from: { transform: 'scale3d(0, 1, 1)', transformOrigin: '0% 0%' },
    to: { transform: 'scale3d(1, 1, 1)' },
    transformOrigin: '0% 0%',
  });

  const springRef4 = useRef();
  const springOverlayVertical = useSpring({
    ref: springRef4,
    from: { transform: 'scale3d(1, 0, 1)', transformOrigin: '0% 0%' },
    to: { transform: 'scale3d(1, 1, 1)' },
    transformOrigin: '0% 0%',
  });

  const springRef5 = useRef();
  const springOverlayBlockVertical = useSpring({
    ref: springRef5,
    from: { backgroundColor: '#EE9D35', height: '100%', top: '0%' },
    to: { backgroundColor: '#fff', height: '0px', top: '100%' },
  });

  useChain(animate ? [springRef3, springRef2, springRef4, springRef5] : []);

  const coverClass = classnames({
    'photo-video__block__cover': true,
    isVideo,
  });

  return (
    <Waypoint onEnter={() => play(true)} bottomOffset="30%">
      <div className="photo-video__block">
        <div className="photo-video__block__wrapp">
          <animated.div
            style={springOverlayVertical}
            className="photo-video__block__wrapp__before"
          />
          <animated.div
            className="photo-video__block__wrapp__inner"
            style={springOverlayMain}
          >
            <animated.div style={springOverlay} className="overlay-block" />
            <div className={coverClass}>
              <img
                className="coverImage"
                src={
                  isVideo
                    ? `https://img.youtube.com/vi/${video}/maxresdefault.jpg`
                    : bgImg
                }
                alt=""
              />
              {isVideo && isOpen ? <YouTubePlayer video={video} /> : null}
              {isVideo ? (
                <div className="video-info">
                  <button
                    onClick={() => {
                      openPlayer(true);
                    }}
                    className="btn-video"
                  />
                  <div className="video-desc__text">
                    {btn_video} {title}
                  </div>
                </div>
              ) : null}
            </div>
          </animated.div>
        </div>
        <animated.div style={animation} className="photo-video__block__desc">
          <animated.div
            style={springOverlayVertical}
            className="photo-video__block__desc__wrap"
          >
            <animated.div
              style={springOverlayBlockVertical}
              className="overlay-block"
            />
            <div dangerouslySetInnerHTML={{ __html: data.text }}></div>
          </animated.div>
        </animated.div>
      </div>
    </Waypoint>
  );
};

export default PhotoVideoBlock;
