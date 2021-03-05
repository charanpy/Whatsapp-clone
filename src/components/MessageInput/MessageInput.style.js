import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1.6rem 1.6rem;
  background: ${(props) => props.theme.header};
  width: calc(100% - 3.2rem);
  margin-top: auto;
  z-index: 100;
`;

export const SendMessage = styled.button`
  outline: none;
  border: none;
  margin-left: 1rem;
  background: transparent;
`;

export const InputContainer = styled.div``;
export const IconContainer = styled.i``;
