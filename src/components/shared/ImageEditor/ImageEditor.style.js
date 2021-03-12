import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0.5px 0.5px 0.5px rgb(49, 46, 46);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Editor = styled.div`
  width: 50%;
  border-radius: 8px;
  z-index: 100000;
  box-shadow: 0.5px 0.5px 0.5px rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  outline: none;
  border: none;
  background: #121212;
  cursor: pointer;
`;

export const Close = styled.span`
  font-size: 1.8rem;
  font-weight: 500;
  color: #bb86fc;
`;
