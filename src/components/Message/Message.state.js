import { useEffect, useRef } from 'react';
import { setSeen } from '../../firebase/channels';

const MessageState = (channel, currentUserId, messages) => {
  const messagesEndRef = useRef(null);
  useEffect(() => {
    setSeen(channel, currentUserId);
  }, [currentUserId, channel]);

  const scrollToBottom = () => {
    messagesEndRef?.current?.scrollIntoView({
      behaviour: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  return [messagesEndRef];
};

export default MessageState;
