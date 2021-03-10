import { getRef, timestamp } from './firebase';

export const checkChannelExist = async (
  currentId,
  receiverId,
  channelId = null
) => {
  const channelRef = getRef(`channels/${currentId}`);
  const channel = await channelRef.child(receiverId).once('value');
  console.log(channel.key, 'ex', channel.exists() && channel.key === channelId);
  if (!channelId) return channel.exists();
  return channel.exists() && channel.key === channelId;
};

export const createChannel = async (currentUserId, receiverId) => {
  try {
    const groupRef = getRef('groups');
    console.log('fu');
    const currentUserChannel = getRef(`/channels/${currentUserId}`);
    const receiverChannel = getRef(`/channels/${receiverId}`);

    const { key } = groupRef.push();
    await groupRef.child(key).set({
      type: 'private',
      createdBy: currentUserId,
      receiver: receiverId,
      messages: [],
    });

    await currentUserChannel.child(receiverId).set({
      groupId: key,
      userId: receiverId,
      type: 'private',
      createdAt: timestamp,
    });

    await receiverChannel.child(currentUserId).set({
      groupId: key,
      userId: currentUserId,
      type: 'private',
      createdAt: timestamp,
    });
    return key;
  } catch (e) {
    console.log(e, 'oops');
    return false;
  }
};

export const addMessages = async (
  groupId,
  currentUserId,
  receiverId,
  message
) => {
  const groupRef = getRef('groups');
  const groupChild = groupRef.child(`${groupId}/messages`);
  const { key } = groupChild.push();
  const messageObject = {
    seen: false,
    createdBy: currentUserId,
    message,
    key,
    createdAt: timestamp,
    receiver: `${receiverId}false`,
  };

  const res = await groupChild.child(key).set(messageObject);
  return res;
};

export const getMessagesFromDb = async (groupId) => {
  const groupRef = getRef(`groups/${groupId}`);
  const groupMsg = await groupRef.child('messages').once('value');
  const messages = groupMsg.val();
  console.log(messages, '1');
  if (!messages) return null;
  const messagesKey = Object.keys(messages).map((val) => {
    return { ...messages[val], key: val };
  });
  return messagesKey;
};

export const setSeen = (channel, currentUserId) => {
  const channelRef = getRef(`groups/${channel.groupId}`);
  channelRef
    .child('messages')
    .orderByChild('receiver')
    .equalTo(`${currentUserId}false`)
    .once('value', (snapshot) => {
      console.log(snapshot.val(), 'fu');

      if (snapshot.val()) {
        snapshot.forEach((child) => {
          child.ref.update({
            seen: true,
            receiver: `${currentUserId}true`,
          });
        });
      }
    });
};

export const getNotifications = async (groupId, currentUserId) => {
  const groupRef = getRef(`groups/${groupId}`);
  const fetchNotification = await groupRef
    .child('messages')
    .orderByChild('receiver')
    .equalTo(`${currentUserId}false`)
    .once('value');
  const notifications = fetchNotification.val();
  console.log(notifications, 333);
  return notifications ? Object.values(notifications) : [];
};
