const { io } = require('socket.io-client');

const opts = { transports: ['websocket'] };

let chatSocket = null;

export const openChatSocket = () => {
  chatSocket = io(process.env.REACT_APP_SOCKET_URL + '/chat', opts);
};

export const joinChat = (conversationId) => {
  chatSocket.emit('join', { conversationId });
};

export const leaveChat = (conversationId) => {
  chatSocket.emit('leave', { conversationId });
};

export const listenMessage = (handler) => {
  chatSocket.on('message', handler);
};

export const sendMessage = (sender, text, conversationId) => {
  chatSocket.emit('send-message', { sender, text, conversationId });
};
