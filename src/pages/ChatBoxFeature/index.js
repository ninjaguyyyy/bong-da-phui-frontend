import React from 'react';
import { BsPencilSquare } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import ChatBox from './ChatBox';
import ChatBoxMiniIcon from './ChatBoxMiniIcon';
import './index.css';

export default function ChatBoxFeature() {
  const boxes = useSelector((state) => state.chatBoxArea.boxes);
  console.log('🚀 ~ file: index.js ~ line 10 ~ ChatBoxFeature ~ boxes', boxes);
  const mainBoxes = boxes.slice(0, 2);
  const miniBoxes = boxes.slice(2);

  return (
    <>
      <div className="chat-box-mini-icons">
        <div className="chat-box-icons">
          {console.log(miniBoxes)}
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
