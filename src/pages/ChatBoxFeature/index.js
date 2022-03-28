import React, { useEffect } from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import ChatBox from './ChatBox';
import ChatBoxMiniIcon from './ChatBoxMiniIcon';
import './index.css';

export default function ChatBoxFeature() {
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const boxes = useSelector((state) => state.chatBoxArea.boxes);
  const mainBoxes = boxes.slice(0, 2);
  const miniBoxes = boxes.slice(2);

  return (
    <>
      <div className="chat-box-mini-icons">
        <div className="chat-box-icons">
          {miniBoxes.map((box) => (
            <ChatBoxMiniIcon id={box.id} key={box.id} name={box.name} />
          ))}
          {/* 
          <ChatBoxMiniIcon />
          <ChatBoxMiniIcon /> */}
        </div>
        <div className="new-message">
          <BsPencilSquare size={22} />
        </div>
      </div>
      {mainBoxes.map((box) => (
        <ChatBox key={box.id} receiver={box} />
      ))}
    </>
  );
}
