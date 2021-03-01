import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import {
  AuthContainer,
  AuthBox,
  ImageContainer,
  Image,
  ImageText,
  ImageWrapper,
  SigninButton,
} from './Auth.style';
import { googleSignInStart } from '../../redux-sagas/user/user.action';
import WhatsappIcon from '../../assets/Whatsapp.png';
import { selectIsUserAuthenticated } from '../../redux-sagas/user/user.selector';
import AuthState from './Auth.state';
/* eslint-disable */
const Auth = ({
  googleSignInStart: googleSignIn,
  isAuthenticated,
  history,
}) => {
  // eslint-disable-next-line
  AuthState(isAuthenticated, history);
  return (
    <>
      {isAuthenticated && <Redirect to='/' />}
      <AuthContainer>
        <AuthBox>
          <ImageContainer>
            <ImageWrapper>
              <Image src={WhatsappIcon} />
            </ImageWrapper>
            <ImageText>SIGN IN TO WHATSAPP</ImageText>
          </ImageContainer>
          <SigninButton onClick={googleSignIn}>
            SIGN IN WITH GOOGLE
          </SigninButton>
        </AuthBox>
      </AuthContainer>
    </>
  );
};

Auth.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsUserAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
