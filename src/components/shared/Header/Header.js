import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderContainer,
  OptionsContainer,
  Menu,
  ImageContainer,
  ChatDetailWrapper,
} from './Header.style';
import ProfileImage from '../ProfileImage/ProfileImage';
import IconContainer from '../Icon/Icon';
import { ChatName } from '../../Chat/Chat.style';
import ActiveUser from '../../ActiveUser/ActiveUser';

const Header = ({ icon1, icon2, text, label, chatProfile, position }) => {
  console.log('Header');
  return (
    <HeaderContainer position={position}>
      <ImageContainer>
        <ProfileImage chatProfile={chatProfile} />
        {text && (
          <ChatDetailWrapper>
            <ChatName>{label}</ChatName>
            <ActiveUser />
          </ChatDetailWrapper>
        )}
      </ImageContainer>
      <OptionsContainer>
        <IconContainer className={icon1} />
        <Menu>
          <IconContainer className={icon2} />
        </Menu>
      </OptionsContainer>
    </HeaderContainer>
  );
};

Header.propTypes = {
  icon1: PropTypes.string.isRequired,
  icon2: PropTypes.string.isRequired,
  text: PropTypes.bool,
  label: PropTypes.string,
  chatProfile: PropTypes.string,
  position: PropTypes.string.isRequired,
};

Header.defaultProps = {
  text: false,
  label: null,
  chatProfile: null,
};

export default React.memo(Header);
