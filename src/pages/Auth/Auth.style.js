import styled from "styled-components";

export const AuthContainer = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ededed;
`;

export const AuthBox = styled.section`
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  width: 30%;

  @media (max-width: 850px) {
    width: 100%;
    background: none;
  }
`;

export const ImageContainer = styled.figure`
  margin: 1.3rem 0rem 2.5rem 0;
`;

export const ImageWrapper = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  height: 8rem;
`;

export const ImageText = styled.figcaption`
  font-family: "Open Sans Condensed";
  font-size: 2.3rem;
  font-weight: 600;
  margin-top: 2.5rem;
`;

export const SigninButton = styled.button`
  padding: 8px 8px;
  background: #25d366;
  font-family: "Open Sans Condensed", sans-serif;
  font-size: 1.7rem;
  color: white;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: all 500ms;
  margin-bottom: 2rem;

  &:hover {
    background: #128c7e;
  }
`;
