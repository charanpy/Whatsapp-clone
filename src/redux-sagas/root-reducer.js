import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import themeReducer from "./theme/theme.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer
});

export default rootReducer;
