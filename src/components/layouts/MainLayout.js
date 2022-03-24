import React from 'react';
import ChatBoxArea from './components/ChatBoxArea';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import './MainLayout.css';

export default function MainLayout(props) {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-between wrapper">
        <LeftSidebar />

        <main className="main-content">{props.children}</main>

        <ChatBoxArea />
        <RightSidebar />
      </div>
    </>
  );
}
