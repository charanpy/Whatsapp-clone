import styled from 'styled-components';
/* eslint-disable */
const Icon = styled.i`
  color: ${(props) =>
    (props.color && props.theme.mode && '#707477') || props.theme.Icon};
  font-size: ${(props) => props.fontSize}rem;
  margin-right: ${(props) => props.marginRight}rem;
  cursor: pointer;
  -webkit-text-stroke: 0px ${(props) => props.color || props.theme.Icon};

  &:hover {
    color: ${(props) =>
      props.theme.mode ? 'rgba(255,255,255,.8)' : '#212529'};
  }
`;

export default Icon;
