import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './SectionNumbers.sass';

const SectionNumbers = ({ children }) => {
  const [sections, setSections] = React.useState(0);
  const [visibleSection, setVisibleSection] = React.useState(0);

  React.useEffect(() => {
    setSections(children.length);
  }, [children.length]);

  const onChange = (isVisible, id) => {
    if (isVisible) {
      setVisibleSection(id + 1);
    } else if (!isVisible && visibleSection > id) {
      setVisibleSection(id + 1);
    }
  };
  return (
    <React.Fragment>
      <div className="section-numbers">
        <span
          className="section-numbers__active"
          data-sec-number={visibleSection}
        >
          {visibleSection}
        </span>
        <span className="section-numbers__total">{sections}</span>
      </div>
      {children.map((sec, id) => (
        <VisibilitySensor
          key={id}
          partialVisibility="top"
          minTopValue={500}
          // offset={{ bottom: -500 }}
          onChange={isVisible => onChange(isVisible, id)}
        >
          {children[id]}
        </VisibilitySensor>
      ))}
    </React.Fragment>
  );
};

export default SectionNumbers;
