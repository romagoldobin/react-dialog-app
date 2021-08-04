import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Calendar from 'dayjs/plugin/calendar';

import './index.scss';

dayjs.extend(Calendar);

const Title = ({ date }) => (
  <div className="Title">
    {dayjs(date).calendar(null, {
      sameDay: '[Сегодня]',
      lastWeek: 'DD MMMM',
      sameElse: 'DD MMMM YYYY',
    })}
  </div>
);

Title.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Title;
