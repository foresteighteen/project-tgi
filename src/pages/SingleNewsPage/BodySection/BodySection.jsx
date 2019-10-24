import React from 'react';

const BodySection = ({ body, img }) => {
  return (
    <section id="single-news-body">
      <div className="container">
        <div className="single-news-body-poster">
          <img src={img} alt="" className="img-responsive" />
        </div>
        <div
          className="single-news-body-container"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      </div>
    </section>
  );
};

export default BodySection;
