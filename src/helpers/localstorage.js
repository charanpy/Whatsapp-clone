export const setTheme = (theme = "dark") =>
  window && localStorage.setItem("theme", JSON.stringify(theme));

export const getTheme = () =>
  window && JSON.parse(localStorage.getItem("theme"));
