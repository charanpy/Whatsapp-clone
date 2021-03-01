import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { selectProfilePhoto } from '../../redux-sagas/user/user.selector';
import { ImageContainer } from './ProfileImage.style';

const ProfileImage = ({ profilePic, chatProfile = null, height = 4 }) => {
  return (
    <ImageContainer
      src={chatProfile || profilePic}
      alt='user-photo'
      loading='lazy'
      height={height}
    />
  );
};

ProfileImage.propTypes = {
  profilePic: PropTypes.string.isRequired,
  chatProfile: PropTypes.string,
  height: PropTypes.number,
};

ProfileImage.defaultProps = {
  chatProfile: null,
  height: 4,
};

const mapStateToProps = createStructuredSelector({
  profilePic: selectProfilePhoto,
});

export default connect(mapStateToProps)(ProfileImage);
