import React, { useState } from 'react';
import classnames from 'classnames';
import 'react-modal-video/css/modal-video.min.css';

// import ModalVideoComponent from './ModalVideoComponent';

import ModalVideo from 'react-modal-video';

import './PhotoVideo.sass';

const PhotoVideoBlock = props => {
  const { video } = props;

  const [isOpen, openModal] = useState(false);
  // const video = true;

  const coverClass = classnames({
    'photo-video__block__cover': true,
    isVideo: video,
  });

  const style = {
    backgroundImage: 'url(/src/assets/img/ktc/photo/image1.png)',
  };
  return (
    <div className="photo-video__block">
      {video ? (
        <ModalVideo
          autoplay="1"
          modestbranding="1"
          channel="youtube"
          showinfo="0"
          isOpen={isOpen}
          videoId="HchoJcYNYlU"
          onClose={() => openModal(false)}
        />
      ) : null}
      <div className="photo-video__block__wrapp">
        <div className={coverClass} style={style}>
          {video ? (
            <div className="video-info">
              <button
                onClick={() => openModal(true)}
                className="btn-video"
              ></button>
              <div className="video-desc__text">
                Смотреть видео-процесс установки КТС-2
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
  );
};

export default PhotoVideoBlock;
