// eslint-disable-next-line import/prefer-default-export
export const normalizeDialog = (dialog) => {
  const newDialog = [];
  // eslint-disable-next-line no-debugger
  // TODO: refactoring this (map?);

  dialog.forEach((item, i) => {
    //  i === 0
    //  fits object is modifying and push in new array
    //  item.is !== dialog[i - 1].is - different senders
    //  or current 'is' and previous 'is' not equal (that means senders are different)
    if (i === 0 || item.is !== dialog[i - 1].is) {
      newDialog.push({
        type: 'message',
        id: `item-message-${item.id}`,
        avatar: item.avatar,
        isReverse: item.is === 'my',
        isRemovable: item.is === 'my',
        messages: [
          {
            text: item.message,
            status: item.status,
            id: item.id,
            date: item.date,
          },
        ],
      });
    } else {
      // this means that message from the same user
      const position = newDialog.length - 1;
      newDialog[position].messages?.push({
        text: item.message,
        status: item.status,
        id: item.id,
        date: item.date,
      });
    }
  });

  return newDialog;
};
