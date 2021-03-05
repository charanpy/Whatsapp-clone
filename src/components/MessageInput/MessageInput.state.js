import { useRef, useState } from 'react';

const MessageInputState = (channel, currentUserId, addMessageStart) => {
  const message = useRef(null);
  const [emojiToggle, setEmojiToggle] = useState(true);
  const submitHandler = () => {
    if (message?.current?.value) {
      const { groupId, uid } = channel;
      addMessageStart(groupId, currentUserId, uid, message.current.value);
      message.current.value = '';
    }
  };

  const handleEmojiToggle = () => {
    setEmojiToggle((toggle) => !toggle);
  };

  return [message, submitHandler, emojiToggle, handleEmojiToggle];
};

export default MessageInputState;
