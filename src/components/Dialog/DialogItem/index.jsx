import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { IoIosTrash } from 'react-icons/io';
import Icon from '../../Icon';

import './index.scss';

const DialogItem = ({
  isReverse, isRemovable, messages, avatar,
}) => (
  <div className={classNames('DialogItem', { DialogItem_Reverse: isReverse, DialogItem_Removable: isRemovable })}>
    <img src={avatar} className="DialogItem__Avatar" alt="User Avatar" />
    <div className="DialogItem__MessagesList">
      {/* TODO: Message can be a component */}
      {messages.map((message) => (
        <div className="Message" key={message.id}>
          <div className="Message__Text">
            {message.text}
          </div>
          <div className="Message__Time">
            { dayjs(message.date).format('HH:mm') }
          </div>
          <Icon
            size={15}
            className="Message__Status"
            name={
              message.status === 'sended' ? 'MessageSended' : 'MessageReaded'
              }
          />
          <IoIosTrash
            data-id={message.id}
            size={18}
            className="Message__Remove"
          />
        </div>
      ))}
    </div>
  </div>
);

DialogItem.propTypes = {
  isReverse: PropTypes.bool.isRequired,
  isRemovable: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['sended', 'readed']),
    }),
  ).isRequired,
};

export default DialogItem;
