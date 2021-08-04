import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Dialog from './components/Dialog';
import Sender from './components/Sender';

import { ThemeContext } from './context';
import { getTheme, setTheme } from './helpers/theme';

function App() {
  const [message, setMessage] = useState(null);
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="Container">
        <Header />
        <Dialog newMessage={message} />
        <Sender onAddMessage={setMessage} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
