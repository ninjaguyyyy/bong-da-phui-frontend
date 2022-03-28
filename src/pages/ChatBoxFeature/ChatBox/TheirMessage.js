import React from 'react';
import Avatar from '../../../components/Common/Avatar';

export default function TheirMessage({ sender, text }) {
  return (
    <div className="their-message">
      <Avatar size={38} image={sender.avatar} />
      <p>{text}</p>
    </div>
  );
}
