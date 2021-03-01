import { useEffect, useState } from 'react';
import { auth } from './firebase/firebase';
import { lightTheme, darkTheme } from './helpers/theme';
import { getTheme } from './helpers/localstorage';
// import { getChannelsList } from './helpers/firebaseQuery';

const AppState = (checkUserSession, setThemeLight, theme, history, displayChat) => {
  const [AppLoading, setAppLoading] = useState(true);
  // const [id, setId] = useState(null);

  useEffect(() => {
    const listenToAuth = auth.onAuthStateChanged((snap) => {
      console.log(11, snap);
      if (snap && snap.uid) {
        const {
          uid, email, photoURL, displayName,
        } = snap;
        checkUserSession({
          uid,
          email,
          photoURL,
          displayName,
        });
        displayChat(uid);
        setAppLoading(false);
      } else {
        setAppLoading(false);
        history.push('/signin');
      }
    });
    return () => {
      listenToAuth();
    };
  }, [checkUserSession, history, displayChat]);

  useEffect(() => {
    const userPreferredTheme = getTheme();
    console.log(222, userPreferredTheme);
    if (userPreferredTheme && userPreferredTheme === 'light') {
      console.log('light');
      setThemeLight();
    }
  }, [setThemeLight]);

  const AppTheme = () => (theme === 'dark' ? darkTheme : lightTheme);
  return [AppTheme(), AppLoading];
};

export default AppState;
