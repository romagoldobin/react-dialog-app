import React from 'react';
import DialogItem from './DialogItem';

import { normalizeDialog } from './helpers';
import data from '../../data';

import './index.scss';

const Dialog = () => {
  const normilizedDialog = normalizeDialog(data);

  return (
    <section className="Dialog">
      {normilizedDialog.map((dialog) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <DialogItem {...dialog} key={dialog.id} />
      ))}
    </section>
  );
};

export default Dialog;
