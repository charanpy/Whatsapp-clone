import {
  AuthContainer,
  AuthBox,
  ImageContainer,
  Image,
  ImageText,
  ImageWrapper,
  SigninButton,
} from './Auth.style';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  googleSignInStart,
  signOutStart,
} from '../../redux-sagas/user/user.action';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import WhatsappIcon from '../../assets/Whatsapp.png';
import { selectIsUserAuthenticated } from '../../redux-sagas/user/user.selector';
import AuthState from './Auth.state';

const Auth = ({
  googleSignInStart: googleSignIn,
  signOutStart,
  isAuthenticated,
  history,
}) => {
  AuthState(isAuthenticated, history);
  return (
    <>
    {isAuthenticated && (<Redirect to='/'/>)}
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
          <SigninButton onClick={signOutStart}>SIGN OUT </SigninButton>
        </AuthBox>
      </AuthContainer>
    </>
  );
};

Auth.propTypes = {
  googleSignInStart: PropTypes.func.isRequired,
  signOutStart: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsUserAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
