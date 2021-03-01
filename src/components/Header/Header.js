import React from 'react';
import { HeaderContainer, OptionsContainer, Icon, Menu } from './Header.style';
import ProfileImage from '../ProfileImage/ProfileImage';

const Header = () => {
  console.log('Header');
  return (
    <HeaderContainer>
      <ProfileImage />
      <OptionsContainer>
        <Icon className='fas fa-circle-notch' />
        <Menu>
          <Icon className='fas fa-ellipsis-v' />
        </Menu>
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
