import React from 'react';
import { useDispatch } from 'react-redux';
import { addMessageAction, updateMessageStatus } from '../../store/reducers/messages';

import Header from '../../components/Header';
import Dialog from '../../components/Dialog';
import Sender from '../../components/Sender';

const Chat = () => {
  const dispatch = useDispatch();

  // Оно тут надо ?
  const sendMessage = (message) => {
    dispatch(addMessageAction(message));

    setTimeout(() => {
      dispatch(updateMessageStatus({ id: message.id, status: 'readed' }));
    }, 5000);
  };
  return (
    <section className="DialogContainer">
      <Header />
      <Dialog />
      <Sender onAddMessage={sendMessage} />
    </section>
  );
};

export default Chat;
