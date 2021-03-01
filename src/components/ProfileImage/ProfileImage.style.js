import styled from 'styled-components';

export const ImageContainer = styled.img`
  width: ${(props) => props.height}rem;
  height: ${(props) => props.height}rem;
  border-radius: calc(${(props) => props.height}rem / 2);
`;

export const test = styled.div``;
