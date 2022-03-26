import React from 'react';
import { useDispatch } from 'react-redux';
import { addChatBox } from '../../../../store/chatBoxAreaSlice';
import Avatar from '../../../Common/Avatar';

export default function OnlineUserItem({ user }) {
  const dispatch = useDispatch();

  const { name, team, avatar } = user;
  return (
    <div className="user" onClick={() => dispatch(addChatBox(user))}>
      <Avatar size={38} image={avatar} />
      <div className="info">
        <div className="name">{name}</div>
        {team[0] && <div className="team">FC. {team[0]}</div>}
      </div>
    </div>
  );
}
