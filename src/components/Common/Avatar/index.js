import React from 'react';
import './index.css';

export default function Avatar({ image, size }) {
  const source = image ? image : require('../../../assets/images/football-player.png');

  return (
    <div className="avatar" style={{ height: size, width: size }}>
      <img src={source} alt="avatar" />
    </div>
  );
}
