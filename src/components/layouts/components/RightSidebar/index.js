import React from 'react';
import { FaGlobeAsia } from 'react-icons/fa';
import OnlineUserItem from './OnlineUserItem';

export default function RightSidebar() {
  return (
    <div className="right-sidebar">
      <div className="users">
        <OnlineUserItem />
        <OnlineUserItem />
        <OnlineUserItem />
        <OnlineUserItem />
        <OnlineUserItem />
      </div>
      <div className="title">
        <FaGlobeAsia color="#fff" />
        <span>Online Users</span>
      </div>
    </div>
  );
}
