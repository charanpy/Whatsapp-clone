import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 1rem 1.6rem;
  background: ${props => props.theme.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  color: ${props => props.color};
  height: 3rem;
  
`;