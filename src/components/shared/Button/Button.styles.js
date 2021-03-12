import styled from 'styled-components';

const Button = styled.button`
  padding: 0.7rem;
  background: ${(props) => (props.danger ? '#CC0000' : '#00C851')};
  color: #fff;
  font-family: 'Open Sans Condensed';
  font-size: 1.6rem;
  font-weight: 600;
  transition: all 500ms linear;
  margin: 1.5rem 1.5rem;
  outline: none;
  border: none;
  width: 10rem;
  cursor: pointer;
  border-radius: 8px;
  &:hover {
    font-weight: 600;
    background: black;
    color: white;
  }
`;

export default Button;
