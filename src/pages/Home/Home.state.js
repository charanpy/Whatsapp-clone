import { useEffect } from 'react';
import {
  getRef,
  isOfflineForDatabase,
  isOnlineForDatabase,
} from '../../firebase/firebase';

const Home = (userId, displayChat) => {
  useEffect(() => {
    const userStatusDatabaseRef = getRef(`status/${userId}`);
    const listenToRef = getRef('.info/connected');
    const listen = listenToRef.on('value', (snapshot) => {
      if (snapshot.val()) {
        userStatusDatabaseRef
          .onDisconnect()
          .set(isOfflineForDatabase)
          .then(() => {
            userStatusDatabaseRef.set(isOnlineForDatabase);
          });
      }
    });
    return () => listenToRef.off('value', listen);
  }, [userId]);

  useEffect(() => {
    const channelRef = getRef('channels');
    const listen = channelRef
      .child(userId)
      .orderByChild('createdAt')
      .startAt(Date.now())
      .on('child_added', (snap) => {
        console.log(snap.val(), 'ooo');
        if (snap.val()) {
          console.log('saga');
          displayChat([snap.val()]);
        }
      });
    return () => channelRef.child(userId).off('child_added', listen);
  }, [userId, displayChat]);
};

export default Home;
