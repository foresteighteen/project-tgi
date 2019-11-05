import React, { useState } from 'react';

import { animated, useSpring, config } from 'react-spring';
import { Waypoint } from 'react-waypoint';

const CertificateItem = ({ url, alt, index, click }) => {
  const [animate, play] = useState(false);
  const revealSpring = useSpring({
    opacity: animate ? 1 : 0,
    transform: animate
      ? 'matrix(1, 0, 0, 1, 0, 0)'
      : 'matrix(1, 0, 0, 1.4, 0, 280)',
    config: config.slow,
  });

  return (
    <React.Fragment>
      <Waypoint
        onEnter={() => {
          if (!animate) play(true);
        }}
        bottomOffset="10%"
        scrollableAncestor={document.getElementById('page-wrap')}
      >
        <animated.div
          className="cert__gallery-item col-xl-3 col-md-4 col-xs-6"
          style={revealSpring}
          onClick={() => {
            click(index);
          }}
        >
          <div className="cert__gallery-item__img">
            <img src={url} alt={alt} />
          </div>
        </animated.div>
      </Waypoint>
    </React.Fragment>
  );
};

export default CertificateItem;
