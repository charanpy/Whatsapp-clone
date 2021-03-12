import styled from 'styled-components';
import SharedInput from '../../shared/Input/Input';

export const LabelText = styled.label`
  font-family: 'Open Sans Condensed';
  font-size: 2.1rem;
  color: ${(props) => props.theme.color};
  margin-bottom: 1.4rem;
`;

export const Input = styled(SharedInput)`
  border: none;
  outline: none;
  width: 20rem;
  padding: 0.9rem;
`;
