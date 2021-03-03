import { useEffect } from 'react';

const MessageState = (channel, currentUserId, createChannel) => {
  const { groupId, uid } = channel;
  useEffect(() => {
    if (!groupId) {
      createChannel(currentUserId, uid);
    }
  }, [createChannel, groupId, uid, currentUserId]);
};

export default MessageState;
