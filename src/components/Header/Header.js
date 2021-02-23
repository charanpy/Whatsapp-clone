import { HeaderContainer, OptionsContainer } from "./Header.style";
import ProfileImage from "../ProfileImage/ProfileImage";

const Header = () => {
  return (
    <HeaderContainer>
      <ProfileImage />
      <OptionsContainer>
        <i className='fas fa-circle-notch'></i>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
