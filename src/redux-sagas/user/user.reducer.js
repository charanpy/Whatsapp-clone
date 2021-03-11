import userTypes from './user.type';

const initialState = {
  currentUser: null,
  loading: false,
  userLoading: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.GOOGLE_SIGN_IN_START:
    case userTypes.SIGN_OUT_START:
      return {
        ...state,
        loading: true,
      };

    case userTypes.CHECK_USER_SESSION:
      return {
        ...state,
        loading: true,
        userLoading: true,
      };
    case userTypes.GOOGLE_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case userTypes.SIGN_IN_SUCCESS:
      return {
        currentUser: action.payload,
        loading: false,
        userLoading: false,
      };

    case userTypes.SIGN_OUT_SUCCESS:
    case userTypes.GOOGLE_SIGN_IN_FAILURE:
      return {
        currentUser: null,
        loading: false,
      };

    case userTypes.SIGN_IN_FAILURE:
      return {
        currentUser: null,
        loading: false,
        userLoading: false,
      };
    case userTypes.CHANGE_PROFILE_SUCCESS:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
