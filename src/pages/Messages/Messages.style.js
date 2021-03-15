import styled from 'styled-components';
import chatLight from '../../assets/chat-light.png';
import chatDark from '../../assets/chat-dark.png';
/* eslint-disable*/
const MessageContainer = styled.section`
  min-height: 100%;
  width: 70%;
  background: url(${(props) => (props.theme.mode ? chatDark : chatLight)});
  display: flex;
  flex-direction: column;
  border-left: ${(props) =>
    props.theme.mode ? '1px solid #EDEDED' : '1px solid #2A2F32'};
  background-position: center;
  background-size: contain;
  opacity: 1;
  transition: all 500ms linear;

  @media (max-width: 650px) {
    ${({ channel }) =>
      channel
        ? `
      position: absolute;
      width: 100vw;
      height: 100vh;
      opacity: 1;
  transition: all 500ms linear;

    `
        : `
  transition: all 500ms linear;

    opacity: 0;
      display: none;
    `}
  }

  @media (max-width: 650px) and (orientation: landscape) {
    ${({ channel }) =>
      channel
        ? `
      position: absolute;
      width: 100vw;
      opacity: 1;
      transition: all 500ms linear;
       `
        : `
      display: none;
    `}
  }
`;

export default MessageContainer;
