import React from 'react';
import { animated, useTrail } from 'react-spring';

const ListSection = ({ addressArray }) => {
  const spring = useTrail(addressArray.length, {
    from: { opacity: 0, transform: 'translate3d(0, 80px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  return (
    <div className="container">
      <div className="contacts__list row">
        {spring.map(({ ...animation }, i) => {
          const address = addressArray[i];
          return (
            <animated.div
              style={animation}
              key={i}
              className={`contacts__list-item col-md-6 ${
                i <= 1 ? 'col-lg-3' : 'col-lg-2'
              }`}
            >
              <p className="contacts__item-title">{address.title}</p>
              <p className="contacts__item-description">{address.text}</p>
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

export default ListSection;
