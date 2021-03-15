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
import Navigate from '../Navigate/Navigate';
import ModalProvider from '../context/Modal';

const Header = ({
  icon1,
  icon2,
  text,
  label,
  chatProfile,
  position,
  onClick,
}) => {
  return (
    <ModalProvider>
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
          <Navigate navigateTo='/edit' iconName={icon1} />
          <Menu as='button' onClick={onClick}>
            <IconContainer as='button' className={icon2} />
          </Menu>
        </OptionsContainer>
      </HeaderContainer>
    </ModalProvider>
  );
};

Header.propTypes = {
  icon1: PropTypes.string,
  icon2: PropTypes.string,
  text: PropTypes.bool,
  label: PropTypes.string,
  chatProfile: PropTypes.string,
  position: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Header.defaultProps = {
  text: false,
  label: null,
  chatProfile: null,
  icon1: 'none',
  icon2: 'none',
  onClick: () => {},
};

export default React.memo(Header);
