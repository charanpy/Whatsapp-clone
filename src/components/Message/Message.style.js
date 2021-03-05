import styled from 'styled-components';
/* eslint-disable */

export const ChatContainer = styled.div`
  overflow-y: scroll;
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  height: 200px;
  flex-grow: 1;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 7%;
  margin-top: 5px;
  align-items: flex-end;
  ${(props) =>
    !props.position &&
    `
      align-items: flex-start;
    `}
`;
export const Message = styled.div`
  font-size: 1.42rem;
  line-height: 1.9rem;
  position: relative;
  border-radius: 7.5px;
  width: 20%;
  padding: 0.5rem;
  background: ${(props) =>
    props.position ? props.theme.currentUserChat : props.theme.receiverChat};
`;

export const Tail = styled.span`
  position: absolute;
  bottom: 0;
  right: 15px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textLight};
`;

export const Chat = styled.span`
  font-size: 1.8rem;
  color: ${(props) => props.theme.color};
  font-family: 'NimbusSanTW01Con';
  word-wrap: break-word;
  // text-transform: capitalize;
  // margin-bottom: 1rem;
`;
