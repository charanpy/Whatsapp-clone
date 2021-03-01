import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsUserLoaded } from '../../redux-sagas/user/user.selector';
import Spinner from '../../components/Spinner/Spinner';
import Auth from './Auth';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsUserLoaded,
});

const AuthContainer = compose(connect(mapStateToProps), Spinner)(Auth);

export default AuthContainer;
