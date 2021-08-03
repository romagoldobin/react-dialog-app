import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Sender = ({ onAddMessage }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    onAddMessage({
      id: Date.now(),
      avatar:
        'https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg',
      message: text,
      date: new Date().toISOString(),
      is: 'my',
      status: 'sended',
    });

    setText('');
  };
  const onChange = (e) => setText(e.target.value);

  return (
    <form className="Sender" onSubmit={onSubmit}>
      <input
        placeholder="Введите сообщение"
        value={text}
        onChange={onChange}
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

Sender.propTypes = {
  onAddMessage: PropTypes.func.isRequired,
};

export default Sender;
