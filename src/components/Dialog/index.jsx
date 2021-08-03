import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import DialogItem from './DialogItem';

import { normalizeDialog } from './helpers';
import data from '../../data';
import reducer from './reducer';

import './index.scss';

const Dialog = ({ newMessage }) => {
  const initialState = { messages: data };

  const [state, dispatch] = useReducer(reducer, initialState);
  const normilizedDialog = normalizeDialog(state.messages);

  useEffect(() => {
    if (!newMessage) return;
    dispatch({ type: 'add-message', payload: newMessage });
    console.log(state);
  }, [newMessage]);

  return (
    <section className="Dialog">
      {normilizedDialog.map((dialog) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DialogItem {...dialog} key={dialog.id} />
      ))}
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