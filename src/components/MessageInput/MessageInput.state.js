import { useRef } from 'react';

const MessageInputState = (channel, currentUserId, addMessageStart) => {
  const message = useRef(null);
  const submitHandler = () => {
    if (message?.current?.value) {
      const { groupId, uid } = channel;
      addMessageStart(groupId, currentUserId, uid, message.current.value);
    }
  };
  return [message, submitHandler];
};

export default MessageInputState;
