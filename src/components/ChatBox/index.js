import React from 'react';
import { Card, FormControl } from 'react-bootstrap';
import { BsXLg } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import Avatar, { AvatarSize } from '../Common/Avatar';

import './index.css';
import OwnMessage from './OwnMessage';
import TheirMessage from './TheirMessage';

export default function ChatBox() {
  return (
    <div className="chat-box">
      <Card border="info">
        <Card.Header>
          <div className="receiver">
            <Avatar size={AvatarSize.ExtraSmall} />
            <span>Nguyen Huu CHi</span>
          </div>

          <BsXLg />
        </Card.Header>
        <Card.Body>
          <div className="messages">
            <div className="contents">
              <div className="start">
                <Avatar size={AvatarSize.Small} />
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
