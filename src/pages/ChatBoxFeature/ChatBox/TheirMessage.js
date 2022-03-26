import React from 'react';
import Avatar, { AvatarSize } from '../../../components/Common/Avatar';

export default function TheirMessage() {
  return (
    <div className="their-message">
      <Avatar size={38} />
      <p>You're right, it's been a really long time! I think the last time we saw was at Neko's party</p>
    </div>
  );
}
