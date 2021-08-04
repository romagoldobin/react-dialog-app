/* eslint-disable import/prefer-default-export */
export const getTheme = () => localStorage.getItem('app-theme') || 'dark';

export const setTheme = (theme) => {
  localStorage.setItem('app-theme', theme);

  if (theme === 'dark') {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
};
