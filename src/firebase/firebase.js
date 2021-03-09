import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBFrlXLPxef9rkJC7asLnlVmtFp_cWxWBw',
  authDomain: 'w-clone-f3cce.firebaseapp.com',
  projectId: 'w-clone-f3cce',
  storageBucket: 'w-clone-f3cce.appspot.com',
  messagingSenderId: '744813491643',
  appId: '1:744813491643:web:adbbc3511c17293e6b409e',
  measurementId: 'G-E39XNRJFX0',
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
  try {
    const { user } = await auth.signInWithPopup(googleProvider);
    // eslint-disable-next-line
    const { displayName, uid, photoURL, email } = user;
    return {
      displayName,
      uid,
      photoURL,
      email,
    };
  } catch (e) {
    return e;
  }
};

export const signOut = async () => {
  try {
    const res = await auth.signOut();
    return res;
  } catch (e) {
    return e;
  }
};

export const createUserDocument = async (userDetails) => {
  // console.log('func', userDetails);
  if (!userDetails?.uid) return {};

  try {
    const userRef = database.ref(`users/${userDetails?.uid}`);
    console.log('hi', userRef);
    const user = await userRef.once('value');
    if (user.exists()) {
      console.log(user.val(), 'ex');
      return user.val();
    }
    const addUser = await userRef.set({
      ...userDetails,
      groups: [],
    });
    console.log(addUser, 'no');
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
    console.log(e);
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
  console.log(privateChannels, 'users');
  return privateChannels;
};

export const getChannelsList = async (usersArray) => {
  console.log(111, usersArray);
  const channelsList = usersArray.map(async ({ userId, groupId, type }) => {
    console.log(222, type, userId);
    if (type === 'private') {
      const user = await getUserDetail(userId, groupId);
      return user;
    }
    return null;
  });
  const privateChannels = await Promise.all(channelsList);
  // console.log(privateChannels, 'users');
  return privateChannels;
};

// export const addChannel = async ({groupId}) => {

// }
