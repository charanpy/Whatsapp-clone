import styled from 'styled-components';

const TestPanelContainer = styled.section`
  display: flex;
  min-height: 100%;
  width: 70%;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.sideContainer};

  @media(max-width: 650px){
    display: none;
  }
`;

export default TestPanelContainer;
