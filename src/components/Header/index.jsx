import React, { useContext } from 'react';
import { IoIosSunny, IoIosMoon } from 'react-icons/io';
import { ThemeContext } from '../../context';

import UserInfo from './UserInfo';
import ThemeToggle from '../ThemeToggle';

import './index.scss';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const changeTheme = () => {
    // eslint-disable-next-line no-debugger
    debugger;
    const currnetTheme = theme === 'light' ? 'dark' : 'light';
    toggleTheme(currnetTheme);
  };

  return (
    <header className="Header">
      <UserInfo />
      <ThemeToggle onClick={changeTheme}>
        { theme === 'light' ? (<IoIosMoon size="20" className="Dark" />) : (<IoIosSunny size="20" className="Light" />) }
      </ThemeToggle>
    </header>
  );
};

export default Header;
