import React from 'react';
import formatISO from 'date-fns/formatISO';
import PropTypes from 'prop-types';
import {
  MessageContainer,
  Tail,
  Message as MessageWrap,
  Chat,
  SeenIcon,
} from './Message.style';
import Image from '../shared/Image/Image';

const MessageList = ({ message, position, timestamp, seen }) => {
  return (
    <MessageContainer position={position}>
      <MessageWrap position={position}>
        <Tail>
          {formatISO(timestamp, { representation: 'time' }).slice(0, 5)}
          {seen !== null && <SeenIcon className='fas fa-check' seen={seen} />}
        </Tail>
        {message.includes('http') ? (
          <Image src={message} />
        ) : (
          <Chat>{message}</Chat>
        )}
      </MessageWrap>
    </MessageContainer>
  );
};

MessageList.propTypes = {
  message: PropTypes.string.isRequired,
  position: PropTypes.bool.isRequired,
  timestamp: PropTypes.number.isRequired,
  seen: PropTypes.bool,
};

MessageList.defaultProps = {
  seen: null,
};

export default MessageList;
