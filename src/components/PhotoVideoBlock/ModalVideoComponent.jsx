import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/css/modal-video.min.css';

const ModalVideoComponent = () => {
  const [isOpen, openModal] = useState(false);

  // constructor () {
  //   super()
  //   this.state = {
  //     isOpen: false
  //   }
  //   this.openModal = this.openModal.bind(this)
  // }

  // openModal () {
  //   this.setState({isOpen: true})
  // }

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => openModal(false)}
      />
      <div className="video-info">
        <button onClick={() => openModal(true)} className="btn-video"></button>
        <div className="video-desc__text">
          Смотреть видео-процесс установки КТС-2
        </div>
      </div>
    </React.Fragment>
  );
};

export default ModalVideoComponent;
