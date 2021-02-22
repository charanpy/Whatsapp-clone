import { themeActionTypes } from "./theme.type";

const initialState = {
  theme: "dark"
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case themeActionTypes.SET_COLOR_THEME:
      localStorage.setItem("theme", "dark");
      return {
        theme: "dark"
      };
    case themeActionTypes.SET_COLOR_THEME_LIGHT:
      localStorage.setItem("theme", "light");
      return {
        theme: "light"
      };
    case themeActionTypes.SET_COLOR_THEME_FAILURE:
    case themeActionTypes.SET_COLOR_THEME_LIGHT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default themeReducer;
