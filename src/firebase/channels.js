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
  const groupRef = getRef('groups');
  const currentUserChannel = getRef(`channels/${currentUserId}`);
  const receiverChannel = getRef(`channels/${receiverId}`);

  const { key } = groupRef.push();
  try {
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
    console.log(e);
    return false;
  }
};

export const getMessages = async (groupId) => {
  try {
    const groupRef = getRef('groups');
    const messages = await groupRef.child(groupId).once('value');
    if (!messages.exists()) throw new Error('Not found');
    return messages.val();
  } catch (e) {
    console.log(e);
    return e;
  }
};
