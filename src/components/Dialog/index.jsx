import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import DialogItem from './DialogItem';
import Title from './Title';

import { normalizeDialog } from './helpers';

import './index.scss';

const Dialog = ({ newMessage }) => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.messagesReducer.messages);
  const normilizedDialog = normalizeDialog(messages);

  const omRemove = (id) => {
    dispatch({
      type: 'remove-message',
      payload: id,
    });
  };

  useEffect(() => {
    if (!newMessage) return;
    dispatch({ type: 'add-message', payload: newMessage });
    setTimeout(() => dispatch({ type: 'update-status', payload: { id: newMessage.id, status: 'readed' } }), 5000);
  }, [newMessage]);

  return (
    <section className="Dialog">
      {normilizedDialog.map((dialog) => (dialog.type === 'message' ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DialogItem {...dialog} key={dialog.id} onRemove={omRemove} />
      ) : <Title key={dialog.id} date={dialog.date} />))}
    </section>
  );
};

Dialog.propTypes = {
  newMessage: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

Dialog.defaultProps = {
  newMessage: {},
};

export default Dialog;
