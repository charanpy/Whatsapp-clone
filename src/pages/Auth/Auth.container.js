import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux-sagas/user/user.selector";
import Spinner from "../../components/Spinner/Spinner";
import Home from "../Home/Home";

const mapStateToProps = createStructuredSelector({
  isLoading: selectCurrentUser
});

const AuthContainer = compose(connect(mapStateToProps), Spinner)(Home);

export default AuthContainer;
