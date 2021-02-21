import userTypes from "./user.type";

const initialState = {
  currentUser: null,
  loading: false
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GOOGLE_SIGN_IN_START:
    case userTypes.CHECK_USER_SESSION:
    case userTypes.SIGN_OUT_START:
      return {
        ...state,
        loading: true
      };
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        loading: false
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        currentUser: action.payload,
        loading: false
      };
    case userTypes.SIGN_IN_FAILURE:
    case userTypes.SIGN_OUT_SUCCESS:
    case userTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        currentUser: null,
        loading: false
      };
    default:
      return state;
  }
};

export default UserReducer;
