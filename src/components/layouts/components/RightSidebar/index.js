import React, { useEffect, useState } from 'react';
import { FaGlobeAsia } from 'react-icons/fa';
import { usersService } from '../../../../services';
import OnlineUserItem from './OnlineUserItem';

export default function RightSidebar() {
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const { results } = await usersService.getAll();
      setOnlineUsers(results);
    })();
  }, []);

  return (
    <div className="right-sidebar">
      <div className="users">
        {onlineUsers.map((onlineUser) => (
          <OnlineUserItem key={onlineUser.id} user={onlineUser} />
        ))}
      </div>
      <div className="title">
        <FaGlobeAsia color="#fff" />
        <span>Online Users</span>
      </div>
    </div>
  );
}
