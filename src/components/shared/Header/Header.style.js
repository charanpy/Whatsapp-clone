/* eslint-disable */
import styled from 'styled-components';
import { ChatDetail } from '../../Chat/Chat.style';

export const ChatDetailWrapper = styled(ChatDetail)`
  margin-left: 2rem;
  display: flex;
  /* align-items: center; */
`;

export const HeaderContainer = styled.header`
  padding: 1rem 1.6rem;
  background: ${(props) => props.theme.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 3.2rem);
  z-index: 1000;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Menu = styled.button`
  background: transparent;
  border: none;
  outline: none;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
