import React from 'react';
import { Card, FormControl } from 'react-bootstrap';
import { BsXLg } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import Avatar from '../../../components/Common/Avatar';
import { removeChatBox } from '../../../store/chatBoxAreaSlice';

import './index.css';
import OwnMessage from './OwnMessage';
import TheirMessage from './TheirMessage';

export default function ChatBox({ receiver }) {
  const dispatch = useDispatch();
  const { name, id } = receiver;

  return (
    <div className="chat-box">
      <Card border="info">
        <Card.Header>
          <div className="receiver">
            <Avatar size={38} />
            <span>{name}</span>
          </div>

          <BsXLg onClick={() => dispatch(removeChatBox(id))} />
        </Card.Header>
        <Card.Body>
          <div className="messages">
            <div className="contents">
              <div className="start">
                <Avatar size={64} />
              </div>
              <TheirMessage />
              <OwnMessage />
              <OwnMessage />
              <TheirMessage />
              <TheirMessage />
            </div>
          </div>

          <div className="chat-input">
            <FormControl type="text" placeholder="Write a message ..." />
            <IoIosSend size={30} color="#615dfa" />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
