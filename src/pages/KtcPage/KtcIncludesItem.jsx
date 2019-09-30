import React from 'react';

import './KtcIncludesItem.sass';

const KtcIncludesItem = ({img}) => {
  return (
    <div className="ktc-item">
      <div className="ktc-item-left"><img src={`/src/assets/img/ktc/photo/${img}.png`} alt=""/></div>
      <div className="ktc-item-text">
      Это специальный элемент веб-дизайна, представляющий собой блок с набором изображений и\или текстовой информации определенной ширины. Главная его фишка в изменяющихся в ручном или автоматическом режиме
      </div>
      <div className="ktc-item-right"><img src={`/src/assets/img/ktc/photo/${img}.png`} alt=""/></div>
      
    </div>
  )
}

export default KtcIncludesItem;
