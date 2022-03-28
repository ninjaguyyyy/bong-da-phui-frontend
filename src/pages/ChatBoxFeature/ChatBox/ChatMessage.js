import React from 'react';
import { useSelector } from 'react-redux';
import OwnMessage from './OwnMessage';
import TheirMessage from './TheirMessage';

export default function ChatMessage({ sender, text }) {
  const user = useSelector((state) => state.user.data);
  return sender.id === user.id ? <OwnMessage text={text} /> : <TheirMessage sender={sender} text={text} />;
}
