import React, { useState, useEffect } from 'react';
import { ThemeContext } from './context';
import { getTheme, setTheme } from './helpers/theme';
import MainPage from './pages/MainPage/MainPage';

function App() {
  const [theme, toggleTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainPage />
    </ThemeContext.Provider>
  );
}

export default App;
