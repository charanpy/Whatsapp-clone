export const getAllMessages = (message) => {
  const messages = message.reduce((accumulator, value) => {
    return {
      ...accumulator,
      [value.key]: value,
    };
  }, {});
  return messages;
};

export const modifySeenStatus = (key, messages) => {
  const modifiedMessage = { ...messages };
  modifiedMessage[key] = {
    ...modifiedMessage[key],
    seen: true,
  };
  return modifiedMessage;
};

export const deleteNotification = (groupId, notification) => {
  if (!notification) return null;
  if (!notification[groupId]) return notification;
  const deletedNotification = { ...notification };
  delete deletedNotification[groupId];
  return deletedNotification;
};

export const addNotification = (groupId, message, notifications) => {
  if (!notifications) return null;
  const getGroup = notifications[groupId];
  const addedNotif = [...getGroup, message];
  console.log(addedNotif, 555);
  return null;
};
