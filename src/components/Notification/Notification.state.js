import { useEffect } from 'react';
import { getRef } from '../../firebase/firebase';

const NotificationState = (
  getNotification,
  groupId,
  uid = null,
  currentGroup,
  getRealtimeNotification
) => {
  useEffect(() => {
    getNotification(groupId, uid);
  }, [getNotification, groupId, uid]);

  useEffect(() => {
    const groupRef = getRef(`groups/${groupId}`);
    let listenToMsg;
    let listen;
    if (currentGroup !== groupId) {
      listenToMsg = groupRef
        .child('messages')
        .orderByChild('createdAt')
        .startAt(Date.now());
      listen = listenToMsg.on('child_added', (snapshot) => {
        console.log(snapshot.val());
        if (snapshot.val() && snapshot.val()?.createdBy !== uid) {
          if (!snapshot.val().seen) {
            getRealtimeNotification(groupId, snapshot.val());
          }
        }
      });
    }

    return () => listenToMsg && listenToMsg.off('child_added', listen);
  }, [currentGroup, groupId, uid, getRealtimeNotification]);
};

export default NotificationState;
