import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_SENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const storage = firebase.storage();
export const database = firebase.database();
export const check = () => console.log(auth.currentUser);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const timestamp = firebase.database.ServerValue.TIMESTAMP;
export const isOfflineForDatabase = {
  state: 'offline',
  last_changed: firebase.database.ServerValue.TIMESTAMP,
};

export const isOnlineForDatabase = {
  state: 'online',
  last_changed: firebase.database.ServerValue.TIMESTAMP,
};

// ref
export const getRef = (parent) => database.ref(parent);

// auth
export const signInWithGoogle = async () => {
  const res = await auth.signInWithPopup(googleProvider);
  return res;
};

export const signOut = async () => {
  const res = await auth.signOut();
  return res;
};

export const getUser = async (userPayload) => {
  const userRef = getRef('users');
  const user = await userRef.child(userPayload.uid).once('value');
  return user.val();
};
export const createUserDocument = async (userDetails) => {
  if (!userDetails?.uid) return {};

  try {
    const userRef = database.ref(`users/${userDetails?.uid}`);
    const user = await userRef.once('value');
    if (user.exists()) {
      return user.val();
    }
    const addUser = await userRef.set({
      ...userDetails,
      groups: [],
    });
    return addUser;
  } catch (e) {
    return e;
  }
};

export const searchUser = async (username) => {
  try {
    const users = await database
      .ref('users')
      .orderByChild('displayName')
      .startAt(`%${username}%`)
      .endAt(`${username}\uf8ff`)
      .limitToLast(2)
      .once('value');

    return users.val();
  } catch (e) {
    return e;
  }
};

export const addChannelToUserId = async (currentUserId, match) => {
  const channelRef = getRef('channels');
  await channelRef.child(currentUserId).set({
    private: true,
    user: match.params.userId,
  });
  await database.ref('channel').child(match.params.userId).set({
    private: true,
    user: currentUserId,
  });
};

export const getUserDetail = async (userId, groupId) => {
  try {
    const userRef = getRef('users');
    const user = await userRef.child(userId).once('value');
    const [displayName, , photoURL, uid] = Object.values(user.val());
    return {
      groupId,
      displayName,
      uid,
      photoURL,
    };
  } catch (e) {
    return e;
  }
};

export const addedChannelsList = async (currentUserId) => {
  const channelRef = getRef('channels');
  const channels = await channelRef.child(currentUserId).once('value');
  if (!channels.exists()) return [];
  const usersArray = Object.entries(channels.val());
  const channelsList = usersArray.map(async ([uid, channelDetail]) => {
    if (channelDetail.type === 'private') {
      const user = await getUserDetail(uid, channelDetail.groupId);
      return user;
    }
    return null;
  });
  const privateChannels = await Promise.all(channelsList);
  return privateChannels;
};

export const getChannelsList = async (usersArray) => {
  const channelsList = usersArray.map(async ({ userId, groupId, type }) => {
    if (type === 'private') {
      const user = await getUserDetail(userId, groupId);
      return user;
    }
    return null;
  });
  const privateChannels = await Promise.all(channelsList);
  return privateChannels;
};
