import styled from 'styled-components';

export const InputWrapper = styled.div`
  padding: 1rem;
  display: flex;
  position: relative;
  border-bottom: 0.5px solid ${(props) => props.theme.border};
  /* margin-top: 6.7rem; */
`;

export const Input = styled.input`
  width: ${(props) => props.width || 100}%;
  padding: ${(props) => (props.icon ? 1 : 1.5)}rem;
  position: relative;
  border-radius: 25px;
  background: ${(props) => props.theme.search};
  outline: none;
  border: none;
  padding-left: ${(props) => (props.icon ? 6.5 : 2)}rem;
  color: ${(props) => props.theme.textLight};

  &::placeholder {
    color: ${(props) => props.theme.textLight};
    // padding-left: 8rem;
    font-family: sans-serif;
    font-weight: 300;
    font-size: 1.4rem;
  }
`;

export const Icon = styled.i`
  color: ${(props) => props.theme.Icon};
  font-size: 1.8rem;
  position: absolute;
  left: 6%;
  top: 33%;
`;
