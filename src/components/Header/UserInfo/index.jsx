import React from 'react';

import './index.scss';

const UserInfo = () => (
  <div className="UserInfo">
    <span className="UserInfo__Name">User Name</span>
    <div className="UserInfo__Status">
      <span className="UserInfo__Online" />
      В сети
    </div>
  </div>
);

export default UserInfo;
