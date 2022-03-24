import React from 'react';
import Avatar, { AvatarSize } from '../../../Common/Avatar';

export default function OnlineUserItem() {
  return (
    <div className="user">
      <Avatar size={AvatarSize.ExtraSmall} />
      <div className="info">
        <div className="name">Nguyen Huu Chi</div>
        <div className="team">FC.Barcelona</div>
      </div>
    </div>
  );
}
