import React, { useState } from 'react';

import './index.scss';

const Sender = () => {
  const [text, setText] = useState('');
  const onSubmit = (e) => e.preventDefault();
  const onChange = (e) => setText(e.target.value);

  return (
    <form className="sender" onSubmit={onSubmit}>
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

export default Sender;
