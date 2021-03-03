import styled from 'styled-components';

export const ChatContainer = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;
  padding: 0 1.3rem;
  // justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.border};
  transition: all 500ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background: ${(props) => props.theme.statusHover};
  }
`;

export const ImageContainer = styled.div`
  margin-right: 2rem;
`;
export const ChatDetail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChatName = styled.span`
  font-size: 2.2rem;
  color: ${(props) => props.theme.color};
  font-family: 'NimbusSanTW01Con';
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

export const Notification = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.textLight};
  font-family: sans-serif;
`;
