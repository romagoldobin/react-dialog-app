import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const ThemeToggle = ({ children, onClick }) => (
  <button className="Theme Button" type="button" onClick={onClick} name="theme toggler">
    {children}
  </button>
);

ThemeToggle.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeToggle;
