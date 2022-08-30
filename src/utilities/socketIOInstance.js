import { io } from 'socket.io-client';

const socket = io('http://104.140.77.234', {
  extraHeaders: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    userId: localStorage.getItem('accountSelected'),
  },
});

export default socket;