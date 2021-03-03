import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7%;
  margin-top: 5px;
`;
export const Message = styled.div`
  font-size: 1.42rem;
  line-height: 1.9rem;
  position: relative;
  border-radius: 7.5rem;
  width: 20%;
  padding: 0.5rem;
  background: #128c7e;
`;

export const Tail = styled.span`
  position: absolute;
  top: 0;
  right: -8px;
  display: block;
  width: 0.8rem;
  height: 1.3rem;
`;
