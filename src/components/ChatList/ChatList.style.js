import styled from 'styled-components';

const ChatListContainer = styled.section`
  display: flex;
  background: ${(props) => props.theme.chatContainer};
  width: 30%;
  min-height: 100vh;
  flex-direction: column;
  position: relative;

  @media (max-width: 650px) {
    width: 100vw;
  }
`;

export default ChatListContainer;
