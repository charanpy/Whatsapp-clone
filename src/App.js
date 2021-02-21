import { ThemeProvider } from "styled-components";
import AppRoute from "./Route";
import { lightTheme } from "./helpers/theme";
import "./styles.css";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppRoute />
    </ThemeProvider>
  );
};

export default App;
