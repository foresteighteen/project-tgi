import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

const Section = ({ className, children, number }) => {
  const onChange = isVisible => {
    if (isVisible) {
      console.log(number, className);
    }
  };
  return (
    <VisibilitySensor onChange={onChange} key={number}>
      <section className={className}>{children}</section>
    </VisibilitySensor>
  );
};

export default Section;
