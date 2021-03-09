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
  /* position: relative; */
  background-position: center;
  background-size: contain;
`;

export default MessageContainer;
