import { Container } from '@mui/system';
import React from 'react';
import Header from '../../components/Header/Header';
import MessagesContent from '../../components/Messages/MessagesContent';

const Messages = () => {
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
