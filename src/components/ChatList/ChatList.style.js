import styled from "styled-components";

export const ChatListContainer = styled.section`
  display: flex;
  background: ${(props) => props.theme.chatContainer};
  width: 35%;
  min-height: 100vh;
`;
