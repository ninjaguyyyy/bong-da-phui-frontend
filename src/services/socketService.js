const { io } = require('socket.io-client');

const opts = { transports: ['websocket'] };

const socket = io(process.env.REACT_APP_SOCKET_URL, opts);

// export const openSocket = () => {
//   socket.on('test', (data) => console.log({ data }));
// };

const socketVariable = (event, handler) => socket.on(event, handler);

// chat
export const listenMessage = (handler) => {
  socketVariable('test', handler);
};

export const listenA = (handler) => {
  socketVariable('a', handler);
};

export const listenB = (handler) => {
  socketVariable('b', handler);
};

export const listenC = (handler) => {
  socketVariable('c', handler);
};

// io.()

// io.()

// io.()
