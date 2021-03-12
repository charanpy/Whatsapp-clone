import styled from 'styled-components';

const Image = styled.img`
  height: ${(props) => props.height}rem;
  width: ${(props) => props.width}rem;
  margin-bottom: 1rem;
`;

export default Image;
