import { useEffect } from "react";
import { auth } from "./firebase/firebase";

const AppState = (checkUserSession) => {
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
};

export default AppState;
