import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsXCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import Avatar from '../../../components/Common/Avatar';
import { removeChatBox } from '../../../store/chatBoxAreaSlice';

export default function ChatBoxMiniIcon({ avatar, id, name }) {
  const dispatch = useDispatch();

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} className="">
      {name}
    </Tooltip>
  );

  return (
    <OverlayTrigger placement="left" overlay={renderTooltip}>
      <div className="chat-box-icon">
        <div className="message-count">12</div>
        <BsXCircle size={20} onClick={() => dispatch(removeChatBox(id))} />
        <Avatar size={50} />
      </div>
    </OverlayTrigger>
  );
}
