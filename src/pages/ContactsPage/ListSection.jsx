import React from 'react';

const ListSection = ({ addressArray }) => (
  <div className="container">
    <div className="contacts__list row">
      {addressArray.map((address, i) => (
        <div
          className={`contacts__list-item col-md-6 ${
            i <= 1 ? 'col-lg-3' : 'col-lg-2'
          }`}
        >
          <p className="contacts__item-title">{address.title}</p>
          <p className="contacts__item-description">{address.text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default ListSection;
