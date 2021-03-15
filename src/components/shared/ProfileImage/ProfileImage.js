import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import ImageView from '../ImageView/ImageView';
import { ModalContext as ModalProvider } from '../context/Modal';
import { selectProfilePhoto } from '../../../redux-sagas/user/user.selector';
import { ImageContainer, Button } from './ProfileImage.style';

const ProfileImage = ({ profilePic, chatProfile = null, height = 4 }) => {
  const { visible, setModalVisible } = useContext(ModalProvider);
  return (
    <>
      <Button onClick={setModalVisible}>
        <ImageContainer
          src={chatProfile || profilePic}
          alt='user-photo'
          loading='lazy'
          height={height}
        />
      </Button>
      <Modal visible={visible}>
        <ImageView action={setModalVisible} src={chatProfile || profilePic} />
      </Modal>
    </>
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
