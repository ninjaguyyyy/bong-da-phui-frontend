import React from 'react';
import { useDispatch } from 'react-redux';
import { addChatBox } from '../../../../store/chatBoxAreaSlice';
import Avatar from '../../../Common/Avatar';
import { BsDot } from 'react-icons/bs';

export default function OnlineUserItem({ user }) {
  const dispatch = useDispatch();

  const { name, team, avatar } = user;
  return (
    <div className="user" onClick={() => dispatch(addChatBox(user))}>
      <div className="status-avatar">
        <BsDot color="#63f763" size={60} />
        <Avatar size={38} image={avatar} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        {team[0] && <div className="team">FC. {team[0]}</div>}
      </div>
    </div>
  );
}
