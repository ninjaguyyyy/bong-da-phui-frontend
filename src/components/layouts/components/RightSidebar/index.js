import React, { useEffect, useState } from 'react';
import { FaGlobeAsia } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import {
  getList,
  listenNewOnlineUser,
  listenReceiveList,
  listenRemoveOnlineUser,
  notifyOnline,
  openOnlineUsersSocket,
} from '../../../../services/socketService';
import OnlineUserItem from './OnlineUserItem';

export default function RightSidebar() {
  const user = useSelector((state) => state.user.data);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const handleReceiveOnlineUsers = (users) => {
    setOnlineUsers(users);
  };

  const handleAdd = (user) => {
    setOnlineUsers((prevState) => {
      return [...prevState, user];
    });
  };

  const handleRemove = (user) => {
    setOnlineUsers((prevState) => {
      const updated = prevState.filter(({ id }) => id !== user.id);
      return [...updated];
    });
  };

  useEffect(() => {
    openOnlineUsersSocket();
    notifyOnline(user);
    getList();
    listenReceiveList((users) => handleReceiveOnlineUsers(users));
    listenNewOnlineUser((user) => handleAdd(user));
    listenRemoveOnlineUser((user) => handleRemove(user));
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
