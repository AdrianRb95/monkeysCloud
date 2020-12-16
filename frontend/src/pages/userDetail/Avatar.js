import React, { memo } from 'react';
import Default from '../../assets/images/default-avatar.png';

const Avatar = ({ img }) => (
  <div className='user-detail-page__avatar'>
    <img src={img || Default} alt='avatar' />
  </div>
);

export default memo(Avatar);
