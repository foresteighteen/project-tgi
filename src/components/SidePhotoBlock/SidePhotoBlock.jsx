import React from 'react';

import './SidePhotoBlock.sass';

const SidePhotoBlock = ({classes}) => {
  return (
    <div className={`side-photo__block ${classes}`}>
      <div className="side-photo__block__after"></div>
      <div className="side-photo__block__info">       
        <h2 className="font-bold font-nova"><span className="side-photo__block__before"></span>О заводе</h2>
        <div className="side-photo__block__img">
          <img
            src="/src/assets/img/about/IMG_3395@2x.png"
            alt=""
          />
        </div>
        <p>
          ЗАВОД ТЕПЛОГИДРОИЗОЛЯЦИИ — это один из лидирующих производителей
          теплоизоляции трубопроводов для нефтегазового комплекса и
          жилищно-коммунального хозяйства.
        </p>
        <p>
          Основной деятельностью компании является производство комплектов для
          изоляции сварных стыков трубопроводов (КТС) и изделий из таких
          материалов, как пенополиуретан (ППУ), пеностекло, минеральная вата и
          пенополистирол (ППС), в том числе экструдированный (ЭППС).{' '}
        </p>
        <p>
          Завод аккредитован в крупнейших нефтегазовых компаниях России, таких
          как ПАО «Газпром», ПАО «Газпром Нефть», ПАО «НК «Роснефть», ПАО
          «Новатэк», ПАО «Лукойл» и рекомендован в качестве надежного поставщика
          изоляционной продукции.
        </p>
      </div>
    </div>
  );
};

export default SidePhotoBlock;
