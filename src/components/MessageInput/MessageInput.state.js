import { useRef } from 'react';

const MessageInputState = () => {
  const message = useRef(null);
  const submitHandler = () => {
    if (message?.current?.value) {
      console.log(message?.current?.value);
    }
  };
  return [message, submitHandler];
};

export default MessageInputState;
