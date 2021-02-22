import { createSelector } from "reselect";

const selectTheme = (state) => state.theme;

export const selectBackground = createSelector(
  [selectTheme],
  (app) => app.theme
);
