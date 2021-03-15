import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { selectUserId } from '../../redux-sagas/user/user.selector';
import { changeProfileStart } from '../../redux-sagas/user/user.action';
import Navigate from '../../components/shared/Navigate/Navigate';
import ProfileImage from '../../components/shared/ProfileImage/ProfileImage';
import EditImage from '../../components/Profile/EditImage/EditImage';
import EditUsername from '../../components/Profile/EditUsername/Username';
import Theme from '../../components/Profile/Theme/Theme';
import UseProfileState from './Profile.state';
import { ProfileContainer, NavigateContainer } from './Profile.style';
import Logout from '../../components/shared/Logout/Logout';
import ModalProvider from '../../components/shared/context/Modal';

const Profile = ({ changeProfileStart: changeProfile, userId }) => {
  UseProfileState(changeProfile, userId);
  return (
    <ProfileContainer>
      <ModalProvider>
        <ProfileImage height={8} />
      </ModalProvider>
      <EditImage />
      <EditUsername />
      <NavigateContainer>
        <Navigate navigateTo='/' iconName='fas fa-arrow-left' />
      </NavigateContainer>
      <Theme />
      <Logout />
    </ProfileContainer>
  );
};

Profile.propTypes = {
  userId: PropTypes.string.isRequired,
  changeProfileStart: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeProfileStart: (profile) => dispatch(changeProfileStart(profile)),
});

const mapStateToProps = createStructuredSelector({
  userId: selectUserId,
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
