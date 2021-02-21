import {
  AuthContainer,
  AuthBox,
  ImageContainer,
  Image,
  ImageText,
  ImageWrapper,
  SigninButton
} from "./Auth.style";
import WhatsappIcon from "../../assets/Whatsapp.png";
const Auth = () => {
  return (
    <AuthContainer>
      <AuthBox>
        <ImageContainer>
          <ImageWrapper>
            <Image src={WhatsappIcon} />
          </ImageWrapper>
          <ImageText>SIGN IN TO WHATSAPP</ImageText>
        </ImageContainer>
        <SigninButton>SIGN IN WITH GOOGLE</SigninButton>
      </AuthBox>
    </AuthContainer>
  );
};

export default Auth;
