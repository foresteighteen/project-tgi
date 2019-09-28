import React from 'react';

import classnames from 'classnames';

import './PhotoVideo.sass';

const PhotoVideoBlock = props => {
  const { video } = props;

  // const video = true;

  const coverClass = classnames({
    'photo-video__block__cover': true,
    isVideo: video,
  });

  const style = {
    backgroundImage: 'url(/src/assets/img/ktc/photo/image1.png)',
  };
  return (
    <div className="container">
      <div className="photo-video__block">
        <div className="photo-video__block__wrapp">
          <div className={coverClass} style={style}>
            {video ? (
              <div className="video-info">
                <span className="btn-video"></span>
                <div className="video-desc__text">
                  Смотреть видео-процесс установки КТС-1
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className="photo-video__block__desc">
          <p className="photo-video__block__text">
            ППУ – один из эффективных полимерную утеплителей, способный
            значительно снизить теплопотери и не допустить проникновения воды,
            вызывающей коррозию, к коммуникациям. Секрет герметичности таков:
            теплоизоляция для труб подбирается по их диаметру, что обеспечивает
            плотно прилегание «половинок» изделия. Жёсткий «чехол» не сползает и
            способен полноценно функционировать при диапазоне - 60˚…+140˚С.
          </p>
          <p className="photo-video__block__text">
            ППУ – один из эффективных полимерную утеплителей, способный
            значительно снизить теплопотери и не допустить проникновения воды,
            вызывающей коррозию, к коммуникациям. Секрет герметичности таков:
            теплоизоляция для труб подбирается по их диаметру, что обеспечивает
            плотно прилегание «половинок» изделия. Жёсткий «чехол» не сползает и
            способен полноценно функционировать при диапазоне - 60˚…+140˚С.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoVideoBlock;
