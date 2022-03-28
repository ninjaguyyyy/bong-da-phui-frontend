const { io } = require('socket.io-client');

const opts = { transports: ['websocket'] };

let onlineUsersSocket = null;

export const openOnlineUsersSocket = () => {
  onlineUsersSocket = io(process.env.REACT_APP_SOCKET_URL + '/online-users', opts);
};

export const notifyOnline = (user) => {
  onlineUsersSocket.emit('online', user);
};

export const getList = () => {
  onlineUsersSocket.emit('get-list');
};

export const listenReceiveList = (handler) => {
  onlineUsersSocket.on('list', handler);
};

export const listenNewOnlineUser = (handler) => {
  onlineUsersSocket.on('new', handler);
};

export const listenRemoveOnlineUser = (handler) => {
  onlineUsersSocket.on('remove', handler);
};
