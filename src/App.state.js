import { useEffect } from "react";
import { auth } from "./firebase/firebase";
import { lightTheme, darkTheme } from "./helpers/theme";
import { setTheme } from "./helpers/localstorage";

const AppState = (checkUserSession, setThemeLight, theme) => {
  useEffect(() => {
    const listenToAuth = auth.onAuthStateChanged((snap) => {
      console.log(11, snap);
      if (snap && snap.uid) {
        const { uid, email, photoURL, displayName } = snap;
        checkUserSession({
          uid,
          email,
          photoURL,
          displayName
        });
      }
    });
    return () => {
      listenToAuth();
    };
  }, [checkUserSession]);

  useEffect(() => {
    const userPreferredTheme = setTheme();
    if (userPreferredTheme && userPreferredTheme === "light") {
      setThemeLight();
    }
  }, [setThemeLight]);

  const AppTheme = () => (theme === "dark" ? darkTheme : lightTheme);
  return [AppTheme()];
};

export default AppState;
