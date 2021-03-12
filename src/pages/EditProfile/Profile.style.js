import styled from 'styled-components';

export const ProfileContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.chatContainer};
  position: relative;
`;

export const NavigateContainer = styled.div`
  position: absolute;
  top:5%;
  left: 5%;
`;
