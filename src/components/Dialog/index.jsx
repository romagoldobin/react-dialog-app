import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import DialogItem from './DialogItem';
import Title from './Title';

import { normalizeDialog } from './helpers';

import './index.scss';
import { removeMessageAction } from '../../store/reducers/messages';

const Dialog = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.messagesReducer.messages);
  const normilizedDialog = normalizeDialog(messages);

  const omRemove = (id) => {
    dispatch(removeMessageAction(id));
  };

  return (
    <section className="Dialog">
      {normilizedDialog.map((dialog) => (dialog.type === 'message' ? (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DialogItem {...dialog} key={dialog.id} onRemove={omRemove} />
      ) : <Title key={dialog.id} date={dialog.date} />))}
    </section>
  );
};

export default Dialog;
