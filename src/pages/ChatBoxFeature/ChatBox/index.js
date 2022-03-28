import React, { useEffect, useRef, useState } from 'react';
import { Card, FormControl } from 'react-bootstrap';
import { BsXLg } from 'react-icons/bs';
import { IoIosSend } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../../components/Common/Avatar';
import { conversationsService, messagesService } from '../../../services';
import { removeChatBox } from '../../../store/chatBoxAreaSlice';
import ChatMessage from './ChatMessage';
import { sendMessage, joinChat, listenMessage, leaveChat } from '../../../services/socketService';
import './index.css';

export default function ChatBox({ receiver }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const { name, id, avatar } = receiver;

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  // stateMessage
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversation, setConversation] = useState(null);

  const handleSend = async () => {
    sendMessage(user, inputMessage, conversation.id);

    const { message } = await messagesService.create(conversation.id, user.id, inputMessage);
    setMessages([message, ...messages]);
    setInputMessage('');
  };

  const handler = (data) => {
    setMessages((prev) => {
      return [{ ...data, id: Math.random() }, ...prev];
    });
  };

  const fetchMessages = async () => {
    let { conversation: fetchedConversation } = await conversationsService.getByMembers([receiver.id, user.id]);
    if (!fetchedConversation) {
      const { conversation } = await conversationsService.create([receiver.id, user.id]);
      fetchedConversation = conversation;
    }

    setConversation(fetchedConversation);

    const { results } = await messagesService.getByConversation(fetchedConversation.id);
    setMessages(results);
    joinChat(fetchedConversation.id);
  };

  useEffect(() => {
    fetchMessages();
    listenMessage(handler);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="chat-box">
      <Card border="info">
        <Card.Header>
          <div className="receiver">
            <Avatar size={38} image={avatar} />
            <span>{name}</span>
          </div>

          <BsXLg onClick={() => dispatch(removeChatBox(id))} />
        </Card.Header>
        <Card.Body>
          <div className="messages">
            <div className="contents">
              <div className="start">
                <Avatar size={64} image={avatar} />
              </div>

              {[...messages].reverse().map((message) => (
                <ChatMessage key={message.id} sender={message.sender} text={message.text} />
              ))}

              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="chat-input">
            <FormControl
              type="text"
              placeholder="Write a message ..."
              onChange={(e) => setInputMessage(e.target.value)}
              value={inputMessage}
              onKeyDown={(e) => e.keyCode === 13 && handleSend()}
            />
            <IoIosSend size={30} color="#615dfa" onClick={() => handleSend()} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
