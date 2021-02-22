import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBFrlXLPxef9rkJC7asLnlVmtFp_cWxWBw",
  authDomain: "w-clone-f3cce.firebaseapp.com",
  projectId: "w-clone-f3cce",
  storageBucket: "w-clone-f3cce.appspot.com",
  messagingSenderId: "744813491643",
  appId: "1:744813491643:web:adbbc3511c17293e6b409e",
  measurementId: "G-E39XNRJFX0"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// auth

export const auth = firebase.auth();
export const database = firebase.database();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = async () => {
  const currentUser = await auth.signInWithPopup(googleProvider);
  return currentUser;
};

export const signOut = async () => await auth.signOut();

export const createUserDocument = async (userDetails) => {
  if (!userDetails) return;

  const userRef = database.ref("users").child(userDetails.uid);
  const snapshot = await userRef.get();
  if (snapshot.exists()) {
    return;
  }
  await userRef.set(userDetails);
};
