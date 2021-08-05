import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMessageAction, updateMessageStatus } from './store/reducers/messages';
import { ThemeContext } from './context';
import { getTheme, setTheme } from './helpers/theme';

import Header from './components/Header';
import Dialog from './components/Dialog';
import Sender from './components/Sender';

function App() {
  const [theme, toggleTheme] = useState(getTheme());
  const dispatch = useDispatch();

  // Оно тут надо ?
  const sendMessage = (message) => {
    dispatch(addMessageAction(message));

    setTimeout(() => {
      dispatch(updateMessageStatus({ id: message.id, status: 'readed' }));
    }, 5000);
  };

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <section className="Container">
        <Header />
        <Dialog />
        <Sender onAddMessage={sendMessage} />
      </section>
    </ThemeContext.Provider>
  );
}

export default App;
