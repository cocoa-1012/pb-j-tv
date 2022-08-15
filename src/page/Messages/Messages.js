import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../../components/Header/Header';
import MessagesContent from '../../components/Messages/MessagesContent';
import { fetchAllMessageAction } from '../../store/messages/messageAction';

const Messages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('fetchAllMessageAction');
    dispatch(fetchAllMessageAction());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Container>
        <MessagesContent />
      </Container>
    </div>
  );
};

export default Messages;
