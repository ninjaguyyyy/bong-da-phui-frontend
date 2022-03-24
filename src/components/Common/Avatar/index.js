import React from 'react';
import './index.css';

export const AvatarSize = {
  ExtraSmall: { width: '45px', padding: 2, border: 2 },
  Small: { width: '64px', padding: 3, border: 3 },
  Medium: '',
};

export default function Avatar({ size = AvatarSize.Small }) {
  const { border, width, padding } = size;

  return (
    <div className="avatar" style={{ height: width, width, borderWidth: border, padding }}>
      <img src={require('../../../assets/images/football-player.png')} alt="avatar" />
    </div>
  );
}
